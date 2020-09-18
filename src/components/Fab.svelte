<script>
  // name, category, icon, color
  export let details;
</script>

<div class="fab" class:inverted="{!!details.inverted}" style="background-color: {details.color}">
  {#if !!details.icon}
    <img loading="lazy" src={details.icon} alt={details.name}>
  {/if}
  <h3>{details.name}</h3>
</div>

<style>
  /* 118px */
  /* 138px */
  .fab {
    border-radius: 8px;
    padding: 1em;
    width: 220px;
    height: 90px;
    cursor: pointer;
    gap: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fab:hover {
    width: 240px;
    height: 110px;
    margin: -10px;
    box-shadow: 0 0 4em black;
  }

  .fab:hover h3 {
    font-size: 33px;
  }

  .fab:hover img {
    height: 49px;
    min-width: 49px;
  }

  .fab, h3, img {
    transition: 0.25s;
  }

  .fab.inverted h3 {
    color: #222222;
  }

  img {
    height: 42px;
    min-width: 42px;
  }

  h3 {
    font-size: 28px;
    font-weight: 400;
    margin: 0;
  }
</style>
