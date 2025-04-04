import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Cd2soTqW.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_BeBuJa6y.mjs';
import { $ as $$ServicesContent } from '../../chunks/ServicesContent_DOGiOEko.mjs';
export { renderers } from '../../renderers.mjs';

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "es" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServicesContent", $$ServicesContent, {})} ` })}`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/pages/es/servicios.astro", void 0);

const $$file = "/home/dhodo/projects/aimtrainingcenterastro/src/pages/es/servicios.astro";
const $$url = "/es/servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Servicios,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
