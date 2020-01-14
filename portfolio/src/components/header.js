import React from "react";
import Mern from "./images/6392882854363136.svg"
import self from "./images/IMG_4325.jpeg"
import "./App.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


function Name() {
    return (
         <div className = "container">
             <Router>
            <div className = "jumbotron">
                <h1> Nick Kidder</h1>
                     <nav className="navbar navbar-dark bg-dark">
                        <ul>
                            <li>
                                <Link to="/"><h3>About Me</h3></Link>
                            </li>
                            <li>
                                <Link to="./components/portfolio"><h3>Portfolio</h3></Link>
                            </li>
                            <li>
                                <Link to="./contacts"><h3>Contacts</h3></Link>
                            </li>
                        </ul>    
                    </nav>
                </div>
        </Router> 
            <div className="jumbotron">
                    <img src={self} alt="" id="self" width="170" height="200"/>
                <p>Hello my name is Nicholas Kidder, I am 25 years old and currently I'm working as a metal fabricator at a sheet metal shop in Fullerton, California but I'm looking to make a career change.
                I recieved a certificate from the Coding Bootcamp at University of California, Irvine in November of 2019 that says I have met the requirements to become a full stack MERN developer.
                My interest in development started in April 2019, I started working on some of my own research and by the following month I was hooked.
                I dove in head first and registered for the coding bootcamp and from there my interest and passion only grew.
                 Now that I have completed the Bootcamp, I am continuing my education and working towards recieving my degree in computer science. Continuing my education is one of the biggest aspects of tech and web developmene contt that attracted me to it so much. I truly enjoy learning new skills and I know that development is a field that is constantly growing and changing and it is a career that involves a lifetime of learning. In my free time I enjoy going to the gym, hiking and bike riding, I find that living an active style helps me stay focused and relieves stress especially when it comes to working on tedious tasks such as programming. Other activities I enjoy doing in my free time are spending time with family, friends and my girlfriend. I see my self as a people person and found that I get along with everyone and I always make an effort to be someone who is easy to get along and work with.</p>
            </div>
                <div className="container">
                    <img src={Mern} alt="" id="mern" width="300"/>
                </div>
                </div>
    )
}
export default Name;
