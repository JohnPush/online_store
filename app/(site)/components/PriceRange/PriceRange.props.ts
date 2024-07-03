import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PriceRangeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	min: number;
	max: number;
	step: number;
	priceGap: number;
}
