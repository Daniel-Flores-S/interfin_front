import { AxiosError } from "axios";
import { ApiService } from "../../../data/service/Api.Service";

export const accessControl =
	async () => {
		try {
			const response =
				await ApiService.get(
					"/users",
				);
			return response?.data;
		} catch (error) {
			if (
				error instanceof
				AxiosError
			) {
				return error.response;
			}
		}
	};

export const deleteUsers = async (
	id: string,
) => {
	try {
		const response =
			await ApiService.delete(
				`/users/${id}`,
			);
		return response;
	} catch (error) {
		if (
			error instanceof AxiosError
		) {
			return error.response;
		}
	}
};
