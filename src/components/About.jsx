import React from 'react';

const About = () => (
  <div>
    <h1 className="main-header">About</h1>
    <div className="container about-page-bio-container">
      <div className="bio-container">
        <h3>Bruce Johnson</h3>
        <div className="row no-gutters about-bio-section">
          <div className="col-lg-3">
            <div className="headshot-container">
              <img
                src="../../images/headshot.jpeg"
                alt="Headshot Img"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-9">
            <p className="about-p-bio">
              Bruce Johnson began coding when he was 13 years old practicing the
              Python language. He has since learned HTML, CSS, Arduino (a
              derivative of C++), and JavaScript. In 2015, Bruce founded a class
              called Pi Crafters that taught kids basic programming and
              electronic skills. In 5 months, kids learned how to construct a
              website, design circuits, and code robotic projects.
              <br />
              <br />
              In 2017, Bruce started as an intern at Yoga International. Since
              most of their business takes place online, many of Bruce's work
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
    <h1 className="no-padding-top">Contact Me</h1>
    <div className="container">
      <div className="row justify-content-center">
        <h2 className="green-accent">
          Send me a message with your question(s) and I will get back to you as
          soon as I can.
        </h2>
      </div>
      <div className="row justify-content-center row-12 row-sm-4">
        <h3 className="contact-page-header">
          Email: <span className="italic-md">bruce@webdevlessons.com</span>
        </h3>
      </div>
      <div className="row justify-content-center">
        <h3 className="contact-page-header">
          Join the WebDev Lessons Slack group:
        </h3>
        <button className="margin-left">
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
