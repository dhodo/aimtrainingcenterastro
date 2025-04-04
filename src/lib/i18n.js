export async function getTranslations(lang = "es") {
    try {
      const translations = await import(`../translations/${lang}.json`);
      return translations.default;
    } catch {
      const fallback = await import(`../translations/es.json`);
      return fallback.default;
    }
  }