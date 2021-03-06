var homePageHTML = `
<h1 class="main-header">WebDev Lessons</h1>
<h2 class="main-sub-header">(Lessons in Website Development)</h2>
<div class="container">
  <div class="row col-sm-20">
    <div class="headers-container">
      <div class="row justify-content-sm-center">
        <h2 class="welcome-h2 text-wrap col-sm-auto">
          Welcome to WebDev Lessons!
        </h2>
      </div>
      <div class="row justify-content-md-center">
        <h3 class="welcome-h3 text-wrap col-sm-auto">
          Learn JavaScript, HTML, CSS, and more!
        </h3>
      </div>
    </div>
  </div>
</div>
<div class="content">
  <div class="iframe-container-intro embed-responsive embed-responsive-4by3">
    <iframe
      src="https://player.vimeo.com/video/308895468"
      width="640"
      height="360"
      frameborder="0"
      webkitallowfullscreen=""
      mozallowfullscreen=""
      allowfullscreen=""
    ></iframe>
  </div>
</div>
<h3 class='home-page-h3'>Check out the Introduction Overview page to see a full list of our courses</h3>
<button data-link="/courses" class="navbarLink lg-btn">
Courses
</button>
<div class="container">
  <div class="row justify-content-center d-none d-lg-inline">
    <div
      id="carousel"
      class="carousel slide"
      data-pause="hover"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="c-headshot-container">
                  <img src="images/slack-logo-icon.png" />
                </div>
                <h3 class="c-header">Join our Slack group!</h3>
                <p class="c-paragraph">
                  Ask questions, learn from other WebDev Lessons coders, and get
                  notified when a new lesson&nbsp;is&nbsp;available.
                </p>
                <a
                  href="https://join.slack.com/t/webdev-lessons/shared_invite/enQtNTE1NjQyNDcxNDE1LWFmZGExNGNjNzQ0OWYzOTQ2MGRhYjBiMGQ0NWE5ODJkMTA0NTNlNjE1Yzc2NTcyODZmMjY1MTE3M2RhOWY1YTk"
                  target="_blank"
                  ><button>Join now!</button></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-9">
                <h3 class="c-header-smaller">
                  Help us continue to deliver free content!
                </h3>
                <p class="c-paragraph-smaller">
                  We work hard to ensure that your coding experience with us is
                  of the utmost quality. Help us increase that quality and keep
                  the content free at the same time. 😉
                  Every&nbsp;little&nbsp;bit&nbsp;helps!<br />
                  <span class="signature"
                    >-Bruce Johnson (WebDev Lessons Instructor)</span
                  >
                </p>
              </div>
              <div class="col-3 margin-top">
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_blank"
                >
                  <input type="hidden" name="cmd" value="_donations" />
                  <input type="hidden" name="business" value="8F5H897B2D9QG" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button"
                  />
                  <img
                    alt=""
                    border="0"
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
        class="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
`;