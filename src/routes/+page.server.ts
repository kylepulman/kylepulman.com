export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const submission = {
			name: '',
			email: '',
			message: ''
		};

		submission.name = formData.get('name') as string;
		submission.email = formData.get('email') as string;
		submission.message = formData.get('message') as string;

		return submission;
	}
};
