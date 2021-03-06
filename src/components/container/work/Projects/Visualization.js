import React, { useState, useEffect } from 'react'
import VisualizationImg from '../../../../Assets/Image/Visualization.jpg'
import VisualizationFinal from '../../../../Assets/Image/Visualization-detail.jpg'
import BarChart from '../../../../Assets/Image/bar.jpg'
import LineChart from '../../../../Assets/Image/global.jpg'

import classes from './Projects.module.scss'
import { Link } from 'react-router-dom'

const Visualization = (props) => {
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
            : [classes.WorkContainer, classes.WorkContainerDisabled].join(' ')
          : [classes.WorkContainer, classes.WorkContainerDisabled].join(' ')
      }
    >
      <div className={classes.ProjectContainer}>
        <div className={classes.WorkImgBg}>
          <img src={VisualizationImg} alt="VisualizationImg"></img>
        </div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>PROJECT NAME</p>
            <p className={classes.Name}>E-Commerce Data Visualization</p>
            <p className={classes.Label}>MY ROLE</p>
            <p className={classes.SubName}>Data wrangling</p>
            <p className={classes.SubName}>Data Visualization</p>
          </div>
          <div className={classes.RightContent}>
            <p>
              This visualisation Project is exploring women's clothing online
              shopping behavior from a Women's Clothing E-Commerce which
              revolving around the reviews written by customers.
            </p>
            <p>
              After the exploration of the dataset, the most interesting is the
              behavior of what women purchase, and what they are talking about
              are quick different. Also, the main purchasing age group is 30-40
              and 40-50 instead of the younger generation.
            </p>
          </div>
        </div>
        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>Background</p>
            <p className={classes.SubName}>
              Global Trend of Ecommerce Fashion Industry in 2018
            </p>
          </div>
          <div className={classes.RightContent}>
            <li>
              I started exploring the Global Trend of Ecommerce Fashion
              Industry, as known as digital innovation, and changes in consumer
              spending habits that have changed the fashion industry. The
              dataset was categorised into different age groups from 0-20 to
              80-90.
            </li>
            <li>
              This graph indicates the overall purchasing count of the dataset.
              We can see the highest bar cross all age group is the product
              "TOP".
            </li>
          </div>
        </div>
        <div className={classes.WorkImgSmall}>
          <img src={LineChart} alt="Project-overview"></img>
          <img src={BarChart} alt="Project-overview"></img>
        </div>

        <div className={classes.SectionLine}></div>
        <div className={classes.ContentContainer}>
          <div className={classes.LeftContent}>
            <p className={classes.Label}>Outcome</p>
            <p className={classes.SubName}>Overview graph</p>
          </div>
          <div className={classes.RightContent}>
            <li>
              0-20 ：Age Group 0-20 has a very small review amount. The dress is
              the biggest proportion
            </li>
            <li>
              20-30 : The amount of review starts to grow. As expected, Dress
              still took first place
            </li>
            <li>30-40 : The amount of review reached the peak</li>
            <li>40-50 : The amount of review are decreasing</li>
            <li>50-60 : The keyword Love has taken first place</li>
            <li>60-70 : Size becomes more important</li>
          </div>
        </div>
        <div className={classes.WorkImgSmall}>
          <img src={VisualizationFinal} alt="Project-overview"></img>
        </div>

        <div className={classes.SectionLine}></div>

        <div className={classes.NavigateButton}>
          <Link to="/work/blockchain" className={classes.Previous}>
            <span className={classes.Arrow}></span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.ArrowText}>Previous</span>
          </Link>
          <Link to="/work" className={classes.Next}>
            <span className={classes.ArrowText}>Back to work</span>
            <span className={classes.ArrowLine}></span>
            <span className={classes.Arrow}></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Visualization
