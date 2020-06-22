import React, { useState, useEffect } from "react"
import BlockchainImg from "../../../../Assets/Image/Blockchain.jpg"
import Homepage from "../../../../Assets/Image/Homepage.png"
import Education from "../../../../Assets/Image/Education.png"
import Consulting from "../../../../Assets/Image/Consulting.png"

import classes from "./Projects.module.scss"
import { Link } from "react-router-dom"

const Blockchain = (props) => {
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
          <img src={BlockchainImg} alt="Blockchain"></img>
        </div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>PROJECT NAME</p>
            <p className={classes.Name}>Merklize</p>
            <p className={classes.Label}>MY ROLE</p>
            <p className={classes.SubName}>Creative Direction</p>
            <p className={classes.SubName}>UX / UI</p>
            <p className={classes.SubName}>Website Design</p>
          </div>
          <div className={classes.RightContent}>
            <p>
              Merklise is one of the products of Block Ledger. Block Ledger was
              established in March 2018 when two accountants were first
              introduced to bitcoin. They quickly discovered that this
              technology removed one of the oldest problems in accounting, the
              source of trust.
            </p>
            <p>
              Merklise is a business technology consulting product with a strong
              foundation in the latest FinTech technology including AI,
              Blockchain, Cloud and BigData.
            </p>
          </div>
        </div>
        <div className={classes.SectionLine}></div>

        <div className={classes.WorkImgSmall}>
          <img src={Homepage} alt="Project-overview"></img>
          <img src={Consulting} alt="Project-overview"></img>
          <img src={Education} alt="Project-overview"></img>
        </div>
        <div className={classes.SectionLine}></div>

        <div className={classes.NavigateButton}>
          <Link to="/work/oz" className={classes.Previous}>
            <span className={classes.Arrow}></span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.ArrowText}>Previous</span>
          </Link>
          <Link to="/work/visualization" className={classes.Next}>
            <span className={classes.ArrowText}>Next</span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.Arrow}></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blockchain
