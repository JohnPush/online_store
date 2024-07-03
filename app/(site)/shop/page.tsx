'use client';
import styles from './page.module.css';
// import { Metadata } from 'next';
import React, { useState } from 'react';
import { Pagination } from '../components';
import { CategorySelect } from '../components';
import { PriceRange } from '../components';
import { DiscountToggle } from '../components';
import { FormSearchCatalog } from '../components';
import { IconType } from '../components/Input/Input.props';

// export async function generateMetadata(): Promise<Metadata> {
// 	return {
// 		title: 'Home'
// 	};
// }

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 4; // заменить на функцию получения данных о количестве страниц поиска для паджнации
	const [category, setCategory] = useState('');
	const [priceRange, setPriceRange] = useState<[number, number]>([40, 180]);
	const [discount, setDiscount] = useState(false);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		// добавить логику для обнолвения каталога при перемещении по паджинации
	};

	const handleCategoryChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setCategory(event.target.value);
		console.log('Selected category:', category);
	};

	const handlePriceChange = (value: [number, number]) => {
		setPriceRange(value);
	};

	const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDiscount(event.target.checked);
		console.log('Discount applied:', discount);
	};

	return (
		<main className={styles.main}>
			<h1>Каталог товаров</h1>
			<FormSearchCatalog placeholder="Поиск..." icon={IconType.Loupe} />
			<CategorySelect
				options={[
					{ value: 'Category1', label: 'Категория1' },
					{ value: 'Category2', label: 'Категория2' },
					{ value: 'Category3', label: 'Категория3' }
				]}
				onChange={handleCategoryChange}
			/>
			<PriceRange min={0} max={1000} step={1} priceGap={0} />
			<DiscountToggle onChange={handleDiscountChange} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</main>
	);
}
