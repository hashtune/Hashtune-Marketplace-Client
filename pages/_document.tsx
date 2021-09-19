import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const GA_TRACKING_ID = '';

class MyDocument extends Document {
  render() {
    return (
       <Html lang="en"> 
       <Head>
         <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
         <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
         <meta name="description" content="Hashtune is a decentralized NFTs Music marketplace/ streamin g service that empowers artists to build their fanbase, consistent source of income and have a platform where they can publish/ monetize their music independently without record labels influencing their decisions and creative visions" />

         <meta content="./browserconfig.xml" name="msapplication-config" />
         <meta content="#" name="yandex-verification" />
         <meta content="#" name="google-site-verification"/>
    
         <link href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap" rel="stylesheet"/>
         <link rel="shortcut icon" type="image/png" href="./favicon.ico" />
         <link rel="apple-touch-icon" sizes="57x57" href="./favicons/apple-icon-57x57.png"/>
         <link rel="apple-touch-icon" sizes="60x60" href="./favicons/apple-icon-60x60.png"/>
         <link rel="apple-touch-icon" sizes="72x72" href="./favicons/apple-icon-72x72.png"/>
         <link rel="apple-touch-icon" sizes="76x76" href="./favicons/apple-icon-76x76.png"/>
         <link rel="apple-touch-icon" sizes="114x114" href="./favicons/apple-icon-114x114.png"/>
         <link rel="apple-touch-icon" sizes="120x120" href="./favicons/apple-icon-120x120.png"/>
         <link rel="apple-touch-icon" sizes="152x152" href="./favicons/apple-icon-152x152.png"/>
         <link rel="apple-touch-icon" sizes="167x167" href="./favicons/apple-icon-167x167.png"/>
         <link rel="apple-touch-icon" sizes="180x180" href="./favicons/apple-icon-180x180.png"/>
         <link href="./manifest.json" rel="manifest" />

         <meta name="msapplication-TileImage" content="./favicons/ms-icon-144x144.png"/>

         <meta name="msapplication-TileColor" content="#F0D065" />
         <meta name="theme-color" content="#F0D065" />


        {/* SEO Meta Tags */}
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="Hashtune . Home"/>
         <meta property="og:url" content="https://hashtune.co"/>
         <meta property="og:image" content="public/featured.jpg" />
         <meta property="og:description" content="Hashtune is a decentralized NFTs Music marketplace/ streamin g service that empowers artists to build their fanbase, consistent source of income and have a platform where they can publish/ monetize their music independently without record labels influencing their decisions and creative visions" />


         <meta name="twitter:card" content="summary"/>
         <meta name="twitter:title" content="Hashtune . Home"/>
         <meta name="twitter:site" content="@Hashtune"/>
         <meta name="twitter:description/"
         content="Hashtune is a decentralized NFTs Music marketplace/ streamin g service that empowers artists to build their fanbase, consistent source of income and have a platform where they can publish/ monetize their music independently without record labels influencing their decisions and creative visions" />
         <meta name="twitter:image" content="public/featured.jpg" />
         <meta name="twitter:image:alt" content="Hashtune"/>

         <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
         <script
         // eslint-disable-next-line react/no-danger
         dangerouslySetInnerHTML={{
            __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${GA_TRACKING_ID}');
         `
         }}
         />

          
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;