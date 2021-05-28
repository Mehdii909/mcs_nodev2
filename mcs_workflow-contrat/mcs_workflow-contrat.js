var config = require('../config');
const axios = require('axios');

// creation du bon de preparation apres validation du contrat, task completed
function createBp(){
const client = config.client ;

client.subscribe('create-bp', async function ({ task, taskService }) {
    const idcontrat = task.variables.get('idcontrat');
    const idagence = task.variables.get('idagence');

    console.log(`IdContrat: ${idcontrat} valider`);
    
   // creation d'un BP a travers la bd php
    axios.post('http://localhost/back-mcs/web/bp', { idagence: idagence ,lignedepreparation: '45', idcontrat: idcontrat})
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.error(error)
  })

    await taskService.complete(task);
    });
}
module.exports.createBp = createBp;

    
function annulerContrat(){
    const client = config.client ;

    client.subscribe('annuler', async function ({ task, taskService }) {
        const idcontrat = task.variables.get('idcontrat');
        console.log(`Contrat annuler !! \n idContrat : ${idcontrat}`); 
         await taskService.complete(task);
    });
    
}
  
module.exports.annulerContrat = annulerContrat;
