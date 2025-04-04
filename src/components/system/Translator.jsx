import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../translations/i18n'

export default function Translator({ name, variables = {}, isHtml = false }) {
  const { t } = useTranslation();

  useEffect(() => {
    const pathLang = window.location.pathname.split('/')[1] || 'es'
    if (i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang)
    }
  }, [])

  if (isHtml) {
    return <span dangerouslySetInnerHTML={{ __html: t(name, variables) }} />
  }

  return <>{t(name, variables)}</>;
}