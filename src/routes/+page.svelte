<script lang="ts">
	export let form;

	console.log(form);

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
	<ul>
		<h2>Find me on:</h2>
		<li></li>
	</ul>

	<div class="logo-cloud grid-cols-1 gap-1 lg:!grid-cols-3">
		<a href="https://github.com/kylepulman" class="logo-item"><span>GitHub</span></a>
		<a href="https://youtube.com/@kylepulman" class="logo-item">YouTube</a>
		<a href="https://www.upwork.com/freelancers/~016325a1e595bfe265" class="logo-item">Upwork</a>
	</div>

	<h2 class="h2">Let's Work Together</h2>
	<p>If you think I'd be a good fit for a project, please complete the form below.</p>
	<form method="post" class="space-y-4">
		<label class="label" for="name">
			<span>Your name:</span>
			<input name="name" id="name" class="input" type="text" placeholder="Kyle P. Ulman" />
		</label>

		<label class="label" for="email">
			<span>Your email:</span>
			<input
				name="email"
				id="email"
				class="input"
				type="email"
				placeholder="kylepulman@gmail.com"
			/>
		</label>

		<label class="label" for="message">
			<span>Please describe your project and include any additional details:</span>
			<textarea
				name="message"
				id="message"
				class="textarea"
				rows="4"
				placeholder="I'd like to build a developer website like this one."
			/>
		</label>
		<button type="submit" class="variant-filled btn">Send</button>
	</form>
</section>
