import React, { useState, useEffect } from "react"
import PeerviewImg from "../../../../Assets/Image/PeerView.png"
import Overview from "../../../../Assets/Image/Project-overview.jpg"
import Elements from "../../../../Assets/Image/Project-elements.jpg"
import Instructions from "../../../../Assets/Image/Instruction.jpg"
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
          <img src={PeerviewImg} alt="Peerview"></img>
        </div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>PROJECT NAME</p>
            <p className={classes.Name}>PeerView</p>
            <p className={classes.Label}>MY ROLE</p>
            <p className={classes.SubName}>Creative Direction</p>
            <p className={classes.SubName}>UX / UI</p>
            <p className={classes.SubName}>Website Design</p>
          </div>
          <div className={classes.RightContent}>
            <p>
              Monash University is one of Australia's leading universities and
              ranks among the world's top 100. We help change lives through
              research and education.
            </p>
            <p>
              This product designed and developed for academic staff to request
              reviews from their peers. It digitalise the experience and
              process.
            </p>
            <p>
              I am happy to say that my idea and design direction was approved
              for implementation. It was very exciting to see how the product
              evolved and improved with each update during a short time. The
              final application has been implemented and delivered. The final
              application has been implemented and delivered.
            </p>
            <p>The final application has been implemented and delivered.</p>
            <p>
              View at{" "}
              <a href="https://peerview.monash/" target="_blank">
                https://peerview.monash/
              </a>
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
              Understand the target audience, their needs, habits, and
              motivations
            </li>
            <li>Research market trends</li>
            <li>Analysis of essential information for upcoming works</li>
            <li>Understand business objectives</li>
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
            <li>
              Analysis and document relevant data for the business model and
              user's needs
            </li>
            <li>Process specifications for user personas and journey map</li>
            <li>Analysis of essential information for upcoming works</li>
            <li>Brainstorming the first set of functional designs</li>
            <li>
              Creat draft information architecture for function design reference
            </li>
          </div>
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
            <li>
              Wrap collected information and data up into a visual concept
            </li>
            <li>
              Gathering feedback from users with various user testing methods
            </li>
            <li>
              Keep iterate until the final proposal matches business requirement
              and user's needs
            </li>
          </div>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={[classes.WorkImgBg, classes.SupportSpace].join(" ")}>
          <img src={Overview} alt="Project-overview"></img>
          <img src={Elements} alt="Project-overview"></img>
          <img src={Instructions} alt="Project-overview"></img>
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
