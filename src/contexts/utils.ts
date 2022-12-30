export type User = {
	name?: string;
	email?: string;
	avatar_url?: string;
};

export type SignInData = {
	email: string;
	password: string;
};

export type AuthContextType = {
	user: string;
	setUser: (string: string,) => void;
};
