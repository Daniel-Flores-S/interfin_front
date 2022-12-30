import { AxiosError } from "axios";
import { ApiService } from "../../../data/service/Api.Service";

export const getUsersArticles =
	async () => {
		try {
			const response =
				await ApiService.get(
					"/articles",
				);

			return (
				response.status ===
				200 &&
				response?.data
			);
		} catch (error) {
			return error;
		}
	};

export const getArticleById = async (
	id: string,
) => {
	try {
		const response =
			await ApiService.get(
				`/articles/${id}`,
			);

		return (
			response.status === 200 &&
			response?.data
		);
	} catch (error) {
		if (
			error instanceof AxiosError
		) {
			return error.response;
		}
	}
};