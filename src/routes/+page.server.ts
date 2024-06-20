export const load = async () => {
	const hero = {
		id: 'hero',
		heading: 'Augment your web experience with browser extensions.',
		detail: 'Quality browser extensions to help you better navigate the web.'
	};

	return {
		head: {
			title: hero.heading,
			description: hero.detail
		},
		content: {
			hero
		}
	};
};
