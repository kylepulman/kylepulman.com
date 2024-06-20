<script lang="ts">
	export let data;
</script>

<section class="pad-x">
	<article class="space-y-4">
		<h1 class="h1">{data.module.metadata.title}</h1>
		<p>{data.module.metadata.description}</p>
		<svelte:component this={data.module.default} />
	</article>
</section>
