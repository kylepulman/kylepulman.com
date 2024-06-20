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

<header>
	<h1><a href="/">{data.head.title}</a></h1>
</header>

<main class="flex-1">
	<slot />
</main>

<footer>
	<small>Copyright &copy; {new Date().getFullYear()} &bull; {data.head.title}</small>
</footer>
