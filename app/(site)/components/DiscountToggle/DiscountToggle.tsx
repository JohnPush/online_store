import { DiscountToggleProps } from './DiscountToggle.props';
import styles from './DiscountToggle.module.css';
import Link from 'next/link';
import { Input } from '../Input/Input';
import LinkedinIcon from '../../../public/icon-linkedin.svg';

export const DiscountToggle = ({
	onChange,
	...props
}: DiscountToggleProps): JSX.Element => {
	return (
		<label className={styles.switch}>
			<span className={styles.label}>Со скидкой</span>
			<input
				type="checkbox"
				onChange={onChange}
				className={styles.input}
				{...props}
			/>
			<span className={styles.slider}></span>
		</label>
	);
};
