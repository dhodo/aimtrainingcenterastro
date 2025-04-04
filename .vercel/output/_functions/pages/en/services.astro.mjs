import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BA1NGprv.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_OpGEQjAR.mjs';
import { $ as $$ServicesContent } from '../../chunks/ServicesContent_BLdzhzYu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "en" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServicesContent", $$ServicesContent, {})} ` })}`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/pages/en/services.astro", void 0);

const $$file = "/home/dhodo/projects/aimtrainingcenterastro/src/pages/en/services.astro";
const $$url = "/en/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Services,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
