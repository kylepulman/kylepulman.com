import { EMAIL_ADDRESS, EMAIL_PASSWORD } from '$env/static/private';
import type { Submission } from '$lib';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'mail.privateemail.com',
	port: 587,
	secure: false,
	auth: {
		user: EMAIL_ADDRESS,
		pass: EMAIL_PASSWORD
	}
});

export const sendEmail = async (submission: Submission) => {
	try {
		const toMe = await transporter.sendMail({
			from: `"kylepulman.com" <${EMAIL_ADDRESS}>`,
			to: `"Me" <${EMAIL_ADDRESS}>`,
			subject: 'Form submission',
			text: `Their message:\n\nName: ${submission.name}\nEmail: ${submission.email}\nMessage: ${submission.message}`,
			html: `<ul><h1>Their message:</h1><li>Name: ${submission.name}</li><li>Email: ${submission.email}</li><li>Message: ${submission.message}</li></ul>`
		});

		const toThem = await transporter.sendMail({
			from: `"Kyle P. Ulman" <${EMAIL_ADDRESS}>`,
			to: submission.email,
			subject: 'Thanks for your message!',
			text: `Thank you for sending a message from the form on my website! Please expect details within the next 48 hours.\n\nYour message:\n\nName: ${submission.name}\nEmail: ${submission.email}\nMessage: ${submission.message}`,
			html: `<p>Thank you for sending a message from the form on my website! Please expect details within the next 48 hours.</p><ul><h1>Your message:</h1><li>Name: ${submission.name}</li><li>Email: ${submission.email}</li><li>Message: ${submission.message}</li></ul>`
		});

		return `To them: ${toThem.messageId}, To me: ${toMe.messageId}`;
	} catch (error) {
		console.error(error);
	}
};
