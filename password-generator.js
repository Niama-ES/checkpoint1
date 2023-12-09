// Importer le module generate-password
const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  // Configurer les options du mot de passe (vous pouvez ajuster ces options selon vos besoins)
const passwordOptions = {
    length: 12,           // Longueur du mot de passe
    numbers: true,        // Autoriser les chiffres
    symbols: true,        // Autoriser les symboles
    uppercase: true,      // Autoriser les lettres majuscules
    excludeSimilar: true, // Exclure les caractères similaires
};

  // Générer le mot de passe
const password = generatePassword.generate(passwordOptions);

  // Afficher le mot de passe dans la console
console.log('Mot de passe généré :', password);
}

// Appeler la fonction pour générer un mot de passe aléatoire
generateRandomPassword();
