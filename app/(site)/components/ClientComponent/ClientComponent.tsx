'use client';
import { useState, useEffect } from 'react';

import { ClientComponentProps } from './ClientComponent.props';
import { ProductList } from '../ProductList/ProductList';
import { Pagination } from '../Pagination/Pagination';
import { ToggleDiscount } from '../ToggleDiscount/ToggleDiscount';

import styles from './ClientComponent.module.css';
import { getProducts } from '@/api/products';
import { Product } from '@/interfaces/products.interface';

export const ClientComponent = ({
	totalProducts,
	...props
}: ClientComponentProps): JSX.Element => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [withDiscount, setWithDiscount] = useState<boolean>(false);
	const [products, setProducts] = useState<Product[]>([]);
	const productsPerPage = 3;

	useEffect(() => {
		async function fetchProducts() {
			try {
				const offset = (currentPage - 1) * productsPerPage;
				const data = await getProducts(productsPerPage, offset, withDiscount);
				setProducts(data.products);
			} catch (error) {
				console.error(error);
			}
		}
		fetchProducts();
	}, [currentPage, withDiscount]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleToggleDiscount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setWithDiscount(event.target.checked);
		setCurrentPage(1);
	};

	return (
		<div className={styles.wrapper}>
			<ToggleDiscount onChange={handleToggleDiscount} />
			<ProductList products={products} />
			<Pagination
				totalProducts={totalProducts}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
