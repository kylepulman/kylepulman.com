import { validateEmail, type Submission } from '$lib';
import { fail, type ActionFailure } from '@sveltejs/kit';
import { sendEmail } from '$lib/nodemailer.js';

export const actions = {
	default: async ({ request }) => {
		const MESSAGE_LIMIT = 1000;
		const formData = await request.formData();

		const submission: Submission = {
			name: '',
			email: '',
			message: ''
		};

		submission.name = formData.get('name') as string;
		submission.email = formData.get('email') as string;
		submission.message = formData.get('message') as string;

		const failure: ActionFailure<{
			errors: { input: string; message: string }[];
		}> = fail(400, { errors: [] });

		if (!submission.name) {
			failure.data.errors.push({ input: 'name', message: 'Please enter your name.' });
		}

		if (!validateEmail(submission.email)) {
			failure.data.errors.push({ input: 'email', message: 'Please enter a valid email address.' });
		}

		if (submission.message.length > MESSAGE_LIMIT) {
			failure.data.errors.push({
				input: 'message',
				message: 'Message is too long, please revise.'
			});
		}

		if (failure.data.errors.length > 0) {
			return failure;
		}

		console.log(await sendEmail(submission));

		return { success: true, message: 'Message sent! Please check your email for confirmation.' };
	}
};
