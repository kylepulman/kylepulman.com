import type { FormShape } from '$lib/Form'
import { sendMessage } from '$lib/nodemailer'

export const load = async () => {
	const hero: {
		id: string
		heading: string
		detail: string[]
		formInput: FormShape['input']
	} = {
		id: 'hero',
		heading: 'Enhance your web experience with browser extensions.',
		detail: ["Have a project that requires a browser extension? I'd love to hear about it! Please provide your name, email address, and a message describing your project and I will be in touch."],
		formInput: {
			inputs: {
				name: {
					name: 'name',
					type: 'text',
					label: 'Your name',
					placeholder: 'Kyle P.',
					isRequired: false
				},
				email: {
					name: 'email',
					type: 'text',
					label: 'Your email address',
					placeholder: 'hello@kylepulman.com',
					isRequired: false
				},
				message: {
					name: 'message',
					type: 'textarea',
					label: 'Your message',
					placeholder: 'I need a browser extension to automate some processes for my business!',
					isRequired: false
				}
			},
			submit: {
				label: 'Send'
			}
		}
	}

	const about: {
		id: string
		heading: string
		detail: string[]
		image: {
			source: string
			alternativeText: string
			width: number
			height: number
		}
	} = {
		id: 'about',
		heading: "👋 Hello, I'm Kyle",
		detail: ['I am a web developer specializing in browser extension development. A well-crafted extension can help business boost productivity by automating browser tasks and removing friction from the browsing experience.', "Start a project with me, and I'll ensure quality with rigorous testing, comprehensive documentation, and responsive support."],
		image: {
			source: '/images/me-still.gif',
			alternativeText: 'A GIF of me and Alfie.',
			width: 480,
			height: 480
		}
	}

	return {
		head: {
			title: hero.heading,
			description: hero.detail
		},
		content: {
			hero,
			about
		}
	}
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()

		const name = formData.get('name')
		const email = formData.get('email')
		const message = formData.get('message')

		const error: FormShape['output']['error'] = {}

		if (!name) error.name = { name: 'name', message: 'Name is required' }
		if (!isEmail(email)) error.email = { name: 'email', message: 'Invalid email' }
		if (!message) error.message = { name: 'message', message: 'Message is required' }

		if (!isObjectEmpty(error)) {
			return {
				error
			}
		}

		await sendMessage({
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
			html: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
		})

		return {
			success: 'Message sent successfully!'
		}
	}
}

function isEmail(email?: FormDataEntryValue | string | null | undefined): boolean {
	if (!email || typeof email !== 'string') return false
	/* eslint-disable */ const regExp = RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) /* eslint-enable */
	return regExp.test(email)
}

function isObjectEmpty(o: object) {
	for (const key in o) if (Object.hasOwn(o, key)) return false
	return true
}
