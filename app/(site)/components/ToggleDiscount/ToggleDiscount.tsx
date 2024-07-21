'use client';

import { ToggleDiscountProps } from './ToggleDiscount.props';
import styles from './ToggleDiscount.module.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export const ToggleDiscount = ({
	...props
}: ToggleDiscountProps): JSX.Element => {
	const [discount, setDiscount] = useState(false);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const discountParam = searchParams.get('discount');
		setDiscount(discountParam === 'true');
	}, [searchParams]);

	const handleDiscountChange = (event: ChangeEvent<HTMLInputElement>) => {
		const isChecked = event.target.checked;
		setDiscount(isChecked);
		const params = new URLSearchParams(searchParams.toString());
		if (isChecked) {
			params.set('discount', 'true');
		} else {
			params.delete('discount');
		}
		router.push(`/shop?${params.toString()}`);
	};

	return (
		<label className={styles.switch}>
			<span className={styles.label}>Со скидкой</span>
			<input
				type="checkbox"
				onChange={handleDiscountChange}
				checked={discount}
				className={styles.input}
				{...props}
			/>
			<span className={styles.slider}></span>
		</label>
	);
};
