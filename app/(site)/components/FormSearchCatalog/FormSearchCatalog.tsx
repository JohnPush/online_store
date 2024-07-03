'use client';
import styles from './FormSearchCatalog.module.css';
import { FormSearchCatalogProps } from './FormSearchCatalog.props';
import React from 'react';
import ArrowIcon from '@/public/icon-arrow.svg';
import LoupeIcon from '@/public/icon-search-button.svg';
import CheckmarkIcon from '@/public/icon-checkmark.svg';
import { Input } from '../Input/Input';
import { IconType, InputType } from '../Input/Input.props';
import { useForm } from 'react-hook-form';

interface FormData {
	[key: string]: any;
}

export const FormSearchCatalog = ({
	placeholder,
	icon
}: {
	placeholder: string;
	icon: IconType;
}): JSX.Element => {
	const { register, handleSubmit, reset } = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<Input
				type={InputType.Text}
				placeholder={placeholder}
				register={register}
				name="text"
			/>
			{icon === IconType.Arrow && (
				<button type="submit" className={styles.button}>
					<ArrowIcon />
				</button>
			)}
			{icon === IconType.Loupe && (
				<button type="submit" className={styles.button}>
					<LoupeIcon />
				</button>
			)}
		</form>
	);
};
