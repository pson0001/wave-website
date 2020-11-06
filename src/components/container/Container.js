import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import About from './about/About'
import Work from './work/Work'
import PingMe from './pingMe/PingMe'
import PeerView from './work/Projects/PeerView'
import Checkin from './work/Projects/Checkin'

import Studyplan from './work/Projects/Studyplan'
import Oz from './work/Projects/Oz'
import Blockchain from './work/Projects/Blockchain'
import Visualization from './work/Projects/Visualization'

const Container = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          exact
          path="/about"
          render={() => <About openMenu={props.openMenu}></About>}
        ></Route>
        <Route
          exact
          path="/work"
          render={() => <Work openMenu={props.openMenu}></Work>}
        ></Route>
        <Route
          exact
          path="/work/checkin"
          render={() => <Checkin openMenu={props.openMenu}></Checkin>}
        ></Route>
        <Route
          exact
          path="/work/studyplan"
          render={() => <Studyplan openMenu={props.openMenu}></Studyplan>}
        ></Route>
        <Route
          exact
          path="/work/peerview"
          render={() => <PeerView openMenu={props.openMenu}></PeerView>}
        ></Route>

        <Route
          exact
          path="/work/oz"
          render={() => <Oz openMenu={props.openMenu}></Oz>}
        ></Route>
        <Route
          exact
          path="/work/blockchain"
          render={() => <Blockchain openMenu={props.openMenu}></Blockchain>}
        ></Route>
        <Route
          exact
          path="/work/visualization"
          render={() => (
            <Visualization openMenu={props.openMenu}></Visualization>
          )}
        ></Route>
        <Route
          exact
          path="/pingme"
          render={() => <PingMe openMenu={props.openMenu}></PingMe>}
        ></Route>
      </Switch>
    </div>
  )
}

export default Container
