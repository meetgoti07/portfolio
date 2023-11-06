import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
import ReactGA from 'react-ga';
ReactGA.initialize('G-4N9KRFL7N7'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
