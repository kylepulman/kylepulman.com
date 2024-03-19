<script lang="ts">
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	export let form;

	const MESSAGE_LIMIT = 1000;
	const TOAST_TIMEOUT = 10 * 1000;

	let message = '';
	let inputErrors: string[] = [];

	if (form?.errors) {
		const toastStore = getToastStore();

		const t: ToastSettings = {
			message: '',
			background: 'variant-filled-error',
			timeout: TOAST_TIMEOUT
		};

		for (const error of form.errors) {
			inputErrors.push(error.input);

			t.message = error.message;

			toastStore.trigger(t);
		}
	}

	if (form?.success) {
		const toastStore = getToastStore();

		const t: ToastSettings = {
			message: form.message,
			background: 'variant-filled-success',
			timeout: TOAST_TIMEOUT
		};

		toastStore.trigger(t);
	}

	const page = {
		title: 'Kyle P. Ulman'
	};
</script>

<section class="space-y-4">
	<h1 class="h1">{page.title}</h1>
	<p>Hello! I'm Kyle. This sentence describes my identity as a developer.</p>
	<p>
		This is the professional work I'm currently engaged in. I could also list projects I'm working
		on or companies I've founded here.
	</p>
	<p>
		This paragraph details what drives me as a developer. It could be a passion for solving
		problems, manifesting ideas, or working with teams toward larger goals.
	</p>
	<p>
		Here, I'll describe some of the things I like to do outside of dev. If applicable, I'll include
		a link to a social media feed or blog that shows me engaging in said hobbies. If I'm feeling
		especially social, I'll include a call-to-action to those who share interests with me to reach
		out!
	</p>
	<h2 class="h2">Find Me Online</h2>
	<div class="logo-cloud grid-cols-1 gap-1 lg:!grid-cols-3">
		<a href="https://github.com/kylepulman" class="logo-item"><span>GitHub</span></a>
		<a href="https://youtube.com/@kylepulman" class="logo-item">YouTube</a>
		<a href="https://www.upwork.com/freelancers/~016325a1e595bfe265" class="logo-item">Upwork</a>
	</div>
	<h2 class="h2">Let's Work Together</h2>
	<p>If you think I'd be a good fit for a project, please complete the form below.</p>
	<form method="post" class="space-y-2">
		<label class="label" for="name">
			<span class="text-sm">Your name:</span>
			<input
				name="name"
				id="name"
				class="input"
				class:input-error={inputErrors.includes('name')}
				type="text"
				placeholder="Kyle P. Ulman"
			/>
		</label>
		<label class="label" for="email">
			<span class="text-sm">Your email:</span>
			<input
				name="email"
				id="email"
				class="input"
				class:input-error={inputErrors.includes('email')}
				type="email"
				placeholder="email@example.com"
			/>
		</label>
		<label class="label" for="message">
			<span class="text-sm">Please describe your project and include any additional details:</span>
			<textarea
				name="message"
				id="message"
				class="textarea"
				class:input-error={message.length > MESSAGE_LIMIT}
				rows="4"
				placeholder="I'd like to build a developer website like this one."
				bind:value={message}
			/>
			<small class:text-error-500={message.length > MESSAGE_LIMIT}>
				{message.length}/{MESSAGE_LIMIT}
			</small>
		</label>
		<button type="submit" class="variant-filled btn">Send</button>
	</form>
</section>
