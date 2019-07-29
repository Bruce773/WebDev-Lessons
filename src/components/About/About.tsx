import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Button, SmSpacer } from '../GlobalComponents';
import {
  AboutBioContainer,
  BioContainer,
  GreenAccent,
  HeadshotContainer,
  InnerBioContainer,
  SmallH2,
} from './elements';

export const About: React.SFC = () => (
  <>
    <SmSpacer />
    <AboutBioContainer>
      <Container>
        <div className="bio-container">
          <InnerBioContainer>
            <Grid container>
              <Grid item lg={3}>
                <HeadshotContainer>
                  <img
                    src="https://webdevlessons.s3.amazonaws.com/headshot.jpeg"
                    alt="Headshot Img"
                  />
                </HeadshotContainer>
              </Grid>
              <Grid item lg={9}>
                <BioContainer>
                  <GreenAccent>Bruce Johnson</GreenAccent>
                  began coding when he was 13 years old practicing the Python
                  language. He has since learned HTML, CSS, Arduino (a
                  derivative of C++), and JavaScript. In 2015, Bruce founded a
                  class called Pi Crafters that taught kids basic programming
                  and electronic skills. In 5 months, kids learned how to
                  construct a website, design circuits, and code robotic
                  projects.
                  <br />
                  <br />
                  In 2017, Bruce started as an intern at Yoga International.
                  Since most of their business takes place online, many of
                  Bruce's work hours were spent taking courses in Bootstrap,
                  JavaScript, CSS, HTML, and jQuery. With these new skills,
                  Bruce began his journey into web development. In late 2018, he
                  started training through a 9-month software engineering boot
                  camp called Hack Reactor. The Hack Reactor program prepares
                  coders for the real world of coding where problems are often
                  difficult to understand and require planning, determination,
                  and resourcefulness to solve. Bruce hopes to graduate from the
                  Hack Reactor program in September 2019.
                </BioContainer>
              </Grid>
            </Grid>
          </InnerBioContainer>
        </div>
      </Container>
    </AboutBioContainer>
    <hr />
    <h1 style={{ paddingTop: '3px' }}>Contact Me</h1>
    <Container>
      <Box justifyContent="center" margin="auto">
        <Grid container>
          <GreenAccent>
            <SmallH2>
              Send me a message with your question(s) and I will get back to you
              as soon as I can.
            </SmallH2>
          </GreenAccent>
        </Grid>
      </Box>
      <div className="row justify-content-center row-12 row-sm-4">
        <h3 className="contact-page-header">
          Email: <span className="italic-md">bruce@webdevlessons.com</span>
        </h3>
      </div>
      <div className="row justify-content-center">
        <h3 className="contact-page-header">
          Join the WebDev Lessons Slack group:
        </h3>
        <a
          href="https://join.slack.com/t/webdev-lessons/shared_invite/enQtNTE1NjQyNDcxNDE1LWFmZGExNGNjNzQ0OWYzOTQ2MGRhYjBiMGQ0NWE5ODJkMTA0NTNlNjE1Yzc2NTcyODZmMjY1MTE3M2RhOWY1YTk"
          target="_blank"
        >
          <Button lg style={{ marginLeft: '8px', width: 'auto' }}>
            Join Slack Group
          </Button>
        </a>
      </div>
    </Container>
  </>
);
