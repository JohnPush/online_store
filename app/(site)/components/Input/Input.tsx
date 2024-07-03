'use client';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import React from 'react';
import ArrowIcon from '../../../public/icon-arrow.svg';
import LoupeIcon from '../../../public/icon-search-button.svg';
import CheckmarkIcon from '../../../public/icon-checkmark.svg';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

export const Input = ({
	placeholder,
	type,
	register,
	name,
	...props
}: InputProps): JSX.Element => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			{...register(name, { required: true })}
			className={styles.input}
			{...props}
		/>
	);
};
