import { createContext, useState, } from "react";

import { AuthContextType, } from "./utils";

export const AuthContext =
	createContext(
		{} as AuthContextType,
	);

export function AuthProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [user, setUser] = useState<string>('rs');


	return (
		<AuthContext.Provider value={{ user, setUser }} >
			{children}
		</AuthContext.Provider>
	);
}
