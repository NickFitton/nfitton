<script>
  import {onMount} from "svelte";
  import Fab from "../components/Fab.svelte";
  import Modal from "../components/Modal.svelte";

  let groupedCategories = [];
  let selectedFramework = null;

  onMount(async () => {
    const retrievedTechnologies = await fetch('/technology.json')
      .then(r => r.json());

    const technologies = retrievedTechnologies;
    const categories = retrievedTechnologies.flatMap(tech => tech.category).filter((v, i, a) => a.indexOf(v) === i);
    groupedCategories = sortedCategories(categories, technologies);
  });

  function getAnchor() {
    return window.location.hash.substring(1);
  }

  function sortedCategories(categories, technologies) {
    let catMap = new Map();
    categories.forEach(category => {
      catMap.set(category, technologies.filter(tech => tech.category.includes(category)));
    })

    const sortableMap = [];
    catMap.forEach((value, key) => {
      sortableMap.push([key, value])
    });


    sortableMap.sort((a, b) => {
      if (a[1].length > b[1].length) {
        return -1;
      } else if (a[1].length < b[1].length) {
        return 1;
      } else {
        return a[0] > b[0];
      }
    });
    return sortableMap;
  }

  function titleCase(category) {
    if (category.split(/[., _/-]/).some(seg => seg.length > 3)) {
      return `${category.substring(0, 1).toUpperCase()}${category.substring(1).toLowerCase()}`;
    } else {
      return category.toUpperCase();
    }
  }

  function select(framework) {
    selectedFramework = framework;
  }

  function deselect() {
    selectedFramework = null;
  }

  function attach(framework) {
    console.log(framework);
  }

</script>

<style>
  .body {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 1em 2em;
    gap: 2em;
  }

  h1, h2 {
    text-align: center;
  }

  .quick_link-container {
    display: flex;
    gap: 1em;
  }

  .quick_link-container a {
    padding: 8px;
    background: #333;
    border-radius: 4px;
  }

  section, h1, .card-container {
    width: 100%;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    cursor: pointer;
  }

  .section-header:hover img {
    opacity: 1;
    width: 32px
  }

  .section-header img {
    height: 32px;
    opacity: 0;
    transition: opacity 0.25s, width 0.25s;
    width: 0;
  }

  .card-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1em;
  }

  .dialog-back {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }
</style>

<svelte:head>
  <title>Experience</title>
</svelte:head>
<div class="body">
  <h1>Known Technologies</h1>
  <h2>Quick Links</h2>
  <div class="quick_link-container">
    {#each groupedCategories as frameworks}
      <a href="experience#{titleCase(frameworks[0])}">{titleCase(frameworks[0])}</a>
    {/each}
  </div>
  {#each groupedCategories as frameworks}
    <section>
      <a class="section-header" href="experience#{titleCase(frameworks[0])}" name="{titleCase(frameworks[0])}">
        <h2>{titleCase(frameworks[0])}</h2>
        <img src="images/icons/link.svg" alt="link">
      </a>
      <div class="card-container">
        {#each frameworks[1] as framework}
          <div on:click={select(framework)}>
            <Fab details="{framework}"/>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</div>
{#if selectedFramework !== null}
  <div class="dialog-back" on:click={deselect}>
  </div>
  <Modal details="{selectedFramework}"/>
{/if}
