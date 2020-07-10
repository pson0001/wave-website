import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Redirect } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import Container from "./components/container/Container"
import classes from "./App.module.scss"

function App() {
  const [load, setLoad] = useState(false)
  const [finishLoad, setFinishLoad] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [activeWave, setActiveWave] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoad(true), 800)
    setTimeout(() => setFinishLoad(true), 1400)
  }, [])

  const navigationHandler = (ifOpen) => {
    setOpenMenu(ifOpen)
  }

  const pathnameHandler = (pathname) => {
    switch (pathname) {
      case "/":
        setTimeout(() => setActiveWave(true), 600)
        break
      case "/about":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/about/":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/studyplan":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/studyplan/":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/peerview":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/peerview/":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/oz":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/oz/":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/blockchain":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/blockchain/":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/visualization":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/work/visualization/":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/pingme":
        setTimeout(() => setActiveWave(false), 0)
        break
      case "/pingme/":
        setTimeout(() => setActiveWave(false), 0)
        break
      default:
        return <Redirect to="/"></Redirect>
    }
  }

  return (
    <Router>
      {finishLoad ? (
        <Navigation
          navigationHandler={navigationHandler}
          pathnameHandler={pathnameHandler}
        ></Navigation>
      ) : null}
      {finishLoad ? <Container openMenu={openMenu}></Container> : null}
      <div
        className={
          activeWave
            ? classes.WaveContainer
            : [classes.WaveContainerDisable, classes.WaveContainer].join(" ")
        }
      >
        <div
          className={
            openMenu
              ? [
                  classes.WaveOneInitial,
                  classes.WaveOneRectangle,
                  classes.WaveOne,
                  classes.WaveMenu,
                ].join(" ")
              : finishLoad
              ? [
                  classes.WaveOneInitial,
                  classes.WaveOneRectangle,
                  classes.WaveOne,
                ].join(" ")
              : load
              ? [classes.WaveOneInitial, classes.WaveOneRectangle].join(" ")
              : classes.WaveOneInitial
          }
        ></div>
        {finishLoad ? <div className={classes.WaveTwo}></div> : null}
        {finishLoad ? <div className={classes.WaveThree}></div> : null}
      </div>

      <div
        className={
          activeWave
            ? finishLoad
              ? [classes.IntroContainer, classes.IntroContainerLoaded].join(" ")
              : classes.IntroContainer
            : [
                classes.IntroContainer,
                classes.IntroContainerLoaded,
                classes.IntroDisable,
              ].join(" ")
        }
      >
        <p className={classes.Name}>Ping Song</p>
        <p className={classes.Paragraph}>
          I am a designer, who draws and codes.
        </p>
      </div>
    </Router>
  )
}

export default App
