module.exports = [
"[project]/app/lib/whatsapp.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WA_MESSAGES",
    ()=>WA_MESSAGES,
    "createWhatsAppLink",
    ()=>createWhatsAppLink
]);
const WA_NUMBER = "51950639288";
function createWhatsAppLink(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}
const WA_MESSAGES = {
    general: "Hola Javier, quiero más información sobre Bioliffe Moringa.",
    producto: "Hola Javier, quiero más información sobre los productos Bioliffe Moringa.",
    negocio: "Hola Javier, quiero conocer la oportunidad de negocio con Bioliffe Moringa.",
    mentoria: "Hola Javier, quiero recibir mentoría para empezar correctamente.",
    evento: "Hola Javier, quiero registrarme en el próximo evento Bioliffe Moringa."
};
}),
"[project]/app/components/WhatsAppFloat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppFloat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/whatsapp.ts [app-ssr] (ecmascript)");
"use client";
;
;
function WhatsAppFloat() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createWhatsAppLink"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$whatsapp$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WA_MESSAGES"].general),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "WhatsApp"
        }, void 0, false, {
            fileName: "[project]/app/components/WhatsAppFloat.tsx",
            lineNumber: 1,
            columnNumber: 421
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/WhatsAppFloat.tsx",
        lineNumber: 1,
        columnNumber: 130
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_13c6w17._.js.map