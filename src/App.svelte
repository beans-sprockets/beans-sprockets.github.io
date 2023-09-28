<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import './app.css'
  import Table from './table.svelte'
  import MyForm from './form.svelte'
  let totalCompetitions = 41
  let totalOrganisations = 36

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
      Submit a competition <a href="https://airtable.com/appHETbcQa0XSzVGP/shrG20EaMH7a0RG7M" target="_blank" rel="noopener noreferrer" class=" bg-white  hover:bg-blue-500 mb-1 text-2xl btn rounded-full font-bold text-black"><span class="text-2xl">here</span></a>
      </div>
      <div class="flex justify-end">
      <span class="text-right py-2">
      <a  target="_blank" rel="noopener noreferrer" href="https://yoitsyoung.xyz/about.html">Contact</a>
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

<div class="grid grid-cols-5">
  <div class="col-span-4">
    <iframe class="airtable-embed" src="https://airtable.com/embed/appHETbcQa0XSzVGP/shraldA2MygP5UXDW?backgroundColor=redDusty&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  <div class="px flex justify-end text-right">
  <iframe class="airtable-embed" src="https://airtable.com/embed/appHETbcQa0XSzVGP/shrndGbnJYlsLpfUG?backgroundColor=redDusty" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>  </div>
</div>
  </div>



</main>

<style>
  @import url('https://gthomas-appfolio.github.io/bootstrap-coastline/bootstrap-coastline.css');
  /* .logo {
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
  } */
</style>
