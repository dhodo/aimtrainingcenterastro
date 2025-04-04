export const languages = ['es', 'en', 'cat'];

export function getStaticLangPaths() {
  return {
    paths: languages.map((lang) => ({ params: { lang } }))
  };
}
