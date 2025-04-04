import { c as createComponent, f as createAstro, b as addAttribute, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, g as renderSlot, h as renderHead } from './astro/server_DNbkF8D-.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useEffect, useRef, useState, useCallback } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast, ToastContainer, Slide } from 'react-toastify';
import i18n from 'i18next';

const TITLE = 'AiM Training Center';
const DESCRIPTION = 'Espacio de entrenamiento privado junto al Metro Poblenou. Se caracteriza por el entrenamiento personalizado o en grupo que se ajusta a las necesidades del cliente: mejora postural, tratamiento del dolor crónico, mejora de la composición corporal (aumentando masa muscular y bajando el % graso), rendimiento deportivo y prevención y readaptación de lesiones. Todo los entrenamientos están basados en evidencia científica. El concepto Learning Treaning hace referencia a la educación al cliente sobre entrenamiento, nutrición y hábitos para conseguir la adherencia a un plan o estilo de vida, único medio para conseguir objetivos y mantenerlos en el tiempo de forma eficiente.';

const $$Astro$3 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"><!-- Primary Meta Tags --><title>${TITLE}</title><meta name="title"${addAttribute(TITLE, "content")}><meta name="description"${addAttribute(DESCRIPTION, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(TITLE, "content")}><meta property="og:description"${addAttribute(DESCRIPTION, "content")}><!-- <meta property="og:image" content={new URL(image, Astro.url)} /> --><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(TITLE, "content")}><meta property="twitter:description"${addAttribute(DESCRIPTION, "content")}><!-- <meta property="twitter:image" content={new URL(image, Astro.url)} /> -->`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/BaseHead.astro", void 0);

const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};

async function getTranslations(lang = "es") {
    try {
      const translations = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../translations/cat.json": () => Promise.resolve().then(() => cat$1),"../translations/en.json": () => Promise.resolve().then(() => en$1),"../translations/es.json": () => Promise.resolve().then(() => es$1)})), `../translations/${lang}.json`, 3);
      return translations.default;
    } catch {
      const fallback = await Promise.resolve().then(() => es$1);
      return fallback.default;
    }
  }

const $$Astro$2 = createAstro();
const $$Translator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Translator;
  const pathname = Astro2.url.pathname;
  const lang = pathname.split("/")[1] || "es";
  const { name, variables = {}, isHtml = false } = Astro2.props;
  const translations = await getTranslations(lang);
  let raw = translations[name] ?? `[${name}]`;
  for (const key in variables) {
    raw = raw.replaceAll(`{{${key}}}`, variables[key]);
  }
  return renderTemplate`${isHtml ? renderTemplate`${maybeRenderHead()}<span>${unescapeHTML(raw)}</span>` : raw}`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/system/Translator.astro", void 0);

const en = {
  "menu.home": "Home",
  "menu.concept": "Concept",
  "menu.services": "Rates and services",
  "menu.facilities": "The studio",
  "menu.about.me": "About me",
  "menu.contact": "Contact",
  "menu.close": "Close",
  "landing.cover.text": "Come and learn to train in an exclusive, private setting in an idyllic space located in the heart of Poblenou (Barcelona)",
  "landing.text1": "At AiM, we focus on education as the foundation for achieving your goals, always applying the latest scientific evidence.",
  "landing.text2": "With over 10 years of experience, we are able to accurately understand each person's needs and help them in their physical and mental transformation.",
  "landing.text3": "Adherence and the establishment of realistic, achievable, and progressive habits over time make this methodology effective, regardless of your goal.",
  "landing.text4": "Come and learn to train exclusively and privately in an idyllic space in the heart of Poblenou.",
  "landing.concept.title": "AiM Concept",
  "landing.concept.text1": "The current healthcare system has a fundamental need: the prescription of physical exercise as a preventive measure, a treatment for diseases, and a way to improve quality of life. This should be supervised by a qualified professional in the field.",
  "landing.concept.text2": "If physical exercise were a pill, it would be the most prescribed by doctors, but it seems that there's little interest in it.",
  "landing.concept.text3": "This is where AiM is born, a concept designed to fill the gaps in today's healthcare system.",
  "landing.concept.text4": "AiM - Personal & Learning Training is a concept that not only trains but also educates on physical exercise, nutrition, and habit improvement tailored to each individual’s context.",
  "landing.concept.text5": "It is based on the 7 principles of training applied to the 7 basic movement patterns.",
  "landing.concept.text6": "All training is personalized according to the foundation of this formula.",
  "landing.concept.text7": "The other part is education: Here, you learn about calorie expenditure, fat loss, strength, habit improvement, injury, nutrition, anatomy, physiology, posture, and more.",
  "landing.concept.text8": "Understanding the 'why' behind things is key to achieving adherence to a sustainable lifestyle and plan.",
  "landing.concept.text9": "This is the only formula to achieve your goals, but no one tells you that.",
  "contact.name": "Name",
  "contact.message": "Message",
  "contact.phone": "Phone",
  "contact.address": "Address",
  "contact.send": "Send Message",
  "contact.sending": "Sending...",
  "contact.required": "Required",
  "contact.message.sent": "Message Sent",
  "contact.message.error": "Error. Please try again.",
  "section.services.title": "Services",
  "section.services.description": "<div>- Physical preparation</div><div>- Strength improvement</div><div>- Muscle gain</div><div>- Fat loss</div><div>- Police/firefighter exams preparation</div><div>- Sports performance</div><div>- Pain treatment through exercise</div><div>- Posture correction and mobility (Office workers)</div><div>- Injury prevention and rehabilitation</div><div>- Exercise for the elderly</div><div>- Habit change</div><div>- Personalized advice (online or in-person)</div><div>- Online training</div>",
  "section.services.rates": "Rates",
  "section.services.personal.training.title": "Personal Training",
  "section.services.personal.training.text1": "1 session per week - <b>200€/session</b>",
  "section.services.personal.training.text2": "2 sessions per week - <b>385€/session</b>",
  "section.services.personal.training.text3": "3 sessions per week - <b>540€/session</b>",
  "section.services.personal.duo.training.title": "Duo Training",
  "section.services.personal.duo.training.text1": "1 session per week – <b>140€/month</b>",
  "section.services.personal.duo.training.text2": "2 sessions per week – <b>280€/month</b>",
  "section.services.personal.duo.training.text3": "3 sessions per week – <b>420€/month</b>",
  "section.services.personal.duo.training.text4": "Star Service! Don't have a partner? We'll find one for you!",
  "section.services.personal.three.training.title": "Training of 3",
  "section.services.personal.three.training.text1": "1 session per week – <b>100€/month</b>",
  "section.services.personal.three.training.text2": "2 sessions per week – <b>200€/month</b>",
  "section.services.personal.three.training.text3": "3 sessions per week – <b>300€/month</b>",
  "section.services.personal.six.training.title": "Functional Training (up to 6 people)",
  "section.services.personal.six.training.text1": "1 time per week – <b>60€/month</b>",
  "section.services.personal.six.training.text2": "2 times per week – <b>120€/month</b>",
  "section.services.personal.six.training.text3": "3 times per week – <b>180€/month</b>",
  "section.services.personal.free.training.title": "Free Studio - Train freely following your trainer's routine",
  "section.services.personal.free.training.text1": "1 day per week – <b>40€/month</b>",
  "section.services.personal.free.training.text2": "2 days per week – <b>80€/month</b>",
  "section.services.personal.free.training.text3": "3 days per week – <b>120€/month</b>",
  "section.services.personal.studio.rent.title": "Studio rental to trainers",
  "section.services.personal.studio.rent.text1": "Request price",
  "section.services.personal.online.training.title": "Online Training",
  "section.services.personal.online.training.text1": "Train at home or your gym with 100% individualized coaching through the Harbiz App",
  "section.services.personal.online.training.text2": "<b>€100/month</b>",
  "section.services.to": "services",
  "section.facilities.title": "The studio",
  "section.facilities.description": "Our studio are designed to provide quality training",
  "section.facilities.to": "studio",
  "section.about-me.title": "About Me",
  "section.about-me.description": "The satisfaction of helping so many people and receiving their feedback has inspired me to establish this model where adherence and success are achieved by educating in all areas of human body science.",
  "section.aboutMe.to": "about-me",
  "section.about-me.text0": "My name is Germán.",
  "section.about-me.text1": "Graduate in Physical Activity and Sports Sciences (reg. no: 57080) at the University of Vigo.",
  "section.about-me.text2": "After further studies in Madrid, Germany, and Brazil, I settled in Barcelona to complete a Master’s in High-Performance Sports.",
  "section.about-me.text3": "I have had the experience of working with top-division football and basketball players, helping to address each athlete’s weak links from the ground up. Understanding the fundamentals and variables of sports science is essential for effective intervention with each athlete.",
  "section.about-me.text4": "Gradually, the demand for improving performance and health through exercise, nutrition, and habit enhancement has led me to focus on creating a Learning Training concept, where learning serves as the foundation for achieving goals.",
  "section.about-me.text5": "The satisfaction of helping so many people and receiving their feedback has inspired me to establish this model where adherence and success are achieved by educating in all areas of human body science.",
};

const en$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: en
}, Symbol.toStringTag, { value: 'Module' }));

const es = {
  "menu.home": "Inicio",
  "menu.concept": "Concepto",
  "menu.services": "Tarifas y servicios",
  "menu.facilities": "Instalaciones",
  "menu.about.me": "Sobre mí",
  "menu.contact": "Contacto",
  "menu.close": "Cerrar",
  "landing.cover.text": "Ven y aprende a entrenar de forma exclusiva y privada en un espacio idílico en el corazón de Poblenou (Barcelona)",
  "landing.text1": "En AiM nos preocupamos por la educación como base para conseguir tus objetivos, siempre aplicando la última evidencia científica.",
  "landing.text2": "Más de 10 años de experiencia hacen posible una lectura correcta de las necesidades de cada persona y poder ayudarlas en su transformación física y mental.",
  "landing.text3": "La adherencia y el establecimiento de hábitos reales, alcanzables y progresivos en el tiempo hacen que esta metodología funcione sea cual sea tu objetivo.",
  "landing.text4": "Ven y aprende a entrenar de forma exclusiva y privada en un espacio idílico en el corazón de Poblenou.",
  "landing.concept.title": "Concepto AiM",
  "landing.concept.text1": "Existe una necesidad básica a la hora de abordar la salud por parte del sistema sanitario actual: la prescripción de ejercicio físico como medida preventiva, de tratamiento de enfermedades y de mejora de la calidad de vida. A su vez, esto debería contemplarse bajo la supervisión de un profesional cualificado en el área.",
  "landing.concept.text2": "Si el ejercicio físico fuese una píldora, sería la más recetada por los médicos, pero parece ser que no interesa.",
  "landing.concept.text3": "Es ahí donde nace AiM, un concepto que busca rellenar los huecos vacíos en el sistema sanitario actual.",
  "landing.concept.text4": "AiM - Personal & Learning Training es el concepto en el que aparte de entrenar, se educa en ejercicio físico, nutrición y mejora de hábitos adaptados al contexto individual de cada persona.",
  "landing.concept.text5": "Se basa en los 7 principios del entrenamiento aplicados a los 7 patrones de movimiento básicos",
  "landing.concept.text6": "Todo entrenamiento es personalizado cumpliendo la base de la anterior fórmula",
  "landing.concept.text7": "La otra parte es la educación: Aquí se aprende sobre gasto calórico, pérdida de grasa, fuerza, mejora de hábitos, lesiones, nutrición, anatomía, fisiología, higiene postural, etc...",
  "landing.concept.text8": "La necesidad de saber el por qué de las cosas es clave para conseguir la adherencia a un plan y estilo de vida que se pueda mantener en el tiempo.",
  "landing.concept.text9": "Esta es la única fórmula para conseguir tus objetivos, pero no te lo cuentan.",
  "contact.name": "Nombre",
  "contact.message": "Mensaje",
  "contact.phone": "Teléfono",
  "contact.address": "Dirección",
  "contact.send": "Enviar mensaje",
  "contact.sending": "Enviando...",
  "contact.required": "Requerido",
  "contact.message.sent": "Mensaje enviado",
  "contact.message.error": "Error. Por favor, inténtalo de nuevo",
  "section.services.title": "Servicios",
  "section.services.description": "<div>- Preparación física</div><div>- Mejora de la fuerza</div><div>- Aumento de la masa muscular</div><div>- Pérdida de grasa</div><div>- Oposiciones policía/bombero</div><div>- Rendimiento deportivo</div><div>- Tratamiento del dolor mediante el ejercicio físico</div><div>- Corrección postural y movilidad (Office workers)</div><div>- Prevención y readaptación de lesiones</div><div>- Ejercicio físico para la tercera edad</div><div>- Cambio de hábitos</div><div>- Asesoramientos personalizados (online o presencial)</div><div>- Entrenamiento online</div>",
  "section.services.rates": "Tarifas",
  "section.services.personal.training.title": "Entrenamiento Personal",
  "section.services.personal.training.text1": "1 sesión a la semana – <b>200€/mes</b>",
  "section.services.personal.training.text2": "2 sesiones a la semana – <b>385€/mes</b>",
  "section.services.personal.training.text3": "3 sesiones a la semana – <b>540€/mes</b>",
  "section.services.personal.duo.training.title": "Entrenamiento Duo",
  "section.services.personal.duo.training.text1": "1 sesión a la semana – <b>140€/mes</b>",
  "section.services.personal.duo.training.text2": "2 sesiones a la semana – <b>280€/mes</b>",
  "section.services.personal.duo.training.text3": "3 sesiones a la semana – <b>420€/mes</b>",
  "section.services.personal.duo.training.text4": "¡Servicio ESTRELLA! ¿No tienes compañero/a? ¡Nosotros te lo buscamos!",
  "section.services.personal.three.training.title": "Entrenamiento de 3",
  "section.services.personal.three.training.text1": "1 sesión a la semana – <b>100€/mes</b>",
  "section.services.personal.three.training.text2": "2 sesiones a la semana – <b>200€/mes</b>",
  "section.services.personal.three.training.text3": "3 sesiones a la semana – <b>300€/mes</b>",
  "section.services.personal.six.training.title": "Entrenamiento Funcional (hasta 6 personas)",
  "section.services.personal.six.training.text1": "1 vez a la semana – <b>60€/mes</b>",
  "section.services.personal.six.training.text2": "2 veces a la semana – <b>120€/mes</b>",
  "section.services.personal.six.training.text3": "3 veces a la semana – <b>180€/mes</b>",
  "section.services.personal.free.training.title": "Estudio Libre - Entrena libremente siguiendo la rutina de tu entrenador",
  "section.services.personal.free.training.text1": "1 día a la semana – <b>40€/mes</b>",
  "section.services.personal.free.training.text2": "2 días a la semana – <b>80€/mes</b>",
  "section.services.personal.free.training.text3": "3 días a la semana – <b>120€/mes</b>",
  "section.services.personal.studio.rent.title": "Alquiler de sala a entrenadores",
  "section.services.personal.studio.rent.text1": "Consultar",
  "section.services.personal.online.training.title": "Entrenamiento online",
  "section.services.personal.online.training.text1": "Entrena en casa o en tu gym a través de mi asesoramiento 100% individualizado mediante la App Harbiz",
  "section.services.personal.online.training.text2": "<b>100€/mes</b>",
  "section.services.to": "servicios",
  "section.facilities.title": "Instalaciones",
  "section.facilities.description": "Nuestras instalaciones están diseñadas para proporcionar un entrenamiento de calidad",
  "section.facilities.to": "instalaciones",
  "section.about-me.title": "Sobre mí",
  "section.about-me.description": "La satisfacción de poder ayudar a tantas personas y recibir ese feedback hace que instaure este modelo donde la adherencia y el éxito se consiguen educando en todas las áreas de la ciencia que intervienen en el cuerpo humano",
  "section.aboutMe.to": "sobre-mi",
  "section.about-me.text0": "Mi nombre es Germán.",
  "section.about-me.text1": "Graduado en Ciencias de la Actividad Física y el Deporte (col: 57080) por la Universidad de Vigo.",
  "section.about-me.text2": "Tras continuar mi formación en Madrid, Alemania y Brasil decido instalarme en Barcelona para realizar un master de Alto Rendimiento Deportivo.",
  "section.about-me.text3": "He tenido la experiencia de trabajar y colaborar con jugadores de fútbol y baloncesto de primera división para abordar desde la base los eslabones débiles de cada deportista. Conocer las bases y las diferentes variables en ciencias del deporte a la hora de conseguir un objetivo son imprescindibles para una correcta intervención en cada deportista.",
  "section.about-me.text4": "Poco a poco la demanda por mejorar el rendimiento y la salud a través del ejercicio, la nutrición y la mejora de hábitos hace que ponga mi foco en crear un concepto de Learning Training donde el aprendizaje se usa como base en la consecución de objetivos.",
  "section.about-me.text5": "La satisfacción de poder ayudar a tantas personas y recibir ese feedback hace que instaure este modelo donde la adherencia y el éxito se consiguen educando en todas las áreas de la ciencia que intervienen en el cuerpo humano.",
};

const es$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: es
}, Symbol.toStringTag, { value: 'Module' }));

const cat = {
  "menu.home": "Inici",
  "menu.concept": "Concepte",
  "menu.services": "Tarifes y serveis",
  "menu.facilities": "Instal·lacions",
  "menu.about.me": "Sobre mi",
  "menu.contact": "Contacte",
  "menu.close": "Tancar",
  "landing.cover.text": "Vine i aprèn a entrenar de manera exclusiva i privada en un espai idíl·lic al cor de Poblenou (Barcelona)",
  "landing.text1": "A AiM ens preocupem per l'educació com a base per aconseguir els teus objectius, sempre aplicant l'última evidència científica.",
  "landing.text2": "Més de 10 anys d'experiència fan possible una correcta lectura de les necessitats de cada persona i poder ajudar-les en la seva transformació física i mental.",
  "landing.text3": "L'adherència i l'establiment d'hàbits reals, assolibles i progressius en el temps fan que aquesta metodologia funcioni sigui quin sigui el teu objectiu.",
  "landing.text4": "Vine i aprèn a entrenar de manera exclusiva i privada en un espai idíl·lic al cor de Poblenou.",
  "landing.concept.title": "Concepte AiM",
  "landing.concept.text1": "Hi ha una necessitat bàsica a l'hora d'abordar la salut per part del sistema sanitari actual: la prescripció d'exercici físic com a mesura preventiva, de tractament de malalties i de millora de la qualitat de vida. Això s'hauria de contemplar sota la supervisió d'un professional qualificat en l'àrea.",
  "landing.concept.text2": "Si l'exercici físic fos una píndola, seria la més receptada pels metges, però sembla que no interessa.",
  "landing.concept.text3": "Aquí és on neix AiM, un concepte que busca omplir els buits en el sistema sanitari actual.",
  "landing.concept.text4": "AiM - Personal & Learning Training és el concepte en què a part d'entrenar, s'educa en exercici físic, nutrició i millora d'hàbits adaptats al context individual de cada persona.",
  "landing.concept.text5": "Es basa en els 7 principis de l'entrenament aplicats als 7 patrons de moviment bàsics",
  "landing.concept.text6": "Tot entrenament és personalitzat complint la base de la fórmula anterior",
  "landing.concept.text7": "L'altra part és l'educació: Aquí s'aprèn sobre despesa calòrica, pèrdua de greix, força, millora d'hàbits, lesions, nutrició, anatomia, fisiologia, higiene postural, etc...",
  "landing.concept.text8": "La necessitat de saber el perquè de les coses és clau per aconseguir l'adherència a un pla i estil de vida que es pugui mantenir en el temps.",
  "landing.concept.text9": "Aquesta és l'única fórmula per aconseguir els teus objectius, però no t'ho expliquen.",
  "contact.name": "Nom",
  "contact.message": "Missatge",
  "contact.phone": "Telèfon",
  "contact.address": "Adreça",
  "contact.send": "Enviar missatge",
  "contact.sending": "Enviant...",
  "contact.required": "Obligatori",
  "contact.message.sent": "Missatge enviat",
  "contact.message.error": "Error. Si us plau, intenta-ho de nou",
  "section.services.title": "Serveis",
  "section.services.description": "<div>- Preparació física</div><div>- Millora de la força</div><div>- Augment de la massa muscular</div><div>- Pèrdua de greix</div><div>- Oposicions policia/bomber</div><div>- Rendiment esportiu</div><div>- Tractament del dolor mitjançant l'exercici físic</div><div>- Correcció postural i mobilitat (Office workers)</div><div>- Prevenció i readaptació de lesions</div><div>- Exercici físic per a la tercera edat</div><div>- Canvi d'hàbits</div><div>- Assessoraments personalitzats (online o presencial)</div><div>- Entrenament online</div>",
  "section.services.rates": "Tarifes",
  "section.services.personal.training.title": "Entrenament Personal",
  "section.services.personal.training.text1": "1 sessió a la setmana – <b>200€/mes</b>",
  "section.services.personal.training.text2": "2 sessions a la setmana – <b>385€/mes</b>",
  "section.services.personal.training.text3": "3 sessions a la setmana – <b>540€/mes</b>",
  "section.services.personal.duo.training.title": "Entrenament Duo",
  "section.services.personal.duo.training.text1": "1 sessió a la setmana – <b>140€/mes</b>",
  "section.services.personal.duo.training.text2": "2 sessions a la setmana – <b>280€/mes</b>",
  "section.services.personal.duo.training.text3": "3 sessions a la setmana – <b>420€/mes</b>",
  "section.services.personal.duo.training.text4": "Servei ESTRELLA! No tens company/a? Nosaltres te'l busquem!",
  "section.services.personal.three.training.title": "Entrenament de 3",
  "section.services.personal.three.training.text1": "1 sessió a la setmana – <b>100€/mes</b>",
  "section.services.personal.three.training.text2": "2 sessions a la setmana – <b>200€/mes</b>",
  "section.services.personal.three.training.text3": "3 sessions a la setmana – <b>300€/mes</b>",
  "section.services.personal.six.training.title": "Entrenament Funcional (fins a 6 persones)",
  "section.services.personal.six.training.text1": "1 vegada a la setmana – <b>60€/mes</b>",
  "section.services.personal.six.training.text2": "2 vegades a la setmana – <b>120€/mes</b>",
  "section.services.personal.six.training.text3": "3 vegades a la setmana – <b>180€/mes</b>",
  "section.services.personal.free.training.title": "Estudi Lliure - Entrena lliurement seguint la rutina del teu entrenador",
  "section.services.personal.free.training.text1": "1 vegada a la setmana – <b>40€/mes</b>",
  "section.services.personal.free.training.text2": "2 vegades a la setmana – <b>80€/mes</b>",
  "section.services.personal.free.training.text3": "3 vegades a la setmana – <b>120€/mes</b>",
  "section.services.personal.studio.rent.text1": "Consultar",
  "section.services.personal.online.training.title": "Entrenament online",
  "section.services.personal.online.training.text1": "Entrena a casa o al teu gimnàs a través del meu assessorament 100% individualitzat mitjançant l'App Harbiz",
  "section.services.personal.online.training.text2": "<b>100€/mes</b>",
  "section.services.to": "serveis",
  "section.facilities.title": "Instal·lacions",
  "section.facilities.description": "Les nostres instal·lacions estan dissenyades per proporcionar un entrenament de qualitat",
  "section.facilities.to": "instal·lacions",
  "section.about-me.title": "Sobre mi",
  "section.about-me.description": "La satisfacció de poder ajudar a tantes persones i rebre aquest feedback fa que instauri aquest model on l'adherència i l'èxit s'aconsegueixen educant en totes les àrees de la ciència que intervenen en el cos humà",
  "section.aboutMe.to": "sobre-mi",
  "section.about-me.text0": "El meu nom és Germán.",
  "section.about-me.text1": "Graduat en Ciències de l'Activitat Física i de l'Esport (col: 57080) per la Universitat de Vigo.",
  "section.about-me.text2": "Després de continuar la meva formació a Madrid, Alemanya i Brasil decideixo instal·lar-me a Barcelona per realitzar un màster d'Alt Rendiment Esportiu.",
  "section.about-me.text3": "He tingut l'experiència de treballar i col·laborar amb jugadors de futbol i bàsquet de primera divisió per abordar des de la base els enllaços febles de cada esportista. Conèixer les bases i les diferents variables en ciències de l'esport a l'hora d'aconseguir un objectiu són imprescindibles per a una correcta intervenció en cada esportista.",
  "section.about-me.text4": "A poc a poc la demanda per millorar el rendiment i la salut a través de l'exercici, la nutrició i la millora d'hàbits fa que posi el meu focus en crear un concepte de Learning Training on l'aprenentatge s'utilitza com a base en l'assoliment d'objectius.",
  "section.about-me.text5": "La satisfacció de poder ajudar a tantes persones i rebre aquest feedback fa que instauri aquest model on l'adherència i l'èxit s'aconsegueixen educant en totes les àrees de la ciència que intervenen en el cos humà.",
};

const cat$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: cat
}, Symbol.toStringTag, { value: 'Module' }));

i18n
  .use(initReactI18next)
  .init({
    lng: 'es', // puedes ajustar esto dinámicamente
    fallbackLng: 'es',
    resources: {
      es: { translation: es },
      en: { translation: en },
      cat: { translation: cat },
    },
    interpolation: { escapeValue: false },
  });

function Translator({ name, variables = {}, isHtml = false }) {
  const { t } = useTranslation();
  useEffect(() => {
    const pathLang = window.location.pathname.split("/")[1] || "es";
    if (i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang);
    }
  }, []);
  if (isHtml) {
    return /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: t(name, variables) } });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: t(name, variables) });
}

function ContactForm({ lang }) {
  const isMounted = useRef();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [isCaptchaError, setIsCaptchaError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang).then(() => setIsReady(true));
    } else {
      setIsReady(true);
    }
  }, [lang]);
  const notify = () => toast.success(t("contact.message.sent"), {
    position: "bottom-center",
    autoClose: 2e3,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "colored",
    transition: Slide
  });
  const notifyError = () => toast.error(t("contact.message.error"), {
    position: "bottom-center",
    autoClose: 2e3,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "colored",
    transition: Slide
  });
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const handleOnSubmit = useCallback(
    async (payload, { resetForm }) => {
      setIsSending(true);
      if (isRecaptchaVerified) {
        setIsCaptchaError(false);
        axios.post(
          "https://email-sender.rodrigotoledo.es/aimtrainingcenter/contact",
          payload
        ).then(() => {
          if (isMounted.current) {
            resetForm();
            notify();
          }
        }).catch(() => notifyError()).finally(() => setIsSending(false));
      } else {
        setIsCaptchaError(true);
        setIsSending(false);
      }
    },
    [isRecaptchaVerified]
  );
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`*${t("contact.required")}`),
    email: Yup.string().email("*Email inválido").required(`*${t("contact.required")}`),
    message: Yup.string().required(`*${t("contact.required")}`)
  });
  if (!isReady) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Formik,
      {
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema,
        initialValues: {
          name: "",
          email: "",
          message: ""
        },
        onSubmit: handleOnSubmit,
        children: ({ handleSubmit, errors }) => /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "fields", children: [
            /* @__PURE__ */ jsxs("div", { className: "field half", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", children: /* @__PURE__ */ jsx(Translator, { name: "contact.name" }) }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  type: "text",
                  name: "name",
                  className: errors?.name ? "error-input" : ""
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "name",
                  component: "div",
                  className: "error-message"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "field half", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  type: "text",
                  name: "email",
                  className: errors?.email ? "error-input" : ""
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "email",
                  component: "div",
                  className: "error-message"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "field", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "message", children: t("contact.message") }),
              /* @__PURE__ */ jsx(
                Field,
                {
                  as: "textarea",
                  name: "message",
                  rows: "6",
                  className: errors?.message ? "error-input" : ""
                }
              ),
              /* @__PURE__ */ jsx(
                ErrorMessage,
                {
                  name: "message",
                  component: "div",
                  className: "error-message"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "actions", children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "submit",
              value: isSending ? t("contact.sending") : t("contact.send"),
              className: "primary",
              disabled: isSending
            }
          ) }) }),
          /* @__PURE__ */ jsx(
            ReCAPTCHA,
            {
              sitekey: "6LeaVlUqAAAAAKi70FdbMddjv0gPsrhcqieFoqdF",
              onChange: () => setIsRecaptchaVerified(true)
            }
          ),
          isCaptchaError && /* @__PURE__ */ jsxs("div", { className: "error-message", children: [
            "*",
            /* @__PURE__ */ jsx(Translator, { name: "contact.required" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(ToastContainer, {})
  ] });
}

const $$Astro$1 = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section id="contact"> <div class="inner"> <section> ${renderComponent($$result, "ContactForm", ContactForm, { "lang": lang, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/dhodo/projects/aimtrainingcenterastro/src/components/Contact/ContactForm.jsx", "client:component-export": "default" })} </section> <section class="split"> <section> <div class="contact-method"> <span class="icon solid alt fa-envelope"></span> <h3>Email</h3> <a href="mailto:info@aimtrainingcenter.com">
info@aimtrainingcenter.com
</a> </div> </section> <section> <div class="contact-method"> <span class="icon solid alt fa-phone"></span> <h3> ${renderComponent($$result, "Translator", $$Translator, { "name": "contact.phone" })} </h3> <a href="tel: +34 615 37 70 46">+34 615 37 70 46</a> </div> </section> <section> <div class="contact-method"> <span class="icon solid alt fa-home"></span> <h3> ${renderComponent($$result, "Translator", $$Translator, { "name": "contact.address" })} </h3> <span>
C/ Pujades 236 – Bajos 1
<br>
Metro Poblenou
<br>
(08005) Barcelona
</span> </div> </section> </section> </div> </section>`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/Contact/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer id="footer"> <div class="inner"> <div class="flex"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.643177618291!2d2.2009861766824286!3d41.40355487129781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a380273eeb5f%3A0xf3fa701c8156ea64!2sAiM%20-%20Personal%20%26%20Learning%20Training!5e0!3m2!1ses!2ses!4v1727766189492!5m2!1ses!2ses" width="100%" height="200" loading="lazy" referrer-policy="no-referrer-when-downgrade" allow-full-screen=""></iframe> </div> <ul class="icons mt-10"> <li> <a href="https://www.instagram.com/aim_trainingcenter/" target="_blank" rel="noreferrer" class="icon brands alt fa-instagram" title="Instagram"> <span class="label">Instagram</span> </a> </li> </ul> <ul class="copyright mt-10"> <li>&copy; Copyright ${currentYear}</li> </ul> </div> </footer>`;
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/Footer.astro", void 0);

async function getLangT(lang) {
    try {
      const module = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../translations/cat.json": () => Promise.resolve().then(() => cat$1),"../translations/en.json": () => Promise.resolve().then(() => en$1),"../translations/es.json": () => Promise.resolve().then(() => es$1)})), `../translations/${lang}.json`, 3);
      return module.default
    } catch {
      const fallback = await Promise.resolve().then(() => es$1);
      return fallback.default
    }
  }

const logo = new Proxy({"src":"/_astro/Logo_AIM.CA8AzXyF.jpg","width":400,"height":225,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/dhodo/projects/aimtrainingcenterastro/src/assets/images/Logo_AIM.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { lang } = Astro2.props;
  const t = await getLangT(lang);
  const showES = lang !== "es";
  const showEN = lang !== "en";
  const showCAT = lang !== "cat";
  return renderTemplate(_a || (_a = __template(["<html", " data-astro-cid-dmqsi53g> <head>", "", '</head> <body data-astro-cid-dmqsi53g> <div class="upper-layer" data-astro-cid-dmqsi53g> <div id="wrapper" data-astro-cid-dmqsi53g> <header id="header" data-astro-cid-dmqsi53g> <nav data-astro-cid-dmqsi53g> <a class="logo border-b-0 w-16 sm:w-24 md:w-28 pt-1.5 md:pt-1 ps-2 sm:ps-8"', " data-astro-cid-dmqsi53g> <img", ' alt="Logo"', "", ' data-astro-cid-dmqsi53g> </a> <div data-astro-cid-dmqsi53g> <ul class="list-none flex absolute right-16 sm:right-20 md:right-28" data-astro-cid-dmqsi53g> ', " ", " ", ' </ul> <span id="open-menu" data-astro-cid-dmqsi53g></span> </div> </nav> </header> ', " ", " ", " <a", ' target="_blank" rel="noopener noreferrer"', ' id="whatsapp" class="icon brands fa-whatsapp bottom-4 right-4 rounded-full shadow-lg z-10" data-astro-cid-dmqsi53g></a> </div> <nav id="menu" data-astro-cid-dmqsi53g> <div class="inner" data-astro-cid-dmqsi53g> <ul class="links" data-astro-cid-dmqsi53g> <li data-astro-cid-dmqsi53g> <a', " data-astro-cid-dmqsi53g>", "</a> </li> <li data-astro-cid-dmqsi53g> <a", " data-astro-cid-dmqsi53g>", '</a> </li> <li data-astro-cid-dmqsi53g> <a class="w-full uppercase mb-2"', " data-astro-cid-dmqsi53g>", '</a> </li> <li data-astro-cid-dmqsi53g> <a class="w-full uppercase mb-2"', " data-astro-cid-dmqsi53g>", '</a> </li> <li data-astro-cid-dmqsi53g> <a class="w-full uppercase mb-2"', " data-astro-cid-dmqsi53g>", "</a> </li> <li data-astro-cid-dmqsi53g> <a", " data-astro-cid-dmqsi53g>", ' </a> </li> </ul> </div> <a id="close-menu" class="close" data-astro-cid-dmqsi53g> ', " </a> </nav> </div>  <script>\n  // Reset scroll on navigation\n  addEventListener('astro:after-swap', () => {\n    window.scrollTo(0, 0);\n  });\n\n  document.getElementById('open-menu')?.addEventListener('click', () => {\n    document.querySelector('.upper-layer')?.classList.add('is-menu-visible');\n  });\n\n  document.getElementById('close-menu')?.addEventListener('click', () => {\n    document.querySelector('.upper-layer')?.classList.remove('is-menu-visible');\n  });\n\n  // Control clase del men\xFA\n  document.addEventListener('menu:open', () => {\n    document.querySelector('.upper-layer')?.classList.add('is-menu-visible');\n  });\n<\/script></body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "data-astro-cid-dmqsi53g": true }), renderHead(), addAttribute(`/${lang}/`, "href"), addAttribute(logo.src, "src"), addAttribute(80, "width"), addAttribute(45, "height"), showES && renderTemplate`<li class="lang-menu-item px-0.5 sm:px-3" data-astro-cid-dmqsi53g> <a href="/es/" class="border-b-0" data-astro-cid-dmqsi53g>
ES
</a> </li>`, showEN && renderTemplate`<li class="lang-menu-item px-0.5 sm:px-3" data-astro-cid-dmqsi53g> <a href="/en/" class="border-b-0" data-astro-cid-dmqsi53g>
EN
</a> </li>`, showCAT && renderTemplate`<li class="lang-menu-item px-0.5 sm:px-3" data-astro-cid-dmqsi53g> <a href="/cat/" class="border-b-0" data-astro-cid-dmqsi53g>
CAT
</a> </li>`, renderSlot($$result, $$slots["default"]), renderComponent($$result, "Contact", $$Contact, { "data-astro-cid-dmqsi53g": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-dmqsi53g": true }), addAttribute(`https://wa.me/615377046`, "href"), addAttribute(t["menu.contact"], "title"), addAttribute(`/${lang}/`, "href"), renderComponent($$result, "Translator", $$Translator, { "name": "menu.home", "data-astro-cid-dmqsi53g": true }), addAttribute(`/${lang}#concept`, "href"), renderComponent($$result, "Translator", $$Translator, { "name": "menu.concept", "data-astro-cid-dmqsi53g": true }), addAttribute(`/${lang}/${t["section.services.to"]}`, "href"), renderComponent($$result, "Translator", $$Translator, { "name": "menu.services", "data-astro-cid-dmqsi53g": true }), addAttribute(`/${lang}/${t["section.facilities.to"]}`, "href"), renderComponent($$result, "Translator", $$Translator, { "name": "menu.facilities", "data-astro-cid-dmqsi53g": true }), addAttribute(`/${lang}/${t["section.aboutMe.to"]}`, "href"), renderComponent($$result, "Translator", $$Translator, { "name": "menu.about.me", "data-astro-cid-dmqsi53g": true }), addAttribute(`/${lang}#contact`, "href"), renderComponent($$result, "Translator", $$Translator, { "name": "menu.contact", "data-astro-cid-dmqsi53g": true }), renderComponent($$result, "Translator", $$Translator, { "name": "menu.close", "data-astro-cid-dmqsi53g": true }));
}, "/home/dhodo/projects/aimtrainingcenterastro/src/components/Layout.astro", void 0);

export { $$Layout as $, $$Translator as a, logo as l };
