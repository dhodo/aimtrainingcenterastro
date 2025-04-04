import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_Cd2soTqW.mjs';
import 'kleur/colors';
import { $ as $$Translator } from './Layout_BeBuJa6y.mjs';
import { $ as $$Image } from './_astro_assets_CLHvj6jC.mjs';

const about2 = new Proxy({"src":"/_astro/about2.Nzygqhkx.jpg","width":500,"height":673,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/dhodo/projects/aimtrainingcenterastro/src/assets/images/about2.jpg";
							}
							
							return target[name];
						}
					});

const $$AboutContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="main" class="page"> <div id="one" class="inner"> <header class="major"> <h1> ${renderComponent($$result, "Translator", $$Translator, { "name": "section.about-me.title" })} </h1> </header> <div class="flex flex-col md:flex-row"> <div class="w-full lg:w-2/3"> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "section.about-me.text0" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "section.about-me.text1" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "section.about-me.text2" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "section.about-me.text3" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "section.about-me.text4" })} </p> <p> ${renderComponent($$result, "Translator", $$Translator, { "name": "section.about-me.text5" })} </p> </div> <div class="w-full lg:w-1/3"> ${renderComponent($$result, "Image", $$Image, { "src": about2, "alt": "Germ\xE1n L\xF3pez Pereira - Entrenador personal", "width": 491, "height": 661, "class": "mx-auto" })} <!-- <ImageWrapper
          src={about2}
          alt="Germán López Pereira - Entrenador personal"
          width={491}
          height={661}
          class="mx-auto"
        /> --> </div> </div> </div> </section>`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/AboutContent.astro", void 0);

export { $$AboutContent as $ };
