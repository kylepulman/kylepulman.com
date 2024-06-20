<script lang="ts">
	import type { HeadShape } from '.';

	export let content: HeadShape;
</script>

<svelte:head>
	<title>{content.title}</title>
	<meta name="description" content={content.description} />
</svelte:head>
