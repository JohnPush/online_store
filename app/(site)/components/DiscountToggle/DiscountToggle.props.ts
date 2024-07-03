import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface DiscountToggleProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
