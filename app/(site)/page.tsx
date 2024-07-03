import styles from './page.module.css';
import { Metadata } from 'next';
import { ListProductCard } from './components';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home'
	};
}

export default async function Home() {
	return (
		<main className={styles.main}>
			<div>Последние поступления</div>
			<ListProductCard />
		</main>
	);
}
