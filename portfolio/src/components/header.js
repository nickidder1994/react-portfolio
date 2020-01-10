import React from "react";
import Mern from "./images/6392882854363136.svg"
import self from "./images/IMG_4325.jpeg"
import "./App.css"


function Name() {
    return (
        <div className = "container">
            <div className = "jumbotron">
                <h1> Nick Kidder</h1>
                    <nav className="navbar navbar-dark bg-dark">
                        <button type="button" class="btn btn-dark">About Me</button>
                        <button type="button" class="btn btn-dark">Portfolio</button>
                        <button type="button" class="btn btn-dark">Contact</button>    
                    </nav>
            </div>
            <div className="jumbotron">
                <img src={self} alt="" width="120" height="150"/>
                <p>Hello my name is Nicholas Kidder, I am 25 years old and currently I'm working as a metal fabricator at a sheet metal shop in Fullerton, California but I'm looking to make a career change. 
                    I recieved a certificate from the Coding Bootcamp at University of California, Irvine in November of 2019 that says I have met the requirements to become a full stack MERN developer. My interest in development started in April 2019, I started working on some of my own research and by the following month I was hooked.I dove in head first and registered for the coding bootcamp and from there my interest and passion only grew. 
                    Now that I have completed the Bootcamp, I am continuing my education and working towards recieving my degree in computer science. Continuing my education is one of the biggest aspects of tech and web developmene contt that attracted me to it so much. I truly enjoy learning new skills and I know that development is a field that is constantly growing and changing and it is a career that involves a lifetime of learning. 
                    In my free time I enjoy going to the gym, hiking and bike riding, I find that living an active style helps me stay focused and relieves stress especially when it comes to working on tedious tasks such as programming. Other activities I enjoy doing in my free time are spending time with family, friends and my girlfriend. 
                    I see my self as a people person and found that I get along with everyone and I always make an effort to be someone who is easy to get along and work with.</p>
                    <img src={Mern} alt="" width="450"/>
            </div>
        </div>
    )
}
export default Name;
