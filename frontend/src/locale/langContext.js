import React from "react";

const LangContext = React.createContext({
	isEng: false,
	setLanguage: () => {},
});

export default LangContext;
