import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import Image from 'next/image';

export const ProductCard = ({
	product,
	...props
}: ProductCardProps): JSX.Element => {
	return (
		<div className={styles.card} {...props}>
			<Image
				src={product.images[0]}
				alt={product.name}
				className={styles.image}
				width={377}
				height={380}
				layout="responsive" // Настройка для адаптивного изображения
			/>
			<div className={styles.details}>
				<h2 className={styles.name}>{product.name}</h2>
				<p className={styles.price}>${product.price}</p>
			</div>
		</div>
	);
};
