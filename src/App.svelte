<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import './app.css'
  import Table from './table.svelte'
  let totalCompetitions = 0
  let totalOrganisations = 0
</script>

<main>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div> -->
  <header class="bg-cyan-500 text-2xl mb-12 md:text-center p-7 text-white">
    <div class="grid grid-cols-3 px-20">
      <div>

      </div>
      <div>
      Submit a competition <button class="rounded-none bg-white text-black">here</button>
      </div>
      <div class="flex justify-end">
      <span class="text-right">
      Contact
      </span>
      </div>
    </div>

  </header>
  <div class="px-20">
  <h1 class = "font-display-italic font-extrabold text-5xl md:text-6xl  leading-none mb-12">
    Competitions.fyi

  </h1>
  <h4>The largest database of university competitions</h4>
  <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
    Tracking
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">{totalCompetitions}</span>
    </span>
    compeititions across
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">{totalOrganisations}</span>
    </span>
  organizations
</blockquote>


  <div >
    <iframe class="airtable-embed" src="https://airtable.com/embed/appHETbcQa0XSzVGP/shraldA2MygP5UXDW?backgroundColor=redDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  </div>


</main>

<style>
  @import url('https://gthomas-appfolio.github.io/bootstrap-coastline/bootstrap-coastline.css');
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
