<script lang="ts">
	import { enhance } from '$app/forms'
	import { fade } from 'svelte/transition'
	import type { FormShape } from '.'

	let sending: boolean = false

	export let content: FormShape
</script>

<form
	class="card variant-ghost-surface w-full space-y-4 p-4"
	method="post"
	use:enhance={() => {
		sending = true
		return async ({ update }) => {
			sending = false
			return await update()
		}
	}}
>
	{#if sending}
		<div class="card variant-ghost-surface p-4" in:fade>
			<p>Sending...</p>
		</div>
	{:else if content.output?.success && sending === false}
		<div class="card variant-ghost-success p-4" in:fade>
			<p>{content.output.success}</p>
		</div>
	{:else if content.output?.error && sending === false}
		<div class="card variant-ghost-error p-4" in:fade>
			<ul class="list">
				<p class="font-medium">Please address the following errors:</p>
				{#each Object.values(content.output.error) as value}
					<li>
						<span>—</span>
						<span>{value.message}</span>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	<label class="label" for={content.input.inputs.name.name}>
		<span>{content.input.inputs.name.label}</span>
		<input class="input variant-ghost-primary" class:variant-ghost-error={!!content.output?.error?.name} type={content.input.inputs.name.type} name={content.input.inputs.name.name} id={content.input.inputs.name.name} required={content.input.inputs.name.isRequired} placeholder={content.input.inputs.name.placeholder} />
	</label>
	<label class="label" for={content.input.inputs.email.name}>
		<span>{content.input.inputs.email.label}</span>
		<input class="input variant-ghost-primary" class:variant-ghost-error={!!content.output?.error?.email} type={content.input.inputs.email.type} name={content.input.inputs.email.name} id={content.input.inputs.email.name} required={content.input.inputs.email.isRequired} placeholder={content.input.inputs.email.placeholder} />
	</label>
	<label class="label" for={content.input.inputs.message.name}>
		<span>{content.input.inputs.message.label}</span>
		<textarea class="textarea variant-ghost-primary h-28" class:variant-ghost-error={!!content.output?.error?.message} name={content.input.inputs.message.name} id={content.input.inputs.message.name} required={content.input.inputs.message.isRequired} placeholder={content.input.inputs.message.placeholder}></textarea>
	</label>
	<button class="variant-filled-primary btn" type="submit">{content.input.submit.label}</button>
</form>
