import { c as createComponent } from '../chunks/astro/server_DNbkF8D-.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/es/"
      }
    });
  }
}, "/home/dhodo/projects/aimtrainingcenterastro/src/pages/index.astro", void 0);
const $$file = "/home/dhodo/projects/aimtrainingcenterastro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
