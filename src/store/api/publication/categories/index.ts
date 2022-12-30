import { AxiosError } from "axios";

export const GetCategories =
	async () => {
		try {
			const response = await fetch(`${process.env.API_APP_URL}/category/Blog/active`);

			return await response.json();
		} catch (error) {
			if (
				error instanceof
				AxiosError
			) {
				return error.response;
			}
		}
	};

