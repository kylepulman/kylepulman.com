<script lang="ts">
	export let data;
</script>

<section class="page">
	<article class="max-w-prose space-y-4" id={data.content.hero.id}>
		<h2 class="h1">{data.content.hero.heading}</h2>
		<p>{data.content.hero.detail}</p>
	</article>
</section>
