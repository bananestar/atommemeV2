import React from 'react';
import ReactDOM from 'react-dom/client';
import './partials/style.jsx';
import Navbar from './partials/header.jsx'; // Renommez ici
import BDD from './partials/database/connection.jsx';
import App from './partials/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar /> // Et ici aussi
        <App />
    </React.StrictMode>
);

reportWebVitals();
