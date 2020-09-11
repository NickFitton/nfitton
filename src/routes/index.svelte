<style>
  h1, h2 {
	  color: white;
  }

  .social-links a img {
	filter: invert();
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 0;
  }

  span {
    padding: 4px;
  }

  .social-links {
	  display: flex;
	  flex-flow: row wrap;
	  justify-content: center;
  }

  .social-links a {
	  display: flex;
	  flex-flow: column nowrap;
	  justify-content: center;
  }

  .social-links a img {
	height: 24px;
  }

  h1,
  h2,
  p,
  span {
    text-align: center;
  }

  .link {
    cursor: pointer;
  }

  .element {
    padding: 16px;
    margin-bottom: 2px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    -webkit-transition: background-color 0.5s;
    -moz-transition: background-color 0.5s;
    -ms-transition: background-color 0.5s;
    -o-transition: background-color 0.5s;
    transition: background-color 0.5s;
    cursor: pointer;
  }

  span {
    font-weight: 450;
  }

  .profile {
    width: 25vh;
    border-radius: 50%;
    border-style: solid;
    border-width: 16px;
    margin: 8px;
  }

  .body {
	height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  .column {
    flex-flow: column nowrap;
  }

  .row {
    flex-flow: row nowrap;
  }

  .hidden {
    visibility: hidden;
    height: 0;
    width: 0;
  }

  .header {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  a {
    padding: 6px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1em;
    }

    .profile {
      border-width: 8px;
    }

    .sidenav-toggle {
      visibility: visible;
    }

    .header {
      visibility: hidden;
    }
  }
</style>

<svelte:head>
  <title>Nick Fitton</title>
</svelte:head>
<div class="body">
  <img class="profile" alt="Profile photo" src="images/profile.jpg" />
  <div>
    <h1>Nicholas Fitton</h1>
    <h2>Full-stack Developer</h2>
  </div>
  <div class="social-links">
    <a href="https://github.com/NickFitton">
      <img src="images/icons/github.svg" />
    </a>
    <a href="https://twitter.com/NFittonDev">
      <img src="images/icons/twitter.svg" />
    </a>
    <a href="https://www.linkedin.com/in/nicholas-fitton">
      <img src="images/icons/linkedin.svg" />
    </a>
    <a href="mailto:website@nfitton.com?subject=Mail from your site">
      <img src="images/icons/email.svg" />
    </a>
  </div>
</div>
