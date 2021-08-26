import React from 'react';
import selfImage from "../../assets/portrait/cropped-wall.jpg";

function About() {
    return (
        <section>
            <h1 id="about">About</h1>
            <img src={selfImage} alt="portrait" />
            <p>I am a recent graduate of a full stack development bootcamp. After I graduated from college with a Bachelor of Science in Political Science and a Bachelor of Arts in History, I tried my hand in the real world working a normal day to day job, but found myself frankly a little bored and wondering how I was supposed to do this for the rest of my life; that is when I found coding. I had known a few people who completed their Computer Science degrees in college, and their careers just seemed so much more complicated, more fulfilling, more FUN. 

            I have a drive to never stop learning or challenging myself with new subjects. My past and current employers would describe me as dedicated, organized, and always willing to go above and beyond.

            My goal is to get started at a company where I can grow my knowledge base while utilizing the skills I have already learned.
            </p>
        </section>
    )
}

export default About;