<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="mx-auto my-12 max-w-prose p-4">
	{@render children()}
</main>
