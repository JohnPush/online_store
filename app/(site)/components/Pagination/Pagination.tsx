import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.css';
import Link from 'next/link';
import { Input } from '../Input/Input';
import LinkedinIcon from '../../../public/icon-linkedin.svg';

export const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
	...props
}: PaginationProps): JSX.Element => {
	const handleFirst = () => {
		if (currentPage > 1) {
			onPageChange(1);
		}
	};

	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const handleLast = () => {
		if (currentPage < totalPages) {
			onPageChange(totalPages);
		}
	};

	return (
		<div className={styles.pagination}>
			<button
				onClick={handleFirst}
				disabled={currentPage === 1}
				className={`${styles.pageButton} ${
					currentPage === 1 ? styles.disabled : ''
				}`}
			>
				&lt;&lt;
			</button>
			<button
				onClick={handlePrevious}
				disabled={currentPage === 1}
				className={`${styles.pageButton} ${
					currentPage === 1 ? styles.disabled : ''
				}`}
			>
				&lt;
			</button>
			{[...Array(totalPages)].map((_, index) => (
				<button
					key={index}
					onClick={() => onPageChange(index + 1)}
					className={`${styles.pageButton} ${
						currentPage === index + 1 ? styles.active : ''
					}`}
				>
					{index + 1}
				</button>
			))}
			<button
				onClick={handleNext}
				disabled={currentPage === totalPages}
				className={`${styles.pageButton} ${
					currentPage === totalPages ? styles.disabled : ''
				}`}
			>
				&gt;
			</button>
			<button
				onClick={handleLast}
				disabled={currentPage === totalPages}
				className={`${styles.pageButton} ${
					currentPage === totalPages ? styles.disabled : ''
				}`}
			>
				&gt;&gt;
			</button>
		</div>
	);
};
