alert('Ciao!');
var nome = prompt('Come ti chiami?');
var cognome = prompt('E il tuo cognome?');
var colore = prompt('Qual è il tuo colore preferito?');
var password = nome + cognome + colore + 19;
document.getElementById('pwd').innerHTML = 'La tua password è: ' + password + '... Usala a tuo rishio e pericolo.';
