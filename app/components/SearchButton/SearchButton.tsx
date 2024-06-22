'use client';
import styles from './SearchButton.module.css';
import { SearchButtonProps } from './SearchButton.props';
import React, { useState } from 'react';
import SearchIcon from '../../../public/icon-search-button.svg';

export const SearchButton = ({
	onClick,
	...props
}: SearchButtonProps): JSX.Element => {
	return <SearchIcon onClick={onClick} className={styles.iconSearch} />;
};
