<script>
  import Card from "../components/Card.svelte";

  let frontendFrameworks = [
    {
      name: 'Angular',
      icon: 'images/icons/angular.svg',
      color: '#c3002e',
      info: ['I have spent most of my professional career working with angular. Starting with Angular 4 during my internship with Post-Quantum and upgrading our way through to Angular 9.', 'I have worked with Angular 10 personally, experimenting with it\'s new features and the Ivy compiler.'],
    },
    {
      name: 'Vue',
      icon: 'images/icons/vue.svg',
      color: '#3BB982',
      info: [],
    },
    {
      name: 'Svelte',
      icon: 'images/icons/svelte.svg',
      color: '#ff3e00',
      info: [],
    },
  ];

  let backendFrameworks = [
    {
      name: 'Spring',
      icon: 'images/icons/spring.svg',
      color: '#77bc1f',
      info: [],
    }
  ];

  let frontendTechnologies = [
    {
      name: 'CSS',
      icon: 'images/icons/css3.svg',
      color: '#016cb4',
    },
    {
      name: 'HTML',
      icon: 'images/icons/html5.svg',
      color: '#e44c26',
    },
    {
      name: 'JavaScript',
      icon: 'images/icons/javascript.svg',
      color: '#f8dc3d',
      inverted: true,
    },
    {
      name: 'TypeScript',
      icon: 'images/icons/typescript.svg',
      color: '#3179c6',
    },
    {
      name: 'Stylus',
      icon: 'images/icons/stylus.svg',
      color: '#ff6347',
    },
    {
      name: 'sass',
      icon: 'images/icons/sass.svg',
      color: '#CF649A',
      text: [],
    }
  ];
</script>

<style>
  .body {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 1em 2em;
  }

  .section-scroll {
    display: flex;
    flex-flow: row nowrap;
    padding: 6em 4em;
    overflow-x: scroll;
    max-width: calc(100vw -  168px);
  }

  .card-container {
    transition: 0.2s;
  }

  .card-container:hover {
    transform: translateY(-4em);
  }

  .card-container:hover ~ .card-container {
    transform: translateX(4em);
  }

  .section-scroll .card-container:not(:first-child) {
    margin-left: -300px;
  }
</style>

<svelte:head>
  <title>Experience</title>
</svelte:head>
<div class="body">
  <h1>Personal Experience</h1>
  <section>
    <h2>Frontend Frameworks</h2>
    <div class="section-scroll">
      {#each frontendFrameworks as framework}
        <div class="card-container">
          <Card details="{framework}"/>
        </div>
      {/each}
    </div>
  </section>
  <section>
    <h2>Backend Frameworks</h2>
    <div class="section-scroll">
      {#each backendFrameworks as framework}
        <div class="card-container">
          <Card details="{framework}"/>
        </div>
      {/each}
    </div>
  </section>
  <section>
    <h2>Frontend Technologies</h2>
    <div class="section-scroll">
      {#each frontendTechnologies as framework}
        <div class="card-container">
          <Card details="{framework}"/>
        </div>
      {/each}
    </div>
  </section>
</div>
