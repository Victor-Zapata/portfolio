import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import Curva from '../assets/Curva.svg'
import styles from '../styles/styles.scss'
import Curva2 from '../assets/Curva2.svg'
import victor from '../images/victor.png'
import marvel from '../images/marvel.jpg'
import DarkModeSwitch from '../components/DarkModeSwitch';
import coldplay from '../images/coldplay.jpg'
import bitcoin from '../images/bitcoin.jpg'
import breakingbad from '../images/breakingbad.jpg'
import henryfy from '../images/henryfy.jpg'
import simpsons from '../images/simpsons.jpg'
import Mail from '../assets/Mail.svg'


export default () => {
  const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Portafolio Víctor'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <section id='hero'>
        <div className='container-home'>
          <Curva className='imagen-home' />

          <ul className="languages">
            <i className='fas fa-globe' />
            {languages.map((lng) => (
              <li key={lng}>
                <button
                  className='boton-idioma'
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(lng);
                  }}>
                  {lng}
                </button>

              </li>
            ))}

          </ul>
          <DarkModeSwitch />
          <h1 className='animate__animated animate__fadeInRight'>
            {t('hi')} <span>{t('victor')}</span>
            <br />
            {t('developer')}
          </h1>
          <a className="cta-knowmore animate__animated animate__fadeInRight" href='#about'>
            {t('know')}
          </a>
        </div>
      </section>

      <section id='about'>
        <div className='container-perfil'>
          <h1>{t('about')}</h1>
          <div className='container-datos'>
            <img src={victor} className='imagen-victor animate__animated animate__fadeInUp' />
            <div className='container-resume'>
              <p className='animate__animated animate__fadeInRight'>
                {t('description')} </p>
              <p className='animate__animated animate__fadeInRight'>
                {t('description2')} </p>
              <a className="cta-botonperfil animate__animated animate__slideInRight" href='#proyectos'>{t('experiences')}</a>
            </div>
          </div>
          <Curva2 className='imagen-perfil' />
        </div>
      </section>
      <section id='proyectos'>

        <div className='container-proyectos'>
          <h2 className='animate__animated animate__fadeInDown'>
            {t('projects')}
          </h2>
          
          <div className='container-proyecto-img'>
            <div className='container-sin-img animate__animated animate__fadeInLeft'>
              <h3>
                {t('henryfy')}</h3>
              <h4>{t('description-henryfy')}</h4>
              <div className='container-botones'>
                <a className='boton-seelive' href='https://ecommerce-tickets.vercel.app/' target='_blank'>
                  {t('see-live')}
                </a>
                <a className='boton-sourcecode' href='https://github.com/henry-labs/ecommerce-ft07-g06' target='_blank'>{t('source-code')}</a>
              </div>
            </div>
            <img src={henryfy} className='imagen-proyectos animate__animated animate__fadeInRight' />
          </div>        

          <div className='container-proyecto-img'>
            <div className='container-sin-img animate__animated animate__fadeInLeft'>
              <h3>
                {t('super-heroes-app')}</h3>
              <h4>{t('description-super-heroes-app')}</h4>
              <div className='container-botones'>
                <a className='boton-seelive' href='https://cranky-lovelace-9b9565.netlify.app/' target='_blank'>
                  {t('see-live')}
                </a>
                <a className='boton-sourcecode' href='https://github.com/Victor-Zapata/SuperHeroesApp' target='_blank'>{t('source-code')}</a>
              </div>
            </div>
            <img src={marvel} className='imagen-proyectos animate__animated animate__fadeInRight' />
          </div>

          <div className='container-proyecto-img'>
            <div className='container-sin-img animate__animated animate__fadeInLeft'>
              <h3>{t('songs-search')}</h3>
              <h4>{t('description-songs-search')}</h4>
              <div className='container-botones'>
                <a className='boton-seelive' href='https://tender-golick-22c2a7.netlify.app/' target='_blank'>
                  {t('see-live')}
                </a>
                <a className='boton-sourcecode' href='https://github.com/Victor-Zapata/Buscador-Letras-Canciones' target='_blank'>{t('source-code')}</a>
              </div>
            </div>
            <img src={coldplay} className='imagen-proyectos animate__animated animate__fadeInRight' />
          </div>

          <div className='container-proyecto-img'>
            <div className='container-sin-img animate__animated animate__fadeInLeft'>
              <h3>{t('cryptocurrencies')}</h3>
              <h4>{t('description-cryptocurrencies')}</h4>
              <div className='container-botones'>
                <a className='boton-seelive' href='https://awesome-kowalevski-60c972.netlify.app/' target='_blank'>
                  {t('see-live')}
                </a>
                <a className='boton-sourcecode' href='https://github.com/Victor-Zapata/Criptomonedas' target='_blank'>{t('source-code')}</a>
              </div>
            </div>
            <img src={bitcoin} className='imagen-proyectos animate__animated animate__fadeInRight' />
          </div>

          <div className='container-proyecto-img'>
            <div className='container-sin-img animate__animated animate__fadeInLeft'>
              <h3>{t('breakingbad-app')}</h3>
              <h4>{t('description-breakingbad-app')}</h4>
              <div className='container-botones'>
                <a className='boton-seelive' href='https://goofy-sinoussi-8d435f.netlify.app/' target='_blank'>
                  {t('see-live')}
                </a>
                <a className='boton-sourcecode' href='https://github.com/Victor-Zapata/App-Breaking-Bad' target='_blank'>{t('source-code')}</a>
              </div>
            </div>
            <img src={breakingbad} className='imagen-proyectos animate__animated animate__fadeInRight' />
          </div>

          <div className='container-proyecto-img'>
            <div className='container-sin-img animate__animated animate__fadeInLeft'>
              <h3>{t('gif-expert-app')}</h3>
              <h4>{t('description-gif-expert-app')}</h4>
              <div className='container-botones'>
                <a className='boton-seelive' href='https://elastic-tesla-b32918.netlify.app/' target='_blank'>
                  {t('see-live')}
                </a>
                <a className='boton-sourcecode' href='https://github.com/Victor-Zapata/Gif-Expert-App' target='_blank'>{t('source-code')}</a>
              </div>
            </div>
            <img src={simpsons} className='imagen-proyectos animate__animated animate__fadeInRight' />
          </div>


        </div>
      </section>

      <section className='footer'>
        <div className="footer__container container">

          <div className="footer__texts">
            <h2 className="title">{t('contact-me')}</h2>

            <div className="footer__icons">
              <a href="https://github.com/Victor-Zapata" className="footer__icon fab fa-github" target='_blank'></a>
              <a href="https://twitter.com/VictorZapata_" className="footer__icon fab fa-twitter" target='_blank'></a>
              <a href="https://www.linkedin.com/in/v%C3%ADctor-zapata-periodista-y-desarrollador-39a894171/" className="footer__icon fab fa-linkedin-in" target='_blank'></a>
            </div>
            <h2 className="title">{t('navigation')}</h2>

            <nav className="footer__nav">
              <a href="#hero" className="footer__link">{t('home')}</a>
              <a href="#about" className="footer__link">{t('about')}</a>
              <a href="#proyectos" className="footer__link">{t('projects')}</a>
            </nav>

          </div>

          <Mail className='footer__img' />

        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
