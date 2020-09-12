<style>
  .body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    text-align: justify;
    height: 100%;
    padding: 1em 2em;
  }

  p, h1 {
    max-width: 50%;
  }

  p {
    text-align: justify;
  }

  @media only screen and (max-width: 600px) {
    p, h1 {
      max-width: 90%;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="body">
  <h1>About Me</h1>
  <p>A full-stack developer with experience in a variety of technologies, I am always determined to learn new techniques
    and technologies to enhance how I approach new problems and requirements. I am currently looking for a role that can
    continue to challenge my knowledge and help me build on my experience.</p>
  <p>Software development is also a hobby for me, I attend hackathons and meetups run by companies such as Intuit and
    OVO
    Energy and have taken part in international competitions such as EuroBot. In my spare time, other than running and
    socializing, I like to learn new languages and frameworks to help me diversify how I think of problems.</p>
</div>
