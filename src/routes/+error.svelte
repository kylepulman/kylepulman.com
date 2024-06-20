<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="page">
	<h1 class="h1">{$page.status}</h1>
	<p>{$page.error?.message}</p>
</section>
