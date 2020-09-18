<script>
  // name, category, icon, color, experience
  export let details;
</script>

<div class="modal" class:inverted="{!!details.inverted}">
  <div class="modal-header" style="background-color: {details.color}">
    {#if !!details.icon}
      <img src={details.icon} alt={details.name}>
      <h3 class="{!!details.inverted ? 'inverted' : ''}">{details.name}</h3>
    {/if}
  </div>
  <div class="modal-content">
    {#if !details.experience}
      <p>TBD</p>
    {:else}
      {#each details.experience as paragraph }
        <p>{paragraph}</p>
      {/each}
    {/if}
  </div>
</div>

<style>
  .modal {
    z-index: 3;
    display: flex;
    position: fixed;
    top: 15%;
    left: 25%;
    margin: auto;
    width: 50%;
    flex-direction: column;

    border-radius: 16px;
    background: #dddddd;
    box-shadow: -1rem 0 3rem #1a1a1a;
  }

  .modal .modal-header {
    border-radius: 16px 16px 0 0;
    line-height: unset;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .modal-header h3 {
    margin: 0;
    font-size: 28px;
    font-weight: 400;
  }

  .modal-header h3 {
    color: #dddddd;
  }

  .modal.inverted .modal-header h3 {
    color: #222222;
  }

  .modal-header img {
    height: 42px;
    padding: 1em;
  }

  .modal-content {
    padding: 1em;
    overflow-y: auto;
  }

  .modal-content p {
    color: #222222;
  }
</style>
