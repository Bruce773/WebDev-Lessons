import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// tslint:disable-next-line: no-var-requires
const SlackLogo = require('../../images/slack-logo-icon.png');
import { Button, StyledIframe, XsSpacer } from '../GlobalComponents';
import {
  CarouselHeader,
  CarouselParagraph,
  HeadersContainer,
  LinkStyles,
  MainHeader,
  MainSubHeader,
  StyledHeadingThree,
  WelcomeHeader,
  WelcomeHeaderSmSize,
} from './elements';
export const HomePage: React.SFC = () => (
  <>
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
    <StyledHeadingThree>
      Check out the Introduction Overview page to see a full list of our courses
    </StyledHeadingThree>
    <Link to="/courses/">
      <Button lg>Courses</Button>
    </Link>
    <XsSpacer />
    <StyledHeadingThree>
      Have a question? Contact&nbsp;us&nbsp;
      <Link to="/about/">
        <LinkStyles>here</LinkStyles>
      </Link>
    </StyledHeadingThree>
    <Container>
      <Box display={{ xs: 'none', md: 'inline' }} justifyContent="center">
        <Grid container>
          <div
            id="carousel"
            style={{
              height: '270px',
              margin: 'auto',
              overflow: 'hidden',
              width: '70%',
            }}
            className="carousel slide"
            data-pause="hover"
            data-ride="carousel"
          >
            <Box className="carousel-inner">
              <Box
                style={{
                  backgroundColor: 'grey',
                  borderRadius: '10px',
                  color: 'white',
                  height: '270px',
                  margin: 'auto',
                  padding: '20px',
                }}
                className="carousel-item active"
              >
                <Container>
                  <Grid container>
                    <Grid item xs={12}>
                      <Box display="inline-block">
                        <img
                          src={SlackLogo}
                          style={{
                            display: 'inline-block',
                            height: 'auto',
                            width: '3em',
                          }}
                        />
                      </Box>
                      <CarouselHeader>Join our Slack group!</CarouselHeader>
                      <br />
                      <CarouselParagraph>
                        Ask questions, learn from other WebDev Lessons coders,
                        and get notified when a new
                        lesson&nbsp;is&nbsp;available.
                      </CarouselParagraph>
                      <br />
                      <a
                        href="https://join.slack.com/t/webdev-lessons/shared_invite/enQtNTE1NjQyNDcxNDE1LWFmZGExNGNjNzQ0OWYzOTQ2MGRhYjBiMGQ0NWE5ODJkMTA0NTNlNjE1Yzc2NTcyODZmMjY1MTE3M2RhOWY1YTk"
                        target="_blank"
                      >
                        <Button
                          lg
                          hover="background-color: white !important"
                          style={{ width: 'auto' }}
                        >
                          Join now!
                        </Button>
                      </a>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
              <Box
                style={{
                  backgroundColor: 'grey',
                  borderRadius: '10px',
                  color: 'white',
                  height: '270px',
                  margin: 'auto',
                  padding: '20px',
                }}
                className="carousel-item"
              >
                <Container>
                  <Grid container>
                    <Grid item xs={9}>
                      <CarouselHeader sm>
                        Help us continue to deliver free content!
                      </CarouselHeader>
                      <CarouselParagraph sm>
                        We work hard to ensure that your coding experience with
                        us is of the utmost quality. Help us increase that
                        quality and keep the content free at the same time. 😉
                        Every&nbsp;little&nbsp;bit&nbsp;helps!
                        <br />
                        <Box component="p" color="rgb(157, 186, 231)">
                          -Bruce Johnson (WebDev Lessons Instructor)
                        </Box>
                      </CarouselParagraph>
                    </Grid>
                    <Grid xs={3}>
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
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>
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
        </Grid>
      </Box>
    </Container>
  </>
);
