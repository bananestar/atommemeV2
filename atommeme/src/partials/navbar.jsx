import React, { useEffect } from 'react'; // Importez useEffect
import logo from '../img/logo/logo.png';

function Navbar() {
	// Utiliser une majuscule pour les noms de composants
	useEffect(() => {
		// Créer le premier script pour ionicons.esm.js
		const scriptEsm = document.createElement('script');
		scriptEsm.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
		scriptEsm.type = 'module';
		scriptEsm.async = true;

		// Créer le second script pour ionicons.js
		const script = document.createElement('script');
		script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
		script.async = true;

		//Script Message
		scriptEsm.onload = () => {
			console.log('script ESM load');
		};

		script.onload = () => {
			console.log('script ionicons load');
		};

		script.onerror = (error) => {
			console.error('Error : ', error);
		};

		// Ajouter les scripts au body
		document.body.appendChild(scriptEsm);
		document.body.appendChild(script);

		// Fonction de nettoyage pour supprimer les scripts lors du démontage
		return () => {
			document.body.removeChild(scriptEsm);
			document.body.removeChild(script);
		};
	}, []); // Le tableau vide signifie que cet effet s'exécute une seule fois après le premier rendu

	return (
		<>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
			/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons+Round" />
			<nav id="navbar">
				{
					<ul className="navbar-items flexbox-col">
						<li className="navbar-logo flexbox-left">
							<a className="navbar-item-inner flexbox">
								<img src={logo} id="Layer_1" data-name="Layer 1" alt="logo" />
							</a>
						</li>
						<li className="navbar-item flexbox-left">
							<a className="navbar-item-inner flexbox-left">
								<div className="navbar-item-inner-icon-wrapper flexbox">
									<ion-icon name="home-outline"></ion-icon>
								</div>
								<span className="link-text">Acceuil</span>
							</a>
						</li>

						<li className="navbar-item flexbox-left">
							<a className="navbar-item-inner flexbox-left">
								<div className="navbar-item-inner-icon-wrapper flexbox">
									<ion-icon name="image-outline"></ion-icon>
								</div>
								<span className="link-text">Image</span>
							</a>
						</li>
						<li className="navbar-item flexbox-left">
							<a className="navbar-item-inner flexbox-left">
								<div className="navbar-item-inner-icon-wrapper flexbox">
									<ion-icon name="log-in-outline"></ion-icon>
								</div>
								<span className="link-text">Connexion</span>
							</a>
						</li>
						<li className="navbar-item flexbox-left">
							<a className="navbar-item-inner flexbox-left">
								<div className="navbar-item-inner-icon-wrapper flexbox">
									<ion-icon name="create-outline"></ion-icon>
								</div>
								<span className="link-text">Inscription</span>
							</a>
						</li>
					</ul>
				}
			</nav>
		</>
	);
}

export default Navbar; // Assurez-vous que cela correspond au nom de la fonction du composant
