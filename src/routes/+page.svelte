<script lang="ts">
	import { Form, type FormShape } from '$lib/Form'

	export let data
	export let form: FormShape['output']

	let isGifStarted: boolean = false
	$: hint = !isGifStarted ? 'Mouse over or tap the image for a GIF' : 'Mouse out or tap outside the image to stop the GIF'

	const startGif = (e: Event) => {
		;(e.target as HTMLImageElement).src = '/images/me.gif'
		isGifStarted = true
	}

	const stopGif = (e: Event) => {
		;(e.target as HTMLImageElement).src = '/images/me-still.gif'
		isGifStarted = false
	}

	const focusForm = async () => {
		const input = document.querySelector('#name') as HTMLInputElement

		input.focus()

		for (let i = 0; i < 6; i++) {
			input.classList.toggle('!variant-ghost-secondary')
			await new Promise<void>((resolve) => setTimeout(() => resolve(), 500))
		}
	}
</script>

<section class="pad-x gap mar-y flex flex-col lg:flex-row">
	<article class="max-w-prose flex-1 space-y-4" id={data.content.hero.id}>
		<h2 class="h1">{data.content.hero.heading}</h2>
		{#each data.content.hero.detail as detail}
			<p>{detail}</p>
		{/each}
	</article>
	<figure class=" max-w-prose flex-1">
		<Form content={{ input: data.content.hero.formInput, output: form }} />
	</figure>
</section>
<section class="pad-x gap mar-y flex flex-col-reverse lg:flex-row">
	<figure class="max-w-prose space-y-2">
		<img class="mx-auto rounded-full" id="me" src={data.content.about.image.source} alt={data.content.about.image.alternativeText} width={data.content.about.image.width} height={data.content.about.image.height} on:mouseenter={startGif} on:mouseleave={stopGif} />
		<figcaption class="text-center">
			<span class="variant-soft-primary badge max-w-48 whitespace-pre-wrap">{hint}</span>
		</figcaption>
	</figure>
	<article class="flex max-w-prose flex-1 flex-col items-start justify-center space-y-4" id={data.content.about.id}>
		<h2 class="h1">{data.content.about.heading}</h2>
		{#each data.content.about.detail as detail}
			<p>{detail}</p>
		{/each}
		<button class="variant-filled btn" on:click={focusForm}>Start a Project</button>
	</article>
</section>

<style lang="postcss">
	#me {
		animation: ping 3s infinite;
	}

	@keyframes ping {
		0% {
			box-shadow: 0 0 1rem rgba(var(--color-primary-500) / 0.75);
		}

		50% {
			box-shadow: 0 0 0.5rem rgba(var(--color-primary-500) / 0.75);
		}

		100% {
			box-shadow: 0 0 1rem rgba(var(--color-primary-500) / 0.75);
		}
	}
</style>
