import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';



export default () => {
  
  return (
    <>
      <Helmet>
        <title>Page not found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div style={{display:'grid', placeContent:'center', height:'100vh'}}>
        <h1>Página no encontrada</h1>
      </div>
        
    </>
  );
};
