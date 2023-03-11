import { useEffect, useState } from "react";

// @moment
import 'moment/locale/pt-br'
import moment from "moment";
import Router from 'next/router';

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
import ServiceWhatsApp from "../components/ServiceWhatsApp";
import AppBarMenu from "../components/AppBar";
import Loader from "../components/Loader";

moment.locale('pt-br')

const clientSideEmotionCache = createEmotionCache();


const App = (props: any) => {

	const [loading, setLoading] = useState(false);

	Router.events.on('routeChangeStart', () => setLoading(true));
	Router.events.on('routeChangeComplete', () => setLoading(false));
	Router.events.on('routeChangeError', () => setLoading(false));

	


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
			{loading && <Loader loading={loading} />}
			<HeadComponent title={"Interfin"} />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBarMenu />
				{
					getLayout(
						<Component {...pageProps} />,
					)}
				<ServiceWhatsApp />
				<div
					style={{
						padding: '3px 0px',
						backgroundColor: "#ffc115",
					}}
				/>
				<Footer />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;