import React, { useState, useEffect } from "react"
import classes from "./About.module.scss"

const About = (props) => {
  const [load, setLoad] = useState(true)
  const [menu, setMenu] = useState(true)
  useEffect(() => {
    setTimeout(() => setMenu(!props.openMenu), 0)
  }, [props])

  useEffect(() => {
    setTimeout(() => setLoad(false), 600)
  }, [])

  return (
    <div
      className={
        menu
          ? load
            ? [classes.AboutContainer, classes.AboutContainerDisabled].join(" ")
            : classes.AboutContainer
          : [classes.AboutContainer, classes.AboutContainerDisabled].join(" ")
      }
    >
      <div className={classes.AboutContentContainer}>
        <p className={classes.ParaTitle}>A bit about me</p>
        <p>Hi, I’m Ping Song.</p>
        <p>
          I am a UX designer with frontend development and industrial design
          background.
        </p>
        <p>
          I believe with the UX superpower that gives me the ability to put
          myself in another person’s shoes, to create meaningful products.
        </p>
        <p>
          I strive to create products/ideas/components that are simple, target
          audience-oriented, and scalable.
        </p>
        <p>
          My knowledge of front-end development helps me create friendly user
          interfaces and delightful digital experiences that are easy to use and
          implement.
        </p>

        <div className={classes.AboutParagraphContainer}>
          <p className={classes.SubParaTitle}>Working Experience</p>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Jan 2019 - Present</p>
            <div className={classes.RightContent}>
              <p>Front end Developer/UX Designer (Monash University)</p>
              <p>
                Research, architect and develop applications that provide
                meaningful and relevant experiences and create engaging user
                interface to users
              </p>
              <p>
                Contribute to the re-imagination and improvement of multiple
                Monash applications
              </p>
              <p>
                practice a range of user experience design methodologies, user
                interface design and frontend technologies
              </p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Dec 2017 - Feb 2018</p>
            <div className={classes.RightContent}>
              <p>Summer Research Scholarship (Monash University)</p>
              <p>
                Designed and assembled autonomous drawing robot prototypes. Each
                robot was encased in a decorative shell that was designed and
                3D-printed by me.
              </p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Jan 2015 - Dec 2017</p>
            <div className={classes.RightContent}>
              <p>Branding Designer (314 Design Studio)</p>
              <p>
                Working on a range of tasks: Leading and developing branding
                design projects. Interacting (on a daily basis) with designers,
                developers and clients.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.AboutParagraphContainer}>
          <p className={classes.SubParaTitle}>My Education</p>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Feb 2017 - Dec 2018</p>
            <div className={classes.RightContent}>
              <p>Master of Information Technology</p>
              <p>- Post Graduate Industry Experience Winner 2018</p>
              <p>Monash University, Melbourne</p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Feb 2010 - Dec 2014</p>
            <div className={classes.RightContent}>
              <p>Bachelor of Industry Design</p>
              <p>University of New South Wales, Sydney</p>
            </div>
          </div>
        </div>
        <div className={classes.AboutParagraphContainer}>
          <p className={classes.SubParaTitle}>My Skills</p>

          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Language</p>
            <div className={classes.RightContent}>
              <p>JavaScript, REACT.js, Java, Python, D3.js, SCSS, SQL, Swift</p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Software</p>
            <div className={classes.RightContent}>
              <p>
                Figme, Sketch, Photoshop, Illustrator, After Effect, Principle,
                Solidworks, Auto CAD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
