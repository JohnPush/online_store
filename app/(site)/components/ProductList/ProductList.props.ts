import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	categoryId?: string;
	name?: string;
}
