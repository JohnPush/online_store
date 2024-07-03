import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FormSearchCatalogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	placeholder: string;
	type: 'email';
	icon: 'arrow' | 'loupe' | 'close' | 'none';
}
