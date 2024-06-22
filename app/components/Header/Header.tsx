/*Стоит ли вынести cartCount в отдельный компонент? */
/*Стоит ли выносить MobileMenuIcon в отдельный компонент? */
/*Стоит ли MobileMenuIcon обернуть в div? */

'use client';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import React, { useState } from 'react';
import Link from 'next/link';
import { SearchButton } from '../SearchButton/SearchButton';
import { Search } from '../Search/Search';
import CartIcon from '../../../public/icon-cart.svg';
import FavoritesIcon from '../../../public/icon-favorites.svg';
import ProfileIcon from '../../../public/icon-profile.svg';
import MobileMenuIcon from '../../../public/icon-mobile-menu.svg';
import { motion } from 'framer-motion';

export const Header = ({
	logoClassName,
	...props
}: HeaderProps): JSX.Element => {
	const [cartCount, setCartCount] = useState(3);
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const handleSearchButtonClick = () => {
		setIsSearchVisible((prevState) => !prevState);
	};

	return (
		<header className={styles.header}>
			<Link href="/" className={`${styles.logo} ${logoClassName}`}>
				<span className={styles.slogo}>S</span>HOPPE
			</Link>
			<nav className={styles.nav}>
				<Link href="/shop">Магазин</Link>
				<Link href="/about">О нас</Link>
			</nav>
			{!isSearchVisible && (
				<div className={styles.searchButton}>
					<SearchButton onClick={handleSearchButtonClick} />
				</div>
			)}
			{isSearchVisible && (
				<motion.div
					className={styles.search}
					initial={{ opacity: 0.5, width: 0 }}
					animate={{ opacity: 1, width: 288 }}
					transition={{ duration: 0.3 }}
				>
					<Search />
				</motion.div>
			)}
			<div className={styles.icons}>
				<Link href="/cart" className={styles.cart}>
					<CartIcon />
					{cartCount > 0 && (
						<span className={`${styles.cartCount} ${logoClassName}`}>
							{cartCount}
						</span>
					)}
				</Link>
				<Link href="/favorites" className={styles.favorites}>
					<FavoritesIcon />
				</Link>
				<Link href="/profile" className={styles.profile}>
					<ProfileIcon />
				</Link>
				<MobileMenuIcon className={styles.mobileMenu} />
			</div>
			<div className={styles.searchMobile}>
				<Search />
			</div>
		</header>
	);
};
