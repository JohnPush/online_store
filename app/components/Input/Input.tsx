/*как добавить ...register?? явно указать не могу потому что планирую компонент использовать не только под email */

'use client';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import React from 'react';
import ArrowIcon from '../../../public/icon-arrow.svg';
import LoupeIcon from '../../../public/icon-search-button.svg';
import CheckmarkIcon from '../../../public/icon-checkmark.svg';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

export const Input = ({
	placeholder,
	icon,
	type,
	...props
}: InputProps): JSX.Element => {
	const { register, handleSubmit, reset } = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(data);
		toast.custom(
			<div className={styles.toast}>
				<CheckmarkIcon />
				<div>Ваш email подписан на новости и уведомления</div>
			</div>
		);

		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
			<input
				type={type}
				placeholder={placeholder}
				// {...register('email', { required: true })} ошибка
				className={styles.input}
			/>
			{icon === 'arrow' && (
				<button type="submit">
					{' '}
					<ArrowIcon />{' '}
				</button>
			)}
			{icon === 'loupe' && (
				<button type="submit">
					<LoupeIcon />{' '}
				</button>
			)}
		</form>
	);
};
