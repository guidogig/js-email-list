///////////////////////// PROVA CON FETCH API /////////////////////////

/* let arrResp = [];

for (let i = 0; i < 3; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(response => response.json())
      .then(data => {
          // codice per far qualcosa con la risposta
          console.log(data);
          arrResp.push(data.response);
          
      })
      .catch(error => {
          // codice da eseguire in caso di errore
        console.error(error);
      });
};

console.log('QUESTO É arrResp:', arrResp); */

///////////////////////// QUI CON AXIOS /////////////////////////

axios.get('https://flynn.boolean.careers/exercises/api/random/boolean')
 .then(response => {
   //codice da eseguire in caso di successo
   const result = response.data;
 })
.catch(error => {
  // codice da eseguire in caso di errore
  console.error(error)
})
.finally(() => {
  // codice da eserguire a prescindere dall'esito
  // (ad esempio si può fermare un loader!)
})
