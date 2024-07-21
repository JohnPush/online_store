import axios, { AxiosError } from 'axios';
import { API } from '@/app/api';

interface GetProductsParams {
	categoryId?: number;
	name?: string;
	minPrice?: number;
	maxPrice?: number;
	discount?: boolean;
}

export async function getProducts(params: GetProductsParams) {
	try {
		const { categoryId, name, minPrice, maxPrice, discount } = params;

		const response = await axios.get(API.products, {
			params: {
				limit: 1000,
				offset: 0,
				...(categoryId !== undefined && { categoryId }),
				...(name !== undefined && { name }),
				...(minPrice !== undefined && { minPrice }),
				...(maxPrice !== undefined && { maxPrice }),
				...(discount !== undefined && { discount })
			}
		});
		return response.data;
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			throw new Error(`Error geting products: ${error.message}`);
		} else {
			throw new Error(`Unknown error geting products: ${error}`);
		}
	}
}
