import type { Submission } from '$lib';
import { sendEmail } from '$lib/nodemailer.js';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const submission: Submission = {
			name: '',
			email: '',
			message: ''
		};

		submission.name = formData.get('name') as string;
		submission.email = formData.get('email') as string;
		submission.message = formData.get('message') as string;

		console.log(await sendEmail(submission));

		return submission;
	}
};
