<script lang="ts">
	import { Form, type FormShape } from '$lib/Form';

	export let data;
	export let form: FormShape['output'];
</script>

<section class="pad-x flex flex-col gap-8 lg:flex-row">
	<article class="max-w-prose flex-1 space-y-4" id={data.content.hero.id}>
		<h2 class="h1">{data.content.hero.heading}</h2>
		<p>{data.content.hero.detail}</p>
	</article>
	<figure class=" max-w-prose flex-1">
		<Form content={{ input: data.content.hero.formInput, output: form }} />
	</figure>
</section>
