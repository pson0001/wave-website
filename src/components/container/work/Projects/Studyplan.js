import React, { useState, useEffect } from "react"
import StudyplanImg from "../../../../Assets/Image/Studyplan.png"
import Task from "../../../../Assets/Image/studyplan-task.jpg"
import Wireframe from "../../../../Assets/Image/Wireframe.jpg"
import Hero from "../../../../Assets/Image/Studyplan-hero.jpg"
import StydyplanFull from "../../../../Assets/Image/study-full.jpg"
import classes from "./Projects.module.scss"
import { Link } from "react-router-dom"

const PeerView = (props) => {
  console.log(props)
  const [load, setLoad] = useState(true)
  const [menu, setMenu] = useState(true)

  useEffect(() => {
    if (props.openMenu === true) {
      setTimeout(() => setMenu(!props.openMenu), 0)
    } else {
      setTimeout(() => setMenu(!props.openMenu), 600)
    }
  }, [props, props.openMenu])

  useEffect(() => {
    setTimeout(() => setLoad(true), 600)
  }, [])
  return (
    <div
      className={
        load
          ? menu
            ? classes.WorkContainer
            : [classes.WorkContainer, classes.WorkContainerDisabled].join(" ")
          : [classes.WorkContainer, classes.WorkContainerDisabled].join(" ")
      }
    >
      <div className={classes.ProjectContainer}>
        <div className={classes.WorkImgBg}>
          <img src={StudyplanImg} alt="StudyplanImg"></img>
        </div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>PROJECT NAME</p>
            <p className={classes.Name}>Personal Study Plan</p>
            <p className={classes.Label}>MY ROLE</p>
            <p className={classes.SubName}>Creative Direction</p>
            <p className={classes.SubName}>UX / UI</p>
            <p className={classes.SubName}>Website Design</p>
          </div>
          <div className={classes.RightContent}>
            <p>
              Monash University is one of Australia's leading universities and
              ranks among the world's top 100.
            </p>
            <p>
              This product is designed and developed to help students move their
              studies from on-campus to online due to COVID.
            </p>
            <p>
              It was an urgent task. The requirements were to understand
              business needs and design user interface options in one day. By
              achieving the task, I have saved valuable time for data collection
              from faculty and development.
            </p>
            <p>
              The final application has been implemented and delivered to help
              thousands of students.
            </p>
          </div>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>I Learn</p>
            <p className={classes.SubName}>Discovery</p>
          </div>
          <div className={classes.RightContent}>
            <li>
              Meet with business owner and understand the requirement and data
              structure
            </li>
            <li>Analyse essential information for upcoming works</li>
          </div>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>I Think</p>
            <p className={classes.SubName}>Problem Solving</p>
            <p className={classes.SubName}>& Design Thinking</p>
          </div>
          <div className={classes.RightContent}>
            <li>Process specifications for user goals and task flow</li>
            <li>Creat wireframe for function design reference</li>
          </div>
        </div>
        <div className={[classes.WorkImgBg, classes.SupportSpace].join(" ")}>
          <img src={Task} alt="Taskflow" style={{ width: "60vw" }}></img>
          <img
            src={Wireframe}
            alt="Project-overview"
            style={{ width: "60vw" }}
          ></img>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>I Create</p>
            <p className={classes.SubName}>Design</p>
            <p className={classes.SubName}>& Implementation</p>
          </div>
          <div className={classes.RightContent}>
            <li>
              Design patterns to meet the business goals and user needs into an
              enjoyable experience
            </li>
          </div>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={[classes.WorkImgBg, classes.SupportSpace].join(" ")}>
          <img src={Hero} alt="Project-overview"></img>
          <img src={StydyplanFull} alt="Project-overview"></img>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.NavigateButton}>
          <Link to="/work" className={classes.Previous}>
            <span className={classes.Arrow}></span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.ArrowText}>Back to work</span>
          </Link>
          <Link to="/work/oz" className={classes.Next}>
            <span className={classes.ArrowText}>Next</span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.Arrow}></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PeerView
