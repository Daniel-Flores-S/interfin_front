import { useEffect } from "react";

// @moment
import 'moment/locale/pt-br'
import moment from "moment";

// @Theme and Utils
import { theme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";

// @components
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HeadComponent from "../components/Head";
import Footer from "../components/Footer";

// @Mui 
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

moment.locale('pt-br')

const clientSideEmotionCache = createEmotionCache();


const App = (props: any) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	const getLayout = Component.getLayout ?? ((page: unknown) => page);


	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://cdn.bitrix24.com.br/b23629171/crm/tag/call.tracker.js';
		script.async = true;
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		}
	}, [])



	return (
		<CacheProvider value={emotionCache}>
			<HeadComponent title={"Interfin"} />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ResponsiveAppBar />
				{
					getLayout(
						<Component {...pageProps} />,
					)}
				<Footer />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;