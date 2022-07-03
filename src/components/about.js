import React from "react"
import * as styles from "./about.module.css"
import { links } from "../constants"

const showMessage = () => {
  const message = document.getElementById(styles.copyMessage)
  message.style.display = "block"
}

const hideMessage = () => {
  const message = document.getElementById(styles.copyMessage)
  message.style.display = "none"
}

const openInNewTab = url => {
  window.open(url, "_blank").focus()
}

const About = () => {
  return (
    <div>
      <h1 className={styles.headline}>
        <div
          onClick={() => {
            showMessage()
            setTimeout(hideMessage, 2500)
            navigator.clipboard.writeText("allenlinsh@gmail.com")
          }}
        >
          <span className={styles.title1}>allen</span>
          <span className={styles.title2}>linsh@gmail.com</span>
        </div>
      </h1>
      <div id={styles.copyMessage}>Email copied</div>
      <p className={styles.underline}>
        {links.map(({ header, url, ariaLabel }, index) => (
          <React.Fragment key={index}>
            <span aria-label={ariaLabel} onClick={() => openInNewTab(url)}>
              {header}
            </span>
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  )
}

export default About
