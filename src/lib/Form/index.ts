export { default as Form } from './index.svelte';

const Inputs = ['name', 'email', 'message'] as const;

export type FormShape = {
	input: {
		inputs: {
			[Property in (typeof Inputs)[number]]: {
				name: string;
				type: 'text' | 'email' | 'textarea';
				isRequired: boolean;
				label: string;
				placeholder: string;
			};
		};
		submit: {
			label: string;
		};
	};
	output: {
		error?: {
			[Property in (typeof Inputs)[number]]?: {
				name: Property;
				message: string;
			};
		};
		success?: string;
	};
};
