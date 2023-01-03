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
import { useEffect } from "react";

const clientSideEmotionCache = createEmotionCache();

moment.locale('pt-br')

const App = (props: any) => {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	const getLayout = Component.getLayout ?? ((page: unknown) => page);

	// 	<script>
	//     (function (w, d, u) {
	//       var s = d.createElement('script'); s.async = true; s.src = u + '?' + (Date.now() / 60000 | 0);
	//       var h = d.getElementsByTagName('script')[0]; h.parentNode.insertBefore(s, h);
	//     })(window, document, 'https://cdn.bitrix24.com.br/b23629171/crm/tag/call.tracker.js');
	//   </script>

	// useEffect(() => {
	// 	const script = document.createElement('script');
	// 	script.src = 'https://cdn.bitrix24.com.br/b23629171/crm/tag/call.tracker.js';
	// 	script.async = true;
	// 	console.log('adding script')
	// 	document.body.appendChild(script);
	// 	return () => {
	// 		console.log('removing script')
	// 		document.body.removeChild(script);
	// 	}
	// }, [])
	


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