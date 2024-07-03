import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PaginationProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}
