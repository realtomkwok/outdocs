import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

  (function (d) {
		var config = {
				kitId: "sjt8wlz",
				scriptTimeout: 3000,
				async: true,
			},
			h = d.documentElement,
			t = setTimeout(function () {
				h.className =
					h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
			}, config.scriptTimeout),
			tk = d.createElement("script"),
			f = false,
			s = d.getElementsByTagName("script")[0],
			a;
		h.className += " wf-loading";
		tk.src = "https://use.typekit.net/" + config.kitId + ".js";
		tk.async = true;
		tk.onload = tk.onreadystatechange = function () {
			a = this.readyState;
			if (f || (a && a != "complete" && a != "loaded")) return;
			f = true;
			clearTimeout(t);
			try {
				Typekit.load(config);
			} catch (e) {}
		};
		s.parentNode.insertBefore(tk, s);
  })(document);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
