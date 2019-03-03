import React from 'react';

const About = () => (
  <div>
    <h1 class="main-header">About</h1>
    <div class="container about-page-bio-container">
      <div class="bio-container">
        <h3>Bruce Johnson</h3>
        <div class="row no-gutters about-bio-section">
          <div class="col-lg-3">
            <div class="headshot-container">
              <img
                src="../../images/headshot.jpeg"
                alt="Headshot Img"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-lg-9">
            <p class="about-p-bio">
              Bruce Johnson began coding when he was 13 years old practicing the
              Python language. He has since learned HTML, CSS, Arduino (a
              derivative of C++), and JavaScript. In 2015, Bruce founded a class
              called Pi Crafters that taught kids basic programming and
              electronic skills. In 5 months, kids learned how to construct a
              website, design circuits, and code robotic projects.
              <br />
              <br />
              In 2017, Bruce started as an intern at Yoga International. Since
              most of their business takes place online, many of Bruce\'s work
              hours were spent taking courses in Bootstrap, JavaScript, CSS,
              HTML, and jQuery. With these new skills, Bruce began his journey
              into web development. In late 2018, he started training through a
              9-month software engineering boot camp called Hack Reactor. The
              Hack Reactor program prepares coders for the real world of coding
              where problems are often difficult to understand and require
              planning, determination, and resourcefulness to solve. Bruce hopes
              to graduate from the Hack Reactor program in September 2019.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h1 class="no-padding-top">Contact Me</h1>
    <div class="container">
      <div class="row justify-content-center">
        <h2 class="green-accent">
          Send me a message with your question(s) and I will get back to you as
          soon as I can.
        </h2>
      </div>
      <div class="row justify-content-center row-12 row-sm-4">
        <h3 class="contact-page-header">
          Email: <span class="italic-md">bruce@webdevlessons.com</span>
        </h3>
      </div>
      <div class="row justify-content-center">
        <h3 class="contact-page-header">
          Join the WebDev Lessons Slack group:
        </h3>
        <button class="margin-left">
          <a
            href="https://join.slack.com/t/webdev-lessons/shared_invite/enQtNTE1NjQyNDcxNDE1LWFmZGExNGNjNzQ0OWYzOTQ2MGRhYjBiMGQ0NWE5ODJkMTA0NTNlNjE1Yzc2NTcyODZmMjY1MTE3M2RhOWY1YTk"
            target="_blank"
          >
            Join Slack Group
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default About;
