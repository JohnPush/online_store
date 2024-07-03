import { CategorySelectProps } from './CategorySelect.props';
import styles from './CategorySelect.module.css';
import Link from 'next/link';
import { Input } from '../Input/Input';
import LinkedinIcon from '../../../public/icon-linkedin.svg';

export const CategorySelect = ({
	options,
	onChange,
	...props
}: CategorySelectProps): JSX.Element => {
	return (
		<select onChange={onChange} className={styles.select} {...props}>
			<option value="" disabled>
				Категория
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};
