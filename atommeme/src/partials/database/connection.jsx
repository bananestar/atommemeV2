const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost', // ou l'adresse IP de votre serveur de base de données
    user: 'root',
    password: 'Denisi64',
    database: 'atommeme',
    port: 3306, // Remplacez 4269 par votre port si différent de 3306
    connectionLimit: 5
});

pool.getConnection()
    .then(conn => {
        console.log("Connecté avec succès à la base de données.");

        // Exécute une requête simple pour vérifier la connexion
        conn.query("SELECT 1 as val")
            .then((rows) => {
                console.log(rows); // Affiche le résultat de la requête, [ {val: 1}, meta: ... ]
                conn.end(); // Ferme la connexion après la vérification
            })
            .catch(err => {
                // Gère l'erreur si la requête échoue
                console.log("Erreur lors de l'exécution de la requête:", err);
                conn.end(); // Assurez-vous de fermer la connexion même en cas d'erreur
            });
    }).catch(err => {
    // Gère l'erreur si la connexion à la base de données échoue
    console.log("Échec de la connexion à la base de données:", err);
});

