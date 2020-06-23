import React, { useState, useEffect } from "react"
import OzImg from "../../../../Assets/Image/OZ-home.png"
import Campus from "../../../../Assets/Image/OZ-campus.png"
import Map from "../../../../Assets/Image/OZ-map.png"
import Location from "../../../../Assets/Image/OZ-location.png"
import Days from "../../../../Assets/Image/OZ-day.png"

import classes from "./Projects.module.scss"
import { Link } from "react-router-dom"

const Oz = (props) => {
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
          <img src={OzImg} alt="Peerview"></img>
        </div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>PROJECT NAME</p>
            <p className={classes.Name}>360OZ</p>
            <p className={classes.Label}>MY ROLE</p>
            <p className={classes.SubName}>Creative Direction</p>
            <p className={classes.SubName}>UX / UI</p>
            <p className={classes.SubName}>Website Design</p>
            <p className={classes.SubName}>Front end Development</p>
            <p className={classes.SubName}>Geospatial Data Analysis</p>
          </div>
          <div className={classes.RightContent}>
            <p>
              Studies suggest that the peak period of mental ill-health is
              between the age of 12 and 25 years. According to them, university
              students are more vulnerable to high levels of distress than
              non-university population.
            </p>
            <p>
              Researchers have provided evidence that the mental health of
              students has deteriorated over recent decades. There is a higher
              level of emotional and stress-related problems. The research draws
              attention to the fact that 70% of university students rate their
              mental health as “poor”.
            </p>
          </div>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>Iteration 1</p>
            <p className={classes.SubName}>Arriving in Australia</p>
          </div>
          <div className={classes.RightContent}>
            <li>
              As a student, I want to know a suitable suburb to plan for my
              accommodation in an area where I will be comfortable living in
            </li>
            <li>
              As a student, I want to know the specific suburbs of places that
              match my cultural and social preferences so that I can stay
              socially connected
            </li>
            <li>
              As a student, I want to know the most convenient suburb to live
              based on my hobbies so that it is easier for me to transition into
              living in Australia
            </li>
          </div>
        </div>
        <div className={classes.WorkImgSmall}>
          <img src={Campus} alt="Project-overview"></img>
          <img src={Map} alt="Project-overview"></img>
        </div>

        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>Iteration 2</p>
            <p className={classes.SubName}>Settling down</p>
          </div>
          <div className={classes.RightContent}>
            <li>
              As a student, I want to set up the basic things e.g. finance,
              transportation, communication necessities for convenience in my
              day-to-day activities in Australia
            </li>
            <li>
              As a student, I want to buy all the essential things early on so
              that I will feel comfortable at my new home
            </li>
            <li>
              As a student, I want to be able to use and be familiar with public
              transportation in my area so that I am able to go to and from
              places easily
            </li>

            <li>
              As a student, I want to visit places in Melbourne that interests
              me so that I will feel motivated to get involved in Australian
              ways
            </li>
          </div>
        </div>
        <div className={classes.WorkImgSmall}>
          <img src={Location} alt="Project-overview"></img>
          <img src={Days} alt="Project-overview"></img>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>Outcome</p>
            <p className={classes.SubName}>Final Result</p>
          </div>
          <div className={classes.RightContent}>
            <li>
              For the final application, I achieved using React.js, Node.js,
              Restful API, Mapbox API, Google API to make a useful web
              application. I enjoy being challenged and engaging with projects,
              solving problems that require me to continuing to learn new and
              development techniques.
            </li>
          </div>
        </div>
        <div className={classes.SectionLine}></div>

        <div className={classes.NavigateButton}>
          <Link to="/work/peerview" className={classes.Previous}>
            <span className={classes.Arrow}></span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.ArrowText}>Previous</span>
          </Link>
          <Link to="/work/blockchain" className={classes.Next}>
            <span className={classes.ArrowText}>Next</span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.Arrow}></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Oz
