import { AxiosError } from "axios";
import { patternDT } from "../../../utils/pattern";

export const getAllPublications = async () => {
	console.log(process.env.API_APP_URL)
	try {
		const response = await fetch(`${process.env.API_APP_URL}/publication/Blog`);
		console.log(response)
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
	console.log(process.env.API_APP_URL)
	try {
		const response = await fetch(`${`${process.env.API_APP_URL}/publication/Blog/${id}`}`);
		console.log(response)
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
	console.log(process.env.API_APP_URL)
	if (page) url += `?page=${page}`
	try {
		const response = await fetch(url);
		console.log(response)
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
	console.log(process.env.API_APP_URL)
	try {
		const response = await fetch(`${process.env.API_APP_URL}/publication/banners`);
		console.log(response)
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
	console.log(process.env.API_APP_URL)
	try {
		const response = await fetch(`${process.env.API_APP_URL}/publication/recent`);
		console.log(response)
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
