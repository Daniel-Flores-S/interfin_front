import { AxiosError } from "axios";
import { patternDT } from "../../../utils/pattern";

export const getAllPublications = async () => {
	try {
		const response = await fetch(`${process.env.API_APP_URL}/publication/Blog`);
		return await response.json();
	} catch (error) {
		if (
			error instanceof AxiosError
		) {
			return error.response?.data
				?.message;
		}
		return patternDT;
	}
}


export const getPublicationById = async (id: string,) => {
	try {
		const response = await fetch(`${`${process.env.API_APP_URL}/publication/Blog/${id}`}`);
		return await response.json();
	} catch (error) {
		if (
			error instanceof AxiosError
		) {
			return error.response?.data
				?.message;
		}
		return {};
	}
}
export const getAllCategoryById = async (id: string, page?: number) => {
	let url = `${process.env.API_APP_URL}/publication/Blog/AllCategoryById/${id}`
	if (page) url += `?page=${page}`
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		if (
			error instanceof AxiosError
		) {
			return error.response?.data
				?.message;
		}
		return patternDT;
	}
}

export const getAllBanners = async () => {
	try {
		const response = await fetch(`${process.env.API_APP_URL}/publication/banners`);
		return await response.json();
	} catch (error) {
		if (
			error instanceof AxiosError
		) {
			return error.response?.data
				?.message;
		}
		return patternDT;
	}
}

export const getAllRecent = async () => {
	try {
		const response = await fetch(`${process.env.API_APP_URL}/publication/recent`);
		return await response.json();
	} catch (error) {
		if (
			error instanceof AxiosError
		) {
			return error.response?.data
				?.message;
		}
		return patternDT;
	}
}
