<script lang="ts">
	import { Form, type FormShape } from '$lib/Form';

	export let data;
	export let form: FormShape['output'];
</script>

<section class="page">
	<article class="max-w-prose space-y-4" id={data.content.hero.id}>
		<h2 class="h1">{data.content.hero.heading}</h2>
		<p>{data.content.hero.detail}</p>
		<Form content={{ input: data.content.hero.formInput, output: form }} />
	</article>
</section>
