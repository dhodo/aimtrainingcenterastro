import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Cd2soTqW.mjs';
import 'kleur/colors';
import { $ as $$AboutContent } from '../../chunks/AboutContent_BODJLla9.mjs';
import { a as $$Layout } from '../../chunks/Layout_BeBuJa6y.mjs';
export { renderers } from '../../renderers.mjs';

const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "cat" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutContent", $$AboutContent, {})} ` })}`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/pages/cat/sobre-mi.astro", void 0);

const $$file = "/home/dhodo/projects/aimtrainingcenterastro/src/pages/cat/sobre-mi.astro";
const $$url = "/cat/sobre-mi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SobreMi,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
