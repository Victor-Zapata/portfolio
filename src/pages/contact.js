import React from 'react';
import { Helmet } from 'react-helmet';


const ContactPage = () => {
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Gatsby Simplefolio'}</title>
        <html lang={'en'} />
        <meta name="description" content={'Gatsby Simplefolio'} />
      </Helmet>
      <h1>Contacto</h1>
    </>
  );
};

export default ContactPage;