<script lang="ts">
	import { LightSwitch, initializeStores, Toast } from '@skeletonlabs/skeleton';
	import '../app.css';

	initializeStores();
</script>

<Toast />

<header class="my-4 flex items-center justify-between">
	<a href="/" class="anchor no-underline">KPU</a>
	<LightSwitch />
</header>
<slot />
<footer class="my-4 text-center">
	<small>&copy; {new Date().getFullYear()} Kyle P. Ulman</small>
</footer>
