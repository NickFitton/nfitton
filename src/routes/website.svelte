<style>
  .body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
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
  <h1>About This Website</h1>
  <p>I use my personal website to explore and learn different frontend technologies. Currently, the website is written
    with Svelte, I chose to learn Svelte as it has a proficiency for use in building faster static websites, perfect for
    my own.</p>
</div>
