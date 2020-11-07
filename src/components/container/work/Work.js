import React, { useState, useEffect } from 'react'
import classes from './Work.module.scss'

import { Link, useHistory } from 'react-router-dom'
import CheckinImg from '../../../Assets/Image/checkin.jpg'

import PeerviewImg from '../../../Assets/Image/PeerView.png'
import StudyplanImg from '../../../Assets/Image/Studyplan.png'

import OzWebsite from '../../../Assets/Image/OZ-home.png'
import BlockChain from '../../../Assets/Image/Blockchain.jpg'
import Visualization from '../../../Assets/Image/Visualization.jpg'

const Work = (props) => {
  const [load, setLoad] = useState(true)
  const [menu, setMenu] = useState(true)

  useEffect(() => {
    setTimeout(() => setMenu(!props.openMenu), 0)
  }, [props])

  useEffect(() => {
    setTimeout(() => setLoad(false), 600)
  }, [])
  const history = useHistory()

  const [openCheckIn, setOpenCheckIn] = useState(false)

  const CheckinOpenHandler = (e) => {
    e.preventDefault()
    const section = document.querySelector('#checkinRef')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpenCheckIn(true)
    window.setTimeout(() => {
      history.push({
        pathname: '/work/checkin',
        state: { detail: true },
      })
    }, 1000)
  }

  const [openStudyplan, setOpenStudyplan] = useState(false)

  const StudyplanOpenHandler = (e) => {
    e.preventDefault()
    const section = document.querySelector('#studyRef')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpenStudyplan(true)
    window.setTimeout(() => {
      history.push({
        pathname: '/work/studyplan',
        state: { detail: true },
      })
    }, 1000)
  }

  const [openPeerView, setOpenPeerView] = useState(false)

  const PeerViewOpenHandler = (e) => {
    e.preventDefault()
    const section = document.querySelector('#peerRef')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpenPeerView(true)
    window.setTimeout(() => {
      history.push({
        pathname: '/work/peerview',
        state: { detail: true },
      })
    }, 1000)
  }
  const [openOz, setOpenOz] = useState(false)

  const OzOpenHandler = (e) => {
    e.preventDefault()
    const section = document.querySelector('#ozRef')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpenOz(true)
    window.setTimeout(() => {
      history.push({
        pathname: '/work/oz',
        state: { detail: true },
      })
    }, 1000)
  }

  const [openBlockChain, setOpenBlockChain] = useState(false)

  const BlockOpenHandler = (e) => {
    e.preventDefault()
    const section = document.querySelector('#blockchainRef')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpenBlockChain(true)
    window.setTimeout(() => {
      history.push({
        pathname: '/work/blockchain',
        state: { detail: true },
      })
    }, 1000)
  }

  const [openVisualization, setOpenVisualization] = useState(false)

  const VisualizationHandler = (e) => {
    e.preventDefault()
    const section = document.querySelector('#visualizationRef')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpenVisualization(true)
    window.setTimeout(() => {
      history.push({
        pathname: '/work/visualization',
        state: { detail: true },
      })
    }, 1000)
  }

  return (
    <div
      className={
        menu
          ? load
            ? [classes.WorkContainer, classes.WorkContainerDisabled].join(' ')
            : classes.WorkContainer
          : [classes.WorkContainer, classes.WorkContainerDisabled].join(' ')
      }
    >
      <div className={classes.WorkContentContainer} id="workRef">
        <div className={classes.TitleContainer}>
          <p>i Learn</p>
          <p>i Think</p>
          <p>i Create</p>
          {/* <p className={classes.ContentLabel}>UX / UI / Develop</p> */}
        </div>

        <div className={classes.ProjectContainer} id="checkinRef">
          <div
            className={
              openCheckIn
                ? [classes.WorkImg, classes.WorkImgBg].join(' ')
                : classes.WorkImg
            }
          >
            <Link to="/work/checkin" onClick={(e) => CheckinOpenHandler(e)}>
              <img
                className={classes.CoverImg}
                src={CheckinImg}
                alt="CheckinImg"
              ></img>

              <span className={classes.CoverText}>
                A web application supports Monash University community to return
                to campus safely.
              </span>
            </Link>
          </div>
        </div>
        <div className={classes.ProjectContainer} id="peerRef">
          <div
            className={
              openPeerView
                ? [classes.WorkImg, classes.WorkImgBg].join(' ')
                : classes.WorkImg
            }
          >
            <Link to="/work/peerview" onClick={(e) => PeerViewOpenHandler(e)}>
              <img
                className={classes.CoverImg}
                src={PeerviewImg}
                alt="Peerview"
              ></img>

              <span className={classes.CoverText}>
                PeerView is Monash University's online application for academic
                staff to request reviews from their peers.
              </span>
            </Link>
          </div>
        </div>
        <div className={classes.ProjectContainer} id="studyRef">
          <div
            className={
              openStudyplan
                ? [classes.WorkImg, classes.WorkImgBg].join(' ')
                : classes.WorkImg
            }
          >
            <Link to="/work/studyplan" onClick={(e) => StudyplanOpenHandler(e)}>
              <img
                className={classes.CoverImg}
                src={StudyplanImg}
                alt="studyplan"
              ></img>

              <span className={classes.CoverText}>
                Personal Study Plan is a digital solution that helps students
                move their studies from on-campus to online due to COVID.
              </span>
            </Link>
          </div>
        </div>

        <div className={classes.ProjectContainer} id="ozRef">
          <div
            className={
              openOz
                ? [classes.WorkImg, classes.WorkImgBg].join(' ')
                : classes.WorkImg
            }
          >
            <Link to="/work/oz" onClick={(e) => OzOpenHandler(e)}>
              <img
                className={classes.CoverImg}
                src={OzWebsite}
                alt="OzWebsite"
              ></img>

              <span className={classes.CoverText}>
                360OZ is a web-based application which assists International
                students with a smooth transition to Australia. - Post Graduate
                Industry Experience Winner 2018
              </span>
            </Link>
          </div>
        </div>
        <div className={classes.ProjectContainer} id="blockchainRef">
          <div
            className={
              openBlockChain
                ? [classes.WorkImg, classes.WorkImgBg].join(' ')
                : classes.WorkImg
            }
          >
            <Link to="/work/blockchain" onClick={(e) => BlockOpenHandler(e)}>
              <img
                className={classes.CoverImg}
                src={BlockChain}
                alt="OzWebsite"
              ></img>

              <span className={classes.CoverText}>
                UI Design for a blockchain consulting & educating company
              </span>
            </Link>
          </div>
        </div>
        <div className={classes.ProjectContainer} id="visualizationRef">
          <div
            className={
              openVisualization
                ? [classes.WorkImg, classes.WorkImgBg].join(' ')
                : classes.WorkImg
            }
          >
            <Link
              to="/work/visualization"
              onClick={(e) => VisualizationHandler(e)}
            >
              <img
                className={classes.CoverImg}
                src={Visualization}
                alt="visualization"
              ></img>

              <span className={classes.CoverText}>
                D3.js visualisation of women's clothing online shopping behavior
              </span>
            </Link>
          </div>
        </div>
        <div className={classes.NavigateButton}>
          <div className={classes.Label}>
            Need a UX UI designer / Front end Developer?
          </div>
          <Link to="/pingme">
            <div className={classes.CtaButton}>
              <span className={classes.ArrowText}>
                I’d love to hear from you
              </span>
              <span className={classes.ArrowLine}></span>
              <span className={classes.Arrow}></span>
              {/* <Link to="/work/visualization" onClick={BacktoTop}>
            <span className={classes.ArrowText}>Ping Me</span>
          </Link> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Work
