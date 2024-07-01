'use client';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import React, { useState } from 'react';
import SearchIcon from '../../../public/icon-search-input.svg';

export const Search = ({ ...props }: SearchProps): JSX.Element => {
	return (
		<div className={styles.search}>
			<SearchIcon />
			<input type="text" placeholder="Поиск" className={styles.input} />
		</div>
	);
};
