import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./about.module.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      minimalistConfig(id: {eq: "minimalist-config"}) {
        headline
        subHeadline
      }
    }
  `)

  return (
    <>
      <h1 className={styles.headline}>{data.minimalistConfig.headline}</h1>
      <p className={styles.underline}
         dangerouslySetInnerHTML={{ __html: data.minimalistConfig.subHeadline }}></p>
    </>
  )
}

export default About