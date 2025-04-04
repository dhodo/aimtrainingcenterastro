export const languages = ['es', 'en', 'cat'];

export function getStaticLangPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}