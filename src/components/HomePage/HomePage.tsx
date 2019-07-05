import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  MainHeader,
  MainSubHeader,
  HeadersContainer,
  WelcomeHeader,
  WelcomeHeaderSmSize,
} from './elements';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { StyledIframe } from '../utilityComponents/';

export const HomePage: React.SFC = () => (
  <div>
    <MainHeader as="h1">WebDev Lessons</MainHeader>
    <MainSubHeader as="h2">(Lessons in Website Development)</MainSubHeader>
    <Grid container>
      <Grid item sm={12}>
        <HeadersContainer>
          <Grid item>
            <Box justifyContent={{ sm: 'center' }}>
              <WelcomeHeader as="h2">Welcome to WebDev Lessons!</WelcomeHeader>
            </Box>
          </Grid>
          <Grid item>
            <Box justifyContent={{ md: 'center' }}>
              <WelcomeHeaderSmSize as="h3">
                Learn JavaScript, HTML, CSS, and more!
              </WelcomeHeaderSmSize>
            </Box>
          </Grid>
        </HeadersContainer>
      </Grid>
    </Grid>
    <StyledIframe src="https://www.youtube.com/embed/nLNzeoFjCSU" />
    <StyledIframe
      src="https://player.vimeo.com/video/308895468"
      paddingTop="10px"
    />
    <h3 className="home-page-h3">
      Check out the Introduction Overview page to see a full list of our courses
    </h3>
    <Link to="/courses/">
      <button className="navbarLink lg-btn">Courses</button>
    </Link>
    <div className="xs-spacer" />
    <h3 className="home-page-h3">
      Have a question? Contact&nbsp;us&nbsp;
      <div className="green-accent-link">
        <Link to="/about/">
          <div className="green-accent-link home-page-h3">here</div>
        </Link>
      </div>
    </h3>
    {/* <Link to="/about/">
      <button className="navbarLink lg-btn">About</button>
    </Link> */}
    <div className="container">
      <div className="row justify-content-center d-none d-lg-inline">
        <div
          id="carousel"
          className="carousel slide"
          data-pause="hover"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="c-headshot-container">
                      <img src="./../../images/slack-logo-icon.png" />
                    </div>
                    <h3 className="c-header">Join our Slack group!</h3>
                    <p className="c-paragraph">
                      Ask questions, learn from other WebDev Lessons coders, and
                      get notified when a new lesson&nbsp;is&nbsp;available.
                    </p>
                    <a
                      href="https://join.slack.com/t/webdev-lessons/shared_invite/enQtNTE1NjQyNDcxNDE1LWFmZGExNGNjNzQ0OWYzOTQ2MGRhYjBiMGQ0NWE5ODJkMTA0NTNlNjE1Yzc2NTcyODZmMjY1MTE3M2RhOWY1YTk"
                      target="_blank"
                    >
                      <button>Join now!</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-9">
                    <h3 className="c-header-smaller">
                      Help us continue to deliver free content!
                    </h3>
                    <p className="c-paragraph-smaller">
                      We work hard to ensure that your coding experience with us
                      is of the utmost quality. Help us increase that quality
                      and keep the content free at the same time. 😉
                      Every&nbsp;little&nbsp;bit&nbsp;helps!
                      <br />
                      <span className="signature">
                        -Bruce Johnson (WebDev Lessons Instructor)
                      </span>
                    </p>
                  </div>
                  <div className="col-3 margin-top">
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_donations" />
                      <input
                        type="hidden"
                        name="business"
                        value="8F5H897B2D9QG"
                      />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                        style={{ border: 0 }}
                        name="submit"
                        title="PayPal - The safer, easier way to pay online!"
                        alt="Donate with PayPal button"
                      />
                      <img
                        alt=""
                        style={{ border: 0 }}
                        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                        width="1"
                        height="1"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);
