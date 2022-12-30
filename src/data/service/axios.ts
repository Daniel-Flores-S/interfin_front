import axios from "axios";

export function getAPIClient() {
	return axios.create({
		baseURL: process.env.API_APP_URL,
	});
}
