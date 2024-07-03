import { API } from '@/app/api';
import { Root } from '../interfaces/products.interface';

export async function getProducts(): Promise<Root> {
	const response = await fetch(API.products);
	if (!response.ok) {
		throw new Error('Ошибка: products не получены');
	}
	return response.json();
}
