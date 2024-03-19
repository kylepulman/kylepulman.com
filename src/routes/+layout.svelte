<script lang="ts">
	import '../app.pcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<header class="my-4 flex items-center justify-between">
	<a href="/" class="anchor no-underline">KPU</a>
	<LightSwitch />
</header>
<slot />
<footer class="my-4 text-center">
	<small>&copy; {new Date().getFullYear()} Kyle P. Ulman</small>
</footer>
