'use client';

import { PriceRangeProps } from './PriceRange.props';
import styles from './PriceRange.module.css';
import React, { useState, useEffect, useCallback } from 'react';

export const PriceRange = ({
	min,
	max,
	step,
	priceGap,
	...props
}: PriceRangeProps): JSX.Element => {
	const [minValue, setMinValue] = useState(min);
	const [maxValue, setMaxValue] = useState(max);

	const handleMinRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Math.min(Number(e.target.value), maxValue - priceGap);
		setMinValue(value);
	};

	const handleMaxRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Math.max(Number(e.target.value), minValue + priceGap);
		setMaxValue(value);
	};

	return (
		<div className={styles.priceRange}>
			<div className={styles.slider}>
				<div
					className={styles.progress}
					style={{
						left: `${((minValue - min) / (max - min)) * 100}%`,
						right: `${100 - ((maxValue - min) / (max - min)) * 100}%`
					}}
				/>
			</div>
			<div className={styles.rangeInput}>
				<input
					type="range"
					min={min}
					max={max}
					value={minValue}
					step={step}
					onChange={handleMinRangeChange}
					className={styles.rangeMin}
				/>
				<input
					type="range"
					min={min}
					max={max}
					value={maxValue}
					step={step}
					onChange={handleMaxRangeChange}
					className={styles.rangeMax}
				/>
			</div>
			<div className={styles.priceDisplay}>
				Цена: ${minValue} – ${maxValue}
			</div>
		</div>
	);
};
