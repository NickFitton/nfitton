<script>
  export let segment;
</script>

<style>
  nav {
    font-weight: 400;
    padding: 0 1em;
    min-height: 54px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(4, 110px);
    background: #2d2d2d;
  }

  a {
    text-align: center;
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    border-bottom: 0 solid #2d2d2d;
    transition: border-bottom 0.25s ease-in-out;
  }

  a.selected {
    border-bottom: 2px solid #ffa200;
  }
</style>

<nav>
  <a class="{segment === undefined ? 'selected' : undefined}" href=".">Home</a>
  <a class="{segment === 'experience' ? 'selected' : undefined}" href="experience">Experience</a>
  <a class="{segment === 'about' ?   'selected' : undefined}" href="about">About Me</a>
  <a class="{segment === 'website' ? 'selected' : undefined}" href="website">About This Site</a>
</nav>
