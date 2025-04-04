import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BA1NGprv.mjs';
import 'kleur/colors';
import { $ as $$AboutContent } from '../../chunks/AboutContent_CbpbFvud.mjs';
import { a as $$Layout } from '../../chunks/Layout_OpGEQjAR.mjs';
export { renderers } from '../../renderers.mjs';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutContent", $$AboutContent, {})} ` })}`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/pages/en/about-me.astro", void 0);

const $$file = "/home/dhodo/projects/aimtrainingcenterastro/src/pages/en/about-me.astro";
const $$url = "/en/about-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AboutMe,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
