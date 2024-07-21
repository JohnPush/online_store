'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { getProducts } from '@/api/products';
import { Product } from '@/interfaces/products.interface';
import { ProductListProps } from './ProductList.props';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

export const ProductList = ({ ...props }: ProductListProps): JSX.Element => {
	const [products, setProducts] = useState<Product[]>([]);
	const searchParams = useSearchParams();
	const categoryIdParam = searchParams.get('categoryId');
	const nameQueryParam = searchParams.get('name');
	const minPriceParam = searchParams.get('minPrice');
	const maxPriceParam = searchParams.get('maxPrice');
	const discountParam = searchParams.get('discount');

	useEffect(() => {
		async function fetchProducts() {
			try {
				const categoryId = categoryIdParam
					? parseInt(categoryIdParam)
					: undefined;
				const name = nameQueryParam || undefined;
				const minPrice = minPriceParam ? parseInt(minPriceParam) : undefined;
				const maxPrice = maxPriceParam ? parseInt(maxPriceParam) : undefined;
				const discount = discountParam === 'true';

				const data = await getProducts({
					categoryId,
					name,
					minPrice,
					maxPrice,
					discount
				});
				setProducts(data.products.slice(0, 3));
			} catch (error) {
				console.error(error);
			}
		}
		fetchProducts();
	}, [
		categoryIdParam,
		nameQueryParam,
		minPriceParam,
		maxPriceParam,
		discountParam
	]);

	return (
		<div className={styles.productList}>
			{products.map((product) => (
				<ProductCard key={product.sku} product={product} />
			))}
		</div>
	);
};
