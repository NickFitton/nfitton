<script>
  export let details;
</script>

<div class="card">
  <div class="card-header" style="background-color: {details.color}">
    {#if !!details.icon}
      <img loading="lazy" src={details.icon} alt={details.name}>
      <h3 class="{!!details.inverted ? 'inverted' : ''}">{details.name}</h3>
    {/if}
  </div>
  <div class="card-content">
    {#if details.info}
      {#each details.info as paragraph}
        <p>{paragraph}</p>
      {/each}
    {/if}
  </div>
</div>

<style>
  .card {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 350px;
    width: 400px;
    min-width: 250px;

    border-radius: 16px;
    background: #dddddd;
    box-shadow: -1rem 0 3rem #1a1a1a;
  }

  .card .card-header {
    border-radius: 16px 16px 0 0;
    line-height: unset;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .card-header h3 {
    margin: 0;
    font-size: 28px;
    font-weight: 400;
  }

  .card-header h3.inverted {
    color: #222222;
  }

  .card-header img {
    height: 42px;
    padding: 1em;
  }

  .card-content {
    padding: 1em;
  }

  .card-content p {
    color: #222222;
  }
</style>
