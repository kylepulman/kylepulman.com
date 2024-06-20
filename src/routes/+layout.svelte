<script>
	import '../app.css';
</script>

<header>
	<h1>Kyle P. Ulman</h1>
</header>

<main class="flex-1">
	<slot />
</main>

<footer>
	<small>Copyright &copy; {new Date().getFullYear()} &bull; Kyle P. Ulman</small>
</footer>
