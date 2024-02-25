
import React, { useEffect } from 'react'; // Importez useEffect
import logo from '../img/logo/logo.png';

function Header() { // Utiliser une majuscule pour les noms de composants
    useEffect(() => {
        // Créer le premier script pour ionicons.esm.js
        const scriptEsm = document.createElement('script');
        scriptEsm.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
        scriptEsm.async = true;

        // Créer le second script pour ionicons.js
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
        script.async = true;

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
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Icons+Round' />
            <nav id="navbar">
                {<ul class="navbar-items flexbox-col">
                    <li className="navbar-logo flexbox-left">
                        <a className="navbar-item-inner flexbox">
                            <img src={logo} id="Layer_1" data-name="Layer 1">
                            </img>
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
                    {/*<li class="navbar-item flexbox-left">*/}
                    {/*    <a class="navbar-item-inner flexbox-left">*/}
                    {/*        <div class="navbar-item-inner-icon-wrapper flexbox">*/}
                    {/*            <ion-icon name="folder-open-outline"></ion-icon>*/}
                    {/*        </div>*/}
                    {/*        <span class="link-text">Projects</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li class="navbar-item flexbox-left">*/}
                    {/*    <a class="navbar-item-inner flexbox-left">*/}
                    {/*        <div class="navbar-item-inner-icon-wrapper flexbox">*/}
                    {/*            <ion-icon name="pie-chart-outline"></ion-icon>*/}
                    {/*        </div>*/}
                    {/*        <span class="link-text">Dashboard</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li class="navbar-item flexbox-left">*/}
                    {/*    <a class="navbar-item-inner flexbox-left">*/}
                    {/*        <div class="navbar-item-inner-icon-wrapper flexbox">*/}
                    {/*            <ion-icon name="people-outline"></ion-icon>*/}
                    {/*        </div>*/}
                    {/*        <span class="link-text">Team</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li class="navbar-item flexbox-left">*/}
                    {/*    <a class="navbar-item-inner flexbox-left">*/}
                    {/*        <div class="navbar-item-inner-icon-wrapper flexbox">*/}
                    {/*            <ion-icon name="chatbubbles-outline"></ion-icon>*/}
                    {/*        </div>*/}
                    {/*        <span class="link-text">Support</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li class="navbar-item flexbox-left">*/}
                    {/*    <a class="navbar-item-inner flexbox-left">*/}
                    {/*        <div class="navbar-item-inner-icon-wrapper flexbox">*/}
                    {/*            <ion-icon name="settings-outline"></ion-icon>*/}
                    {/*        </div>*/}
                    {/*        <span class="link-text">Settings</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>}
            </nav>
        </>
    );
}

export default Header; // Assurez-vous que cela correspond au nom de la fonction du composant

