<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error • Kyle P. Ulman</title>
</svelte:head>

<section class="page">
	<h1 class="h1">{$page.status}</h1>
	<p>{$page.error?.message}</p>
</section>
