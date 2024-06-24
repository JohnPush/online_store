import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder: string;
	type: 'email';
	icon: 'arrow' | 'loupe' | 'close' | 'none';
}
