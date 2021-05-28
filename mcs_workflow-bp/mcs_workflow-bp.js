var config = require('../config');

function notifierBE () { 
    const client = config.client ;
    
    client.subscribe('notifier', async function ({ task, taskService }) {
        const idcontrat = task.variables.get('idcontrat');
        const idBonPre = task.variables.get('idprep');
 
        //variables.set("notification", { idContrat: idContrat, idBonPre: idBonPre });

        console.log(`Idprep : ${idBonPre} \n en attente de la validation de BL idBonLivraison: LIV${idBonPre}`);
       // console.log(variables.getTyped("notification").value);

        await taskService.complete(task);
    });
};

module.exports.notifierBE = notifierBE;
    
/*
function creeBonLiv(){
    const client = config.client ;

    client.subscribe('bonLiv', async function ({ task, taskService }) {
        const idBonLiv = task.variables.get('idBonLiv');

        console.log(`Bon de livraison crée !! \n idBonLiv : ${idBonLiv}`); 

        await taskService.complete(task);
    });
}
  
module.exports.creeBonLiv = creeBonLiv;*/


function livraison(){
    const client = config.client ;

    client.subscribe('livraison', async function ({ task, taskService }) {
        const livraison = task.variables.get('idlivraison');

           console.log(`livrée !! \n idLiv : ${livraison}`); 

        await taskService.complete(task);
    });
}
module.exports.livraison = livraison;