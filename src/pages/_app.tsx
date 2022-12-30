import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache } from "../utils/create-emotion-cache";
import { theme } from "../theme";
import { AuthProvider } from "../contexts/AuthContext";
import HeadComponent from "../components/Head";

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import moment from "moment";
import 'moment/locale/pt-br'

const clientSideEmotionCache = createEmotionCache();

moment.locale('pt-br')

const App = (props: any) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	const getLayout = Component.getLayout ?? ((page: unknown) => page);

	return (
		<CacheProvider
			value={emotionCache}
		>
			<HeadComponent
				title={"Interfin"}
			/>
			<ThemeProvider
				theme={theme}
			>
				<AuthProvider>
					<CssBaseline />
					<ResponsiveAppBar />
					{
						getLayout(
							<Component
								{...pageProps}
							/>,
						)}
					<Footer />

				</AuthProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;