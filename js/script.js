// scrivere una lista mail
// fai inserire mail utente
// controlla se la mail è nella lista invitati
// permetti accesso se ne fa parte
// altrimenti non permettere accesso

var databaseEmail = ["mrsflv87e48g958e@mailstop.it", "bgndmz88e09i695s@mailstop.it", "trrdrt30c63i639l@mailstop.it", "plmcgr83t18g343q@mailstop.it", "cngsdr69d69d393d@mailstop.it", "srrlra82d68g532g@mailstop.it", "rslguo37b25e343n@mailstop.it", "ngrcsr89t22f172b@mailstop.it", "cleddr97h20h842f@mailstop.it"]
// console.log(databaseEmail);

var emailUtente = prompt("Inserisci la tua mail");
// console.log(emailUtente);

if (isNaN(emailUtente)) {
  for (var i = 0; i < databaseEmail.length; i++) {
    if (databaseEmail[i] == emailUtente) {
      var corrispondenza = databaseEmail[i];
    }
  }

  if (corrispondenza != undefined) {
    console.log("Sei nella lista degli invitati. Prego puoi entrare.");
  } else {
    console.log("Non ti sei ancora registrato. Devi essere nella lista per poter entrare alla festa");
  }

} else {
  console.log("Inserire un' E-mail valida");
}
