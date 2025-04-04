export async function getLangT(lang) {
    try {
      const module = await import(`../translations/${lang}.json`)
      return module.default
    } catch {
      const fallback = await import(`../translations/es.json`)
      return fallback.default
    }
  }