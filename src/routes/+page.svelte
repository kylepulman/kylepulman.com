<script lang="ts">
  import BellAlert from "$lib/icons/bell-alert.svelte";
  import Bars3BottomLeft from "$lib/icons/bars-3-bottom-left.svelte";
  import Megaphone from "$lib/icons/megaphone.svelte";

  export let data;
</script>

<header class="text-center prose">
  <h1>Kyle P. Ulman</h1>
  <p>I use TypeScript to build cool stuff for the web.</p>
</header>
<section>
  {#each data.feed as post}
    {@const createdAt = new Date(post.createdAt)}
    <article class="card bg-base-100 shadow-xl card-side my-6">
      <figure class="pl-8 flex-shrink-0">
        {#if post._source === "Pages"}
          <Bars3BottomLeft />
        {:else if post._source === "Bsky"}
          <Megaphone />
        {/if}
      </figure>
      <div class="card-body">
        <small class="text-neutral/50 dark:text-neutral-content/50"
          >{createdAt.toLocaleString()}</small
        >
        <h2 class="card-title">{post.title}</h2>
        {#if post.description}<p>{post.description}</p>{/if}
        {#if post._source === "Pages"}
          <a
            class="link mt-2 self-start text-neutral/50 hover:text-neutral/75 dark:text-neutral-content/50 dark:hover:text-neutral-content/75 text-sm"
            href={post.slug}>Read on...</a
          >
        {:else if post._source === "Bsky"}
          <a
            class="link mt-2 self-start text-neutral/50 hover:text-neutral/75 dark:text-neutral-content/50 dark:hover:text-neutral-content/75 text-sm"
            href={post.slug}>View on Bluesky</a
          >
        {:else}
          <a
            class="link mt-2 self-start text-neutral/50 hover:text-neutral/75 dark:text-neutral-content/50 dark:hover:text-neutral-content/75 text-sm"
            href={post.slug}>{post.slug}</a
          >
        {/if}
      </div>
    </article>
  {:else}
    <article class="card bg-base-100 shadow-xl card-side my-6">
      <figure class="pl-8 flex-shrink-0">
        <BellAlert />
      </figure>
      <div class="card-body">
        <h2 class="card-title">The feed is currently empty! Check back later for updates.</h2>
      </div>
    </article>
  {/each}
</section>
