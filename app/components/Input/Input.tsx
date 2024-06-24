'use client';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import React, { useState } from 'react';
import ArrowIcon from '../../../public/icon-arrow.svg';
import LoupeIcon from '../../../public/icon-search-button.svg';

export const Input = ({
	placeholder,
	icon,
	...props
}: InputProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<input type="text" placeholder={placeholder} className={styles.input} />
			{icon === 'arrow' && <ArrowIcon />}
			{icon === 'loupe' && <LoupeIcon />}
		</div>
	);
};
