import React from "react";
import "../styles/globals.css";

import { NunitoFont } from "@memory/constants";
import { Container } from "@memory/ui";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<Container className="bg-black min-h-screen flex justify-center" id="next-body" style={NunitoFont.style}>
			<Component {...pageProps} />
		</Container>
	);
};

export default App;
