import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_Cd2soTqW.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B1CS0OTb.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/dhodo/projects/aimtrainingcenterastro/","cacheDir":"file:///home/dhodo/projects/aimtrainingcenterastro/node_modules/.astro/","outDir":"file:///home/dhodo/projects/aimtrainingcenterastro/dist/","srcDir":"file:///home/dhodo/projects/aimtrainingcenterastro/src/","publicDir":"file:///home/dhodo/projects/aimtrainingcenterastro/public/","buildClientDir":"file:///home/dhodo/projects/aimtrainingcenterastro/dist/client/","buildServerDir":"file:///home/dhodo/projects/aimtrainingcenterastro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.IBHBiLzk.css"}],"routeData":{"route":"/cat/serveis","isIndex":false,"type":"page","pattern":"^\\/cat\\/serveis\\/?$","segments":[[{"content":"cat","dynamic":false,"spread":false}],[{"content":"serveis","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cat/serveis.astro","pathname":"/cat/serveis","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.IBHBiLzk.css"}],"routeData":{"route":"/cat/sobre-mi","isIndex":false,"type":"page","pattern":"^\\/cat\\/sobre-mi\\/?$","segments":[[{"content":"cat","dynamic":false,"spread":false}],[{"content":"sobre-mi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cat/sobre-mi.astro","pathname":"/cat/sobre-mi","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.IBHBiLzk.css"}],"routeData":{"route":"/en/about-me","isIndex":false,"type":"page","pattern":"^\\/en\\/about-me\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"about-me","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/about-me.astro","pathname":"/en/about-me","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.IBHBiLzk.css"}],"routeData":{"route":"/en/services","isIndex":false,"type":"page","pattern":"^\\/en\\/services\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/services.astro","pathname":"/en/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.IBHBiLzk.css"}],"routeData":{"route":"/es/servicios","isIndex":false,"type":"page","pattern":"^\\/es\\/servicios\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/servicios.astro","pathname":"/es/servicios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.IBHBiLzk.css"}],"routeData":{"route":"/es/sobre-mi","isIndex":false,"type":"page","pattern":"^\\/es\\/sobre-mi\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"sobre-mi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/sobre-mi.astro","pathname":"/es/sobre-mi","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"section[data-astro-cid-qeenllc5]{background-image:url(/images/landing/cover.jpg);background-size:cover;background-position:center}@supports (background-image: url(image.webp)){section[data-astro-cid-qeenllc5]{background-image:url(/images/landing/cover.webp)}}.wrapper[data-astro-cid-nf35xw4x]{section{min-height:340px;position:relative;text-align:center;.section-content{width:100%;position:relative;top:-55px;z-index:2;display:flex;justify-content:center;picture{max-width:200px}}.section-mask{position:absolute;min-height:293px;top:-145px;right:0;left:0;z-index:1;background-color:#000;background-size:cover!important;transform:skewY(10deg)}h1{margin-bottom:0}}.top{min-height:340px}.main{min-height:450px;background-color:#ececec}.bottom{min-height:0;background-color:red}.has-parallax{background-attachment:fixed!important}}.data[data-astro-cid-nf35xw4x]{@media screen and (min-width: 710px){font-size:1.2rem}@media screen and (min-width: 1280px){font-size:1.875rem;line-height:3.5rem}}\n"},{"type":"external","src":"/_astro/index.IBHBiLzk.css"}],"routeData":{"route":"/[lang]","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/dhodo/projects/aimtrainingcenterastro/src/pages/[lang]/index.astro",{"propagation":"none","containsHead":true}],["/home/dhodo/projects/aimtrainingcenterastro/src/pages/cat/serveis.astro",{"propagation":"none","containsHead":true}],["/home/dhodo/projects/aimtrainingcenterastro/src/pages/cat/sobre-mi.astro",{"propagation":"none","containsHead":true}],["/home/dhodo/projects/aimtrainingcenterastro/src/pages/en/about-me.astro",{"propagation":"none","containsHead":true}],["/home/dhodo/projects/aimtrainingcenterastro/src/pages/en/services.astro",{"propagation":"none","containsHead":true}],["/home/dhodo/projects/aimtrainingcenterastro/src/pages/es/servicios.astro",{"propagation":"none","containsHead":true}],["/home/dhodo/projects/aimtrainingcenterastro/src/pages/es/sobre-mi.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/cat/serveis@_@astro":"pages/cat/serveis.astro.mjs","\u0000@astro-page:src/pages/cat/sobre-mi@_@astro":"pages/cat/sobre-mi.astro.mjs","\u0000@astro-page:src/pages/en/about-me@_@astro":"pages/en/about-me.astro.mjs","\u0000@astro-page:src/pages/en/services@_@astro":"pages/en/services.astro.mjs","\u0000@astro-page:src/pages/es/servicios@_@astro":"pages/es/servicios.astro.mjs","\u0000@astro-page:src/pages/es/sobre-mi@_@astro":"pages/es/sobre-mi.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","/home/dhodo/projects/aimtrainingcenterastro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_WUK9R6Qr.mjs","\u0000@astrojs-manifest":"manifest_rorg41zJ.mjs","/home/dhodo/projects/aimtrainingcenterastro/src/components/Contact/ContactForm.jsx":"_astro/ContactForm.DgiRtrg_.js","@astrojs/react/client.js":"_astro/client.B7yEkrid.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about2.Nzygqhkx.jpg","/_astro/index.IBHBiLzk.css","/favicon.ico","/favicon.svg","/_astro/ContactForm.DgiRtrg_.js","/_astro/client.B7yEkrid.js","/_astro/index.DzBoQokN.js","/_astro/index.GNLSjkBZ.css","/images/Logo_AIM.jpg","/images/Logo_AIM.png","/images/Logo_AIM.webp","/images/about.jpg","/images/about.webp","/images/about2.jpg","/images/about2.webp","/webfonts/fa-brands-400.eot","/webfonts/fa-brands-400.svg","/webfonts/fa-brands-400.ttf","/webfonts/fa-brands-400.woff","/webfonts/fa-brands-400.woff2","/webfonts/fa-regular-400.eot","/webfonts/fa-regular-400.svg","/webfonts/fa-regular-400.ttf","/webfonts/fa-regular-400.woff","/webfonts/fa-regular-400.woff2","/webfonts/fa-solid-900.eot","/webfonts/fa-solid-900.svg","/webfonts/fa-solid-900.ttf","/webfonts/fa-solid-900.woff","/webfonts/fa-solid-900.woff2","/images/facilities/01.jpg","/images/facilities/02.jpg","/images/facilities/03.jpg","/images/facilities/04.jpg","/images/facilities/05.jpg","/images/facilities/06.jpg","/images/facilities/07.jpg","/images/facilities/08.jpg","/images/facilities/09.jpg","/images/landing/cover.jpg","/images/landing/cover.webp","/images/landing/image1.jpg","/images/landing/image1.webp","/images/landing/image2.jpg","/images/landing/image2.webp","/images/landing/image3.jpg","/images/landing/image3.webp","/images/landing/image4.jpg","/images/landing/image4.webp","/images/services/star-fill.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tSd2LYux1Mz05eqjKsqKE/C8FldY9zs8WQVtirlPA4c="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
