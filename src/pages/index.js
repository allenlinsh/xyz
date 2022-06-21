import React from "react"
import Particles from "react-particles-js"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import * as styles from "./index.module.css"
import About from "../components/about"
import particleOptions from "../../assets/particles.json"

import { initializeApp } from "firebase/app"
import * as config from "../utils/config"

// Initialize Firebase
initializeApp(config)

const App = () => {
  const data = useStaticQuery(graphql`
    query {
      context(id: { eq: "context" }) {
        title
        description
        siteUrl
        appName
      }
    }
  `)

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <title>{data.context.title}</title>
        <meta name="title" content={data.context.title} />
        <meta name="description" content={data.context.description} />
        <link rel="canonical" href={data.context.siteUrl} />

        <meta name="application-name" content={data.context.appName} />
        <meta name="theme-color" content="#5fafbf" />
        <meta
          name="apple-mobile-web-app-title"
          content={data.context.appName}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EZ3SWHP93H"
        />
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EZ3SWHP93H');
        `}
        </script>
      </Helmet>

      <Particles className={styles.particles} params={particleOptions} />

      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <About />
        </div>
      </div>
    </>
  )
}

export default App
