import React, { useState, useEffect } from 'react'
import classes from './About.module.scss'

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
            ? [classes.AboutContainer, classes.AboutContainerDisabled].join(' ')
            : classes.AboutContainer
          : [classes.AboutContainer, classes.AboutContainerDisabled].join(' ')
      }
    >
      <div className={classes.AboutContentContainer}>
        <p className={classes.ParaTitle}>A bit about me</p>

        <p>
          I am a <span className={classes.Blue}>UX UI Designer</span> with a
          background in{' '}
          <span className={classes.Yellow}>Information Technology</span> and{' '}
          <span className={classes.Pink}>Industrial Design</span>.
        </p>

        <p>
          I collaborate with cross-functional teams throughout the user-centered
          design process to optimize product life-cycle and elevate user
          experience.
        </p>

        <p>
          I am passionate about discovering insights, creativity, solving
          problems, interaction and motion design.
        </p>

        <div className={classes.AboutParagraphContainer}>
          <p className={classes.SubParaTitle}>Working Experience</p>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Jan 2019 - Present</p>
            <div className={classes.RightContent}>
              <p>
                UX UI Designer/Front-end Developer, Monash University eSolutions
              </p>
              <p>
                Collaborating across various teams to produce end-to-end digital
                solutions for university students and staff. Initiating and
                maintaining effective relationships and efficiently
                communicating ideas and technical solutions with designers,
                developers, and stakeholders from business units and faculties.
              </p>
              <p>
                Delivered the design and front-end development of 3 COVID
                response website applications (Personal Study Plan, Monash@Home
                and Check in. Keep safe.).
              </p>
              <p>
                Working with a range of user experience design
                methodologies(User journey mapping, User flow Design,
                Information Architecture, Wireframe, etc), user interface
                design, and front-end technologies on daily basis.
              </p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Oct 2018 - Jan 2019</p>
            <div className={classes.RightContent}>
              <p>UX UI Designer/Front-end Developer, Ledgerium</p>
              <p>
                Designed and developed e-invoicing software (LUCA Plus) to
                provide an automated experience across accounting platforms.
              </p>
              <p>
                Produced designs and front-end UI components to improve design
                system, visual designs, and customise the experience for
                clients.
              </p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Dec 2017 - Feb 2018</p>
            <div className={classes.RightContent}>
              <p>Summer Research Scholarship, Monash University SensiLab</p>
              <p>
                Designed and assembled autonomous drawing robot prototypes. Each
                robot was encased in a decorative shell that was designed and
                3D-printed by me
              </p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Jan 2015 - Dec 2017</p>
            <div className={classes.RightContent}>
              <p>Branding Designer, 314 Design Studio</p>
              <p>
                Led brand launches, rebranding projects, visual identity
                systems, and digital marketing campaigns for a variety of
                clients, from startups to large cross-regional corporate groups.
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
              <p>- Summer Research Scholarship 2018</p>
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
            <p className={classes.leftContent}>Skills</p>
            <div className={classes.RightContent}>
              <p>
                User Research, User Experience (UX), User Interface (UI), User
                Testing, Front-end Development, Data Visulisation, 3D
                Modeling/Animation
              </p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Language</p>
            <div className={classes.RightContent}>
              <p>JavaScript, REACT.js, SCSS/Sass, Python, D3.js</p>
            </div>
          </div>
          <div className={classes.ContentContainer}>
            <p className={classes.leftContent}>Software</p>
            <div className={classes.RightContent}>
              <p>
                Figme, Sketch, Principle App, Adobe PS/AI/AE/XD, Github,
                Tableau, Solidworks, Auto CAD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
