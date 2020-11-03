import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Theme from "./theme";

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <App />
        </Theme>
    </React.StrictMode>,
    document.getElementById("root")
);
