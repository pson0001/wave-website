import React, { useState, useEffect } from "react"
import classes from "./PingMe.module.scss"
import email from "../../../Assets/Image/email.png"
import github from "../../../Assets/Image/github.png"
import linkedin from "../../../Assets/Image/linkedin.png"

const PingMe = (props) => {
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
            ? [classes.PingMeContainer, classes.PingMeContainerDisabled].join(
                " "
              )
            : classes.PingMeContainer
          : [classes.PingMeContainer, classes.PingMeContainerDisabled].join(" ")
      }
    >
      <div className={classes.ContentContainer}>
        <div className={classes.LeftContent}>
          <p className={classes.Label}>CONTACT</p>
          <p className={classes.Name}>I’d love to hear from you.</p>
          <p className={classes.Label}>MY Location</p>
          <p className={classes.SubName}>Melbourne</p>
          <p className={classes.SubName}>Australia</p>
        </div>
        <div className={classes.RightContent}>
          <p>Thanks for stopping by!</p>
          <div>
            <span className={classes.Yellow}>
              <img src={email} alt="email"></img>
            </span>

            <p>pingsong0001@gmail.com</p>
          </div>

          <div>
            <span className={classes.Pink}>
              <img src={github} alt="email"></img>
            </span>
            <p>
              <a href="https://github.com/pson0001" target="_blank">
                github.com/pson0001
              </a>
            </p>
          </div>
          <div>
            <span className={classes.Blue}>
              <img src={linkedin} alt="linkedin"></img>
            </span>
            <p>
              <a
                href="https://www.linkedin.com/in/ping-song-pson0001/"
                target="_blank"
              >
                linkedin.com/in/ping-song-pson0001/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PingMe
