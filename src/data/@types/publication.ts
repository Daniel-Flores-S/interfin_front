export type PublicationType = {
	id?: string;
	title: string;
	category: string;
	createdAt?: string;
	isBanners: boolean;
	summary: string;
	status?: string;
	video_url: string;
	image_url: string;
	user?: string;
};

export type CategoryType = {
	value: string;
	label?: string;
};



export type Publication = {
	id?: string;
	title: string;
	category: Category;
	createdAt?: string;
	isBanners: boolean;
	summary: string;
	status?: string;
	video_url: string;
	image_url: string;
	user?: string;
};

type Category = {
	name: string;
	id?: string;
};
export type PublicationByCategory = {
	items: Publication[];
	currentPage: number;
	totalItems: number;
	totalPages: number;
}

