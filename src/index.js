import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ShopContextProvider>
			<Router>
				<App />
			</Router>
		</ShopContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
