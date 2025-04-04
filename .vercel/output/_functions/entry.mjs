import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D4AqaRXW.mjs';
import { manifest } from './manifest_cu_yyLWq.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/cat/serveis.astro.mjs');
const _page2 = () => import('./pages/cat/sobre-mi.astro.mjs');
const _page3 = () => import('./pages/en/about-me.astro.mjs');
const _page4 = () => import('./pages/en/services.astro.mjs');
const _page5 = () => import('./pages/es/servicios.astro.mjs');
const _page6 = () => import('./pages/es/sobre-mi.astro.mjs');
const _page7 = () => import('./pages/_lang_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cat/serveis.astro", _page1],
    ["src/pages/cat/sobre-mi.astro", _page2],
    ["src/pages/en/about-me.astro", _page3],
    ["src/pages/en/services.astro", _page4],
    ["src/pages/es/servicios.astro", _page5],
    ["src/pages/es/sobre-mi.astro", _page6],
    ["src/pages/[lang]/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b8ce7465-5490-47da-89cf-a7f62e0caaff",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
