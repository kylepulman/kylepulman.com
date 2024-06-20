import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	let module;

	try {
		module = await import(`../posts/${params.slug}.md`);
	} catch (err) {
		console.error(err);
		error(404);
	}

	return {
		module
	};
};
