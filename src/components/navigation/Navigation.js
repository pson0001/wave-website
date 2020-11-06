import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './Navigation.module.scss'
const Navigation = (props) => {
  const [menu, setMenu] = useState(false)
  const [activeHome, setActiveHome] = useState(false)
  const [activeAbout, setActiveAbout] = useState(false)
  const [activeWork, setActiveWork] = useState(false)
  const [activePingMe, setActivePingMe] = useState(false)

  useEffect(() => {
    props.navigationHandler(menu)
  }, [menu])

  let location = useLocation()
  useEffect(() => {
    setMenu(false)
    props.pathnameHandler(location.pathname)
    switch (location.pathname) {
      case '/':
        setActiveHome(true)
        setActiveAbout(false)
        setActiveWork(false)
        setActivePingMe(false)
        break
      case '/about':
        setActiveHome(false)
        setActiveAbout(true)
        setActiveWork(false)
        setActivePingMe(false)
        break
      case '/about/':
        setActiveHome(false)
        setActiveAbout(true)
        setActiveWork(false)
        setActivePingMe(false)
        break
      case '/work':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/peerview':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/oz':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/blockchain':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/visualization':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break

      case '/work/peerview/':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/oz/':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/blockchain/':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/work/visualization/':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(true)
        setActivePingMe(false)
        break
      case '/pingme':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(false)
        setActivePingMe(true)
        break
      case '/pingme/':
        setActiveHome(false)
        setActiveAbout(false)
        setActiveWork(false)
        setActivePingMe(true)
        break
      default:
    }
  }, [location])

  return (
    <div className={classes.Navigation}>
      <div className={classes.NavigationContainer}>
        <div className={classes.Logo}>
          <Link to="/">P</Link>
        </div>
        <div className={classes.BurgerContainer}>
          <span>Menu</span>
          <div
            className={
              menu
                ? [classes.Burger, classes.BurgerActive].join(' ')
                : classes.Burger
            }
            onClick={() => {
              setMenu(!menu)
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={
          menu
            ? [classes.MenuContainer, classes.MenuContainerActive].join(' ')
            : classes.MenuContainer
        }
      >
        <Link to="/">
          <div className={classes.MenuItemContainer}>
            <div
              className={activeHome ? classes.MenuItemActive : classes.MenuItem}
            >
              Home
            </div>
            <div
              className={activeHome ? classes.ActiveHome : classes.Home}
            ></div>
          </div>
        </Link>
        <Link to="/about">
          <div className={classes.MenuItemContainer}>
            <div
              className={
                activeAbout ? classes.MenuItemActive : classes.MenuItem
              }
            >
              About
            </div>
            <div
              className={activeAbout ? classes.ActiveAbout : classes.About}
            ></div>
          </div>
        </Link>
        <Link to="/work">
          <div className={classes.MenuItemContainer}>
            <div
              className={activeWork ? classes.MenuItemActive : classes.MenuItem}
            >
              Work
            </div>
            <div
              className={activeWork ? classes.ActiveHome : classes.Home}
              style={{ backgroundColor: ' #e8989f' }}
            ></div>
          </div>
        </Link>
        <Link to="/pingme">
          <div className={classes.MenuItemContainer}>
            <div
              className={
                activePingMe ? classes.MenuItemActive : classes.MenuItem
              }
            >
              Ping Me
            </div>
            <div
              className={activePingMe ? classes.ActiveHome : classes.Home}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
