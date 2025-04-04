import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Cd2soTqW.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_BeBuJa6y.mjs';
import { $ as $$ServicesContent } from '../../chunks/ServicesContent_DOGiOEko.mjs';
export { renderers } from '../../renderers.mjs';

const $$Serveis = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "cat" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServicesContent", $$ServicesContent, {})} ` })}`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/pages/cat/serveis.astro", void 0);

const $$file = "/home/dhodo/projects/aimtrainingcenterastro/src/pages/cat/serveis.astro";
const $$url = "/cat/serveis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Serveis,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
