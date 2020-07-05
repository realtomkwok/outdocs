import React from "react";
import ReactDOM from "react-dom";
import pangu from "pangu";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

pangu.spacingElementById("root");
document.addEventListener("DOMContentLoaded", () => {
	// listen to any DOM change and automatically perform spacing via MutationObserver()
	pangu.autoSpacingPage();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
