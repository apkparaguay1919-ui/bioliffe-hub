// Integración con la API de YouTube Data v3.
//
// Para activarla, configura estas dos variables de entorno en Vercel
// (Project Settings → Environment Variables) y en tu .env.local:
//
//   YOUTUBE_API_KEY=tu_api_key_de_google_cloud
//   YOUTUBE_CHANNEL_ID=UCXXXXXXXXXXXXXXXXXXXXXX
//
// Cómo conseguirlas: ver la guía paso a paso que te dejó Claude en el chat,
// o los comentarios de cada paso más abajo.
//
// Mientras estas variables no estén configuradas, todas las funciones de
// este archivo devuelven null y la web sigue funcionando normalmente con el
// catálogo local de app/data/videos.ts (no se rompe nada).

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  isShort: boolean;
}

const API_BASE = "https://www.googleapis.com/youtube/v3";

function getCredentials() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!apiKey || !channelId) return null;
  return { apiKey, channelId };
}

function parseIsoDurationToSeconds(iso: string | undefined): number {
  if (!iso) return 0;
  const match = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso);
  if (!match) return 0;
  const [, h, m, s] = match;
  return (Number(h) || 0) * 3600 + (Number(m) || 0) * 60 + (Number(s) || 0);
}

/**
 * Trae los videos más recientes subidos al canal de Bioliffe, incluyendo si
 * cada uno es un Short (duración <= 60s) o un video largo.
 * Devuelve null si las credenciales no están configuradas o si la API falla,
 * para que el resto de la app pueda hacer fallback al catálogo local.
 */
export async function fetchChannelVideos(maxResults = 24): Promise<YouTubeVideo[] | null> {
  const creds = getCredentials();
  if (!creds) return null;

  try {
    // 1. Obtener el ID de la playlist de "subidos" del canal.
    const channelRes = await fetch(
      `${API_BASE}/channels?part=contentDetails&id=${creds.channelId}&key=${creds.apiKey}`,
      { next: { revalidate: 3600 } }
    );
    if (!channelRes.ok) return null;
    const channelData = await channelRes.json();
    const uploadsPlaylistId =
      channelData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) return null;

    // 2. Traer los videos de esa playlist.
    const playlistRes = await fetch(
      `${API_BASE}/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${uploadsPlaylistId}&key=${creds.apiKey}`,
      { next: { revalidate: 3600 } }
    );
    if (!playlistRes.ok) return null;
    const playlistData = await playlistRes.json();

    let videos: YouTubeVideo[] = (playlistData.items ?? []).map((item: any) => {
      const snippet = item.snippet ?? {};
      const videoId = snippet.resourceId?.videoId ?? "";
      const thumb =
        snippet.thumbnails?.maxres?.url ??
        snippet.thumbnails?.high?.url ??
        snippet.thumbnails?.medium?.url ??
        "";
      return {
        id: videoId,
        title: snippet.title ?? "Video Bioliffe",
        description: snippet.description ?? "",
        thumbnail: thumb,
        publishedAt: snippet.publishedAt ?? "",
        isShort: false,
      };
    });

    videos = videos.filter((v) => v.id);
    if (videos.length === 0) return videos;

    // 3. Traer duración real de cada video para distinguir Shorts de videos largos.
    const ids = videos.map((v) => v.id).join(",");
    const detailsRes = await fetch(
      `${API_BASE}/videos?part=contentDetails&id=${ids}&key=${creds.apiKey}`,
      { next: { revalidate: 3600 } }
    );
    if (detailsRes.ok) {
      const detailsData = await detailsRes.json();
      const durationById = new Map<string, number>(
        (detailsData.items ?? []).map((item: any) => [
          item.id,
          parseIsoDurationToSeconds(item.contentDetails?.duration),
        ])
      );
      videos = videos.map((v) => ({
        ...v,
        isShort: (durationById.get(v.id) ?? 999) > 0 && (durationById.get(v.id) ?? 999) <= 60,
      }));
    }

    return videos;
  } catch {
    return null;
  }
}

/** Devuelve true si la integración con YouTube está configurada. */
export function isYouTubeConfigured(): boolean {
  return getCredentials() !== null;
}
