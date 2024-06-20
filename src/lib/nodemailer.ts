import { NODEMAILER_FROM, NODEMAILER_HOST, NODEMAILER_PASS, NODEMAILER_PORT, NODEMAILER_SECURE, NODEMAILER_USER } from '$env/static/private'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
	host: NODEMAILER_HOST,
	port: JSON.parse(NODEMAILER_PORT),
	secure: JSON.parse(NODEMAILER_SECURE),
	auth: { user: NODEMAILER_USER, pass: NODEMAILER_PASS }
})

export const sendMessage = async (content: { text: string; html: string }) => {
	await transport.sendMail({
		from: NODEMAILER_FROM,
		to: NODEMAILER_FROM,
		subject: 'You have a new message!',
		text: content.text,
		html: content.html
	})
}
