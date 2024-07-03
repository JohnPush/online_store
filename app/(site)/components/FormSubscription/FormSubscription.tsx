'use client';
import styles from './FormSubscription.module.css';
import { FormSubscriptionProps } from './FormSubscription.props';
import React from 'react';
import ArrowIcon from '@/public/icon-arrow.svg';
import LoupeIcon from '@/public/icon-search-button.svg';
import CheckmarkIcon from '@/public/icon-checkmark.svg';
import { Input } from '../Input/Input';
import { IconType, InputType } from '../Input/Input.props';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface FormData {
	[key: string]: any;
}

export const FormSubscription = ({
	placeholder,
	icon
}: {
	placeholder: string;
	icon: IconType;
}): JSX.Element => {
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
			<Input
				type={InputType.Email}
				placeholder={placeholder}
				register={register}
				name="email"
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
