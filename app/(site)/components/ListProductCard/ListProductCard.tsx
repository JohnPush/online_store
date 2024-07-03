'use client';
import React, { useEffect, useState } from 'react';
import { getProducts } from '@/api/products';
import { Product } from '@/interfaces/products.interface';
import { ListProductCardProps } from './ListProductCard.props';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ListProductCard.module.css';

export const ListProductCard = ({
	...props
}: ListProductCardProps): JSX.Element => {
	const [products, setProducts] = useState<Product[]>([]);
	const [totalProducts, setTotalProducts] = useState<number>(0);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const data = await getProducts();
				setProducts(data.products.slice(0, 6));

				setTotalProducts(data.totalProducts);
				console.log('Total Products:', data.totalProducts);
			} catch (error) {
				console.error(error);
			}
		}
		fetchProducts();
	}, []);

	return (
		<div className={styles.productList}>
			{products.map((product) => (
				<ProductCard key={product.sku} product={product} />
			))}
		</div>
	);
};
