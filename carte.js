

let list_pique = []
let list_carreau = []
let list_trefle = []
let list_coeur = []
let list_carte = []
let paquet = []
let paquet1 = []
let paquet2 = []
let pique = document.querySelector(".pique").innerHTML
let carreau = document.querySelector(".carreau").textContent
let trefle = document.querySelector(".trefle").textContent
let coeur = document.querySelector(".coeur").innerHTML

for(let i = 1; i < 14; i++){
    let temp = String(i)
    if (i===1){
        temp="A";
    }else if(i === 11){
        temp="J";
    }else if(i ===12){
        temp="Q";
    }else if(i===13){
        temp="K";
    }
    list_pique[i] = temp+""+pique
    list_carte += list_pique[i] 
    list_carreau[i] = temp+""+carreau
    list_carte += list_carreau[i]
    list_trefle[i] = temp+""+trefle
    list_carte += list_trefle[i] 
    list_coeur[i] = temp+""+coeur
    list_carte += list_coeur[i]
   
}


function affichercarte(){

    /*
    let list_pique = []
    let list_carreau = []
    let list_trefle = []
    let list_coeur = []
    let pique = document.querySelector(".pique").innerHTML
    let carreau = document.querySelector(".carreau").textContent
    let trefle = document.querySelector(".trefle").textContent
    let coeur = document.querySelector(".coeur").innerHTML

    

    for(let i = 2; i < 14; i++){
        list_pique[i] = pique
        list_carreau[i] = carreau
        list_trefle[i] = trefle
        list_coeur[i] = coeur
    }
    */

   // document.querySelector("#ma_table").innerHTML = "<table>"
   // document.querySelector("#ma_ligne").innerHTML = "<tr>"

       
    
    for(let i = 1; i < list_pique.length; i++){ 

        document.querySelector("#afficher_pique").innerHTML += list_pique[i];
        document.querySelector("#afficher_carreau").innerHTML += list_carreau[i];
        document.querySelector("#afficher_trefle").innerHTML += list_trefle[i]; 
        document.querySelector("#afficher_coeur").innerHTML += list_coeur[i];       
    }   

    for(let i = 1; i < list_pique.length; i++){ 

        list_pique[i]= "";
        list_carreau[i]= "";
        list_trefle[i]= "";
        list_coeur[i]= "";      
    }   
    //("</tr>")

  // ("</table>")
}





function brasser() {
    //for(let i = 1; i < list_carreau.length; i++){  
       // document.getElementById("afficher_brasser").innerHTML = list_carte.length; 
        paquet1 = list_carreau.concat(list_pique)
        paquet2 = list_coeur.concat(list_trefle)
        paquet = paquet1.concat(paquet2)

    //}

    for(let i = 1; i < 52; i++){
        if(i ==13 || i == 26 || i == 39){
            document.createElement("</br>")        

        }      

        
        document.querySelector("#afficher_brasser").innerHTML += paquet[i];
       // document.querySelector("#afficher_trefle").innerHTML += ""; 
       // document.querySelector("#afficher_coeur").innerHTML += "";     
       
    }     

}