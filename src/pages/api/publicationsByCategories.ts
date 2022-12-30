import { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiService } from "../../data/service/Api.Service";

const publicationsByCategories = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const response = await ApiService.get(`/publication/Blog/AllCategory`);
        return res.status(200).json(response.data);
    }
    catch (error) {
        const err = error as AxiosError;
        return res.status(err.response?.status || 500).json(err.response?.data);
    }


}

export default publicationsByCategories