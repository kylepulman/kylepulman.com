<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Home from "$lib/icons/home.svelte";
</script>

<header class="text-center prose">
  <h1 class="h1">{$page.status}</h1>
  {#if $page.status === 404}
    <p>Page not found.</p>
  {:else}
    <p>{$page.error?.message}</p>
  {/if}
  <button on:click={() => goto("/")} class="btn btn-circle">
    <Home />
  </button>
</header>
