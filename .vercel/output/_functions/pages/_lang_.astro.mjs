import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as addAttribute, f as createAstro } from '../chunks/astro/server_Cd2soTqW.mjs';
import 'kleur/colors';
import { $ as $$Translator, a as $$Layout } from '../chunks/Layout_BeBuJa6y.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const languages = ['es', 'en', 'cat'];

function getStaticLangPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}

const $$LandingCover = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="banner" class="major" data-astro-cid-qeenllc5> <div class="inner" data-astro-cid-qeenllc5> <header class="major" data-astro-cid-qeenllc5> <h1 data-astro-cid-qeenllc5></h1> </header> <div class="content max-w-2xl" data-astro-cid-qeenllc5> <p data-astro-cid-qeenllc5> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.cover.text", "data-astro-cid-qeenllc5": true })} </p> </div> </div> </section> `;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/LandingCover.astro", void 0);

const $$Sections = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      description: "landing.text1",
      image: "image1"
    },
    {
      description: "landing.text2",
      image: "image2"
    },
    {
      description: "landing.text3",
      image: "image3"
    },
    {
      description: "landing.text4",
      image: "image4"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center py-5" data-astro-cid-nf35xw4x> ${articles.map((a) => renderTemplate`<article class="flex sm:flex-row flex-col m-4 pb-5 lg:max-w-4xl xl:max-w-6xl gap-10" data-astro-cid-nf35xw4x> <div class="data sm:w-3/6 flex flex-col justify-center text-gray-700" data-astro-cid-nf35xw4x> ${renderComponent($$result, "Translator", $$Translator, { "name": a.description, "data-astro-cid-nf35xw4x": true })} </div> <picture class="bg-center bg-no-repeat bg-cover sm:w-3/6" data-astro-cid-nf35xw4x> <source${addAttribute(`/images/landing/${a.image}.webp`, "srcset")} type="image/webp" data-astro-cid-nf35xw4x> <img${addAttribute(`/images/landing/${a.image}.jpg`, "src")} data-astro-cid-nf35xw4x> </picture> </article>`)} </section> <div class="wrapper" data-astro-cid-nf35xw4x> <section class="top" data-astro-cid-nf35xw4x></section> <section data-astro-cid-nf35xw4x> <div class="section-content" data-astro-cid-nf35xw4x> <picture data-astro-cid-nf35xw4x> <source srcset="/images/Logo_AIM.webp" type="image/webp" data-astro-cid-nf35xw4x> <img src="/images/Logo_AIM.jpg" data-astro-cid-nf35xw4x> </picture> </div> <div class="section-mask" data-astro-cid-nf35xw4x></div> </section> <section class="bottom" data-astro-cid-nf35xw4x></section> </div> `;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/Sections.astro", void 0);

const $$Concept = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="two"> <div id="concept" class="inner"> <header class="major"> <h2> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.title" })} </h2> </header> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text1" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text2" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text3" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text4" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text5" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text6" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text7" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text8" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "landing.concept.text9" })} </p> </div> </section>`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/Concept.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  return getStaticLangPaths();
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": lang }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <section id="main"> ${renderComponent($$result2, "LandingCover", $$LandingCover, {})} ${renderComponent($$result2, "Sections", $$Sections, {})} ${renderComponent($$result2, "Concept", $$Concept, {})} </section> </div> ` })}`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/pages/[lang]/index.astro", void 0);

const $$file = "/home/dhodo/projects/aimtrainingcenterastro/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
