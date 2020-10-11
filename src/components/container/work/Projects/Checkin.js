import React, { useState, useEffect } from "react"
import CheckinImg from "../../../../Assets/Image/checkin.jpg"
import UserFLow from "../../../../Assets/Image/userflow.jpg"
import DataFlow from "../../../../Assets/Image/dataflow.jpg"
import Phone from "../../../../Assets/Image/phone.jpg"
import Desktop from "../../../../Assets/Image/desktop.jpg"
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
          <img src={CheckinImg} alt="CheckinImg"></img>
        </div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>PROJECT NAME</p>
            <p className={classes.Name}>Check in. Keep Safe.</p>
            <p className={classes.Label}>MY ROLE</p>
            <p className={classes.SubName}>Creative Direction</p>
            <p className={classes.SubName}>UX / UI</p>
            <p className={classes.SubName}>Website Design</p>
            <p className={classes.SubName}>Front-end Development</p>
          </div>
          <div className={classes.RightContent}>
            <p>
              As COVID-19 began to accelerate its spread in Spring 2020, this
              app was born to support Monash University community to return to
              campus safely.
            </p>
            <p>
              To support contact tracing, the Digital team has developed a web
              app for Monash staff, students and visitors when they come to the
              campus.
            </p>
            <p>
              They will be encouraged to check into rooms and building by
              scanning QR codes which will be visible on entrances and exits of
              the rooms and buildings.
            </p>
            <p>
              By checking in and out, we will be able to quickly retrieve data
              in the event of an outbreak. By identifying the person who has
              been infected, we will also be able to identify the other people
              who have been in the same room/building and the same time of that
              infected person.
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
              The challenge was to design an effortless check-in flow for users
              who may check-in and check-out multiple times in one day.
            </li>
            <li>
              Figure out how to make the best use of contact tracing data to
              serve timely community needs.
            </li>
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
            <li>Process specifications for user goals and task flow.</li>
            <li>Creat wireframe for function design and data references.</li>
          </div>
        </div>
        <div className={[classes.WorkImgBg, classes.SupportSpace].join(" ")}>
          <img src={UserFLow} alt="UserFLow" style={{ width: "60vw" }}></img>
          <img src={DataFlow} alt="UserFLow" style={{ width: "60vw" }}></img>
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
              The final product meets the business goals and what users need
              into an enjoyable experience.
            </li>
          </div>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={[classes.WorkImgBg, classes.SupportSpace].join(" ")}>
          <img src={Phone} alt="Phone"></img>
          <img src={Desktop} alt="Desktop"></img>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.NavigateButton}>
          <Link to="/work" className={classes.Previous}>
            <span className={classes.Arrow}></span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.ArrowText}>Back to work</span>
          </Link>
          <Link to="/work/studyplan" className={classes.Next}>
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
