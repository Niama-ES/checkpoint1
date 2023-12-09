const nodemailer = require('nodemailer');

// Configurer le transporteur (SMTP)
const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'votre_email@gmail.com', // Remplacez par votre adresse email Gmail
    pass: 'votre_mot_de_passe',    // Remplacez par votre mot de passe Gmail
},
});

// Options pour l'email
const mailOptions = {
  from: 'votre_email@gmail.com', // Adresse email de l'expéditeur
  to: 'destination@example.com',  // Adresse email du destinataire
subject: 'Test d\'envoi d\'email avec Node.js',
text: 'Ceci est un test d\'envoi d\'email avec Node.js.',
};

// Envoyer l'email
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
} else {
    console.log('Email envoyé avec succès:', info.response);
}
});
