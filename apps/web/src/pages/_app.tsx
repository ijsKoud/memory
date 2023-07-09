import React from "react";
import "../styles/globals.css";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const AppComponent = Component as React.FC;
	return <AppComponent {...pageProps} />;
};

export default App;
