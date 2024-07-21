import styles from './page.module.css';
import { Metadata } from 'next';
import { ProductList } from '../components';
import { Pagination } from '../components';
import { ProductFilter } from '../components';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Shop'
	};
}

export default function Shop() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Каталог товаров</h1>
			<div className={styles.wrapperFilter}>
				<div>
					<ProductFilter />
				</div>
				<div className={styles.wrapperCatalog}>
					<ProductList />
					<Pagination />
				</div>
			</div>
		</main>
	);
}
