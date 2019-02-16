var navbarHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand navbarLink" data-link='/' href="/">WebDev Lessons</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link navbarLink" data-link='/' href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbarLink" data-link='/contact' href="/contact">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link navbarLink" data-link='/about' href="/about">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Courses
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item navbarLink" data-link='/courses' href="/courses">All Courses</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item courseLink" data-link="/Javascript" data-class="Javascript" href=''>Javascript</a>
            <a class="dropdown-item courseLink" data-link="/HTML" data-class="HTML" href=''>HTML</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>`