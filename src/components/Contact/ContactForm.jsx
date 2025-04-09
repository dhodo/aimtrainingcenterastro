import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Translator from '../system/Translator.jsx';
import i18n from '../../translations/i18n'

export default function ContactForm({ lang }) {
  const isMounted = useRef();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [isCaptchaError, setIsCaptchaError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang).then(() => setIsReady(true))
    } else {
      setIsReady(true)
    }
  }, [lang])

  const notify = () =>
    toast.success(t('contact.message.sent'), {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: 'colored',
      transition: Slide,
    });
  const notifyError = () =>
    toast.error(t('contact.message.error'), {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: 'colored',
      transition: Slide,
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
        axios
          .post(
            'https://email-sender.rodrigotoledo.es/aimtrainingcenter/contact',
            payload
          )
          .then(() => {
            if (isMounted.current) {
              resetForm();
              notify();
            }
          })
          .catch(() => notifyError())
          .finally(() => setIsSending(false));
      } else {
        setIsCaptchaError(true);
        setIsSending(false);
      }
    },
    [isRecaptchaVerified]
  );

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(`*${t('contact.required')}`),
    email: Yup.string()
      .email('*Email inválido')
      .required(`*${t('contact.required')}`),
    message: Yup.string().required(`*${t('contact.required')}`),
  });

  if (!isReady) return null

  return (
    <>
    <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={validationSchema}
        initialValues={{
            name: '',
            email: '',
            message: '',
        }}
        onSubmit={handleOnSubmit}
    >
        {({ handleSubmit, errors }) => (
            <form onSubmit={handleSubmit}>
            <div className="fields">
                <div className="field half">
                <label htmlFor="name">
                    <Translator name="contact.name" />
                </label>
                <Field
                    type="text"
                    id="name"
                    name="name"
                    className={errors?.name ? 'error-input' : ''}
                />
                <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                />
                </div>
                <div className="field half">
                <label htmlFor="email">Email</label>
                <Field
                    type="text"
                    id="email"
                    name="email"
                    className={errors?.email ? 'error-input' : ''}
                />
                <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                />
                </div>
                <div className="field">
                <label htmlFor="message">
                    {t('contact.message')}
                    {/* <Translator name="contact.message" /> */}
                </label>
                <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows="6"
                    className={errors?.message ? 'error-input' : ''}
                ></Field>
                <ErrorMessage
                    name="message"
                    component="div"
                    className="error-message"
                />
                </div>
            </div>
            <ul className="actions">
                <li>
                <input
                    type="submit"
                    value={
                        isSending ? t('contact.sending') : t('contact.send')
                    }
                    className="primary"
                    disabled={isSending}
                />
                </li>
            </ul>
            <ReCAPTCHA
                sitekey="6LeaVlUqAAAAAKi70FdbMddjv0gPsrhcqieFoqdF"
                onChange={() => setIsRecaptchaVerified(true)}
            />
            {isCaptchaError && (
                <div className="error-message">
                *<Translator name="contact.required" />
                </div>
            )}
            </form>
        )}
        </Formik>
        <ToastContainer />
    </>
  );
}