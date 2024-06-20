<script>
	import { page } from '$app/stores';
	import { Head } from '$lib/Head';
	import '../app.css';

	export let data;
</script>

<Head
	content={{
		title: $page.data?.head?.title && $page.data.head.title !== data.head.title ? `${$page.data.head.title} • ${data.head.title}` : data.head.title,
		description: $page.data?.head?.description ?? data.head.description
	}}
/>

<header class="page">
	<h1><a href="/">{data.head.title}</a> • <span class="font-normal">{data.head.description}</span></h1>
</header>

<main class="flex-1">
	<slot />
</main>

<footer class="page">
	<small>Copyright © {new Date().getFullYear()} • {data.head.title}</small>
</footer>
