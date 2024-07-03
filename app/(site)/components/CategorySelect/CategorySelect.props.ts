import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export interface CategorySelectProps
	extends DetailedHTMLProps<
		SelectHTMLAttributes<HTMLSelectElement>,
		HTMLSelectElement
	> {
	options: { value: string; label: string }[];
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
