import './App.css';
import './partials/style.jsx';
import NavBar from './partials/navbar.jsx';
import React from 'react';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<NavBar />
		</div>
	);
}

export default App;
