const fs = require('fs');                                       //require the file system

fs.writeFile('welcome.txt', 'Hello Node', (err) => {           //creating file named welkom.txt and fill it with Hello Node
if (err) throw err;                                            //if there is error the program will stop and cosole.log the error
console.log('Le fichier welcome.txt a été créé avec succès!');
});


fs.readFile('welcome.txt', 'utf8', (err, data) => {            //read welkom.text from the fs
    if (err) throw err;                                        
    console.log('Contenu de welcome.txt :');
    console.log(data);                                         //console.log data = Hello Node
});
