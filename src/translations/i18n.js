import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import es from './es.json'
import cat from './cat.json'

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
  })

export default i18n
