import React from 'react'
import "./Ieltscard.css"
import {Link} from "react-router-dom"

function Ieltscard(props) {
  return (
    <div className="container col-lg-3 col-md-4">
       <section class="section-box">
        <div class="list-box">
          <div class="box one">
            <div class="top">
              <img class="logo" src={props.img} alt="logo" />
            </div>
            <div class="bottom content">
              <h2 class="big-title">
                <Link to={props.url}>{props.title}</Link>
              </h2>
              <ul class="details">
                <li class="detail">
                  <i class="fas fa-download detail-icon"></i>
                  <span class="detail-name">27 Free tutorials</span>
                </li>
                <li class="detail">
                  <i class="fas fa-file-alt detail-icon"></i>
                  <span class="detail-name">Videos, Images, Files, PDF</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
    </section>
    </div>
     
  )
}

export default Ieltscard