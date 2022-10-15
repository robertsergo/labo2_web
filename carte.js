


function affichercarte(){
    document.querySelector("#afficher_pique").innerHTML = "";
    document.querySelector("#afficher_carreau").innerHTML = "";
    document.querySelector("#afficher_trefle").innerHTML = ""; 
    document.querySelector("#afficher_coeur").innerHTML = "";

    let list_pique = []
    let list_carreau = []
    let list_trefle = []
    let list_coeur = []

    let pique = document.querySelector(".pique").innerHTML
    let carreau = document.querySelector(".carreau").textContent
    let trefle = document.querySelector(".trefle").textContent
    let coeur = document.querySelector(".coeur").innerHTML

    for(let i = 1; i < 14; i++){
        let temp = i
        if (i===1){
            temp="A";
        }else if(i === 11){
            temp="J";
        }else if(i ===12){
            temp="Q";
        }else if(i===13){
            temp="K";
        }
        list_pique[i] = temp+pique    
        list_carreau[i] = temp+carreau  
        list_trefle[i] = temp+trefle    
        list_coeur[i] = temp+coeur     
    }//for
    
   
    for(let i = 1; i < list_pique.length; i++){ 
        document.querySelector("#afficher_pique").innerHTML += list_pique[i];
        document.querySelector("#afficher_carreau").innerHTML += list_carreau[i];
        document.querySelector("#afficher_trefle").innerHTML += list_trefle[i]; 
        document.querySelector("#afficher_coeur").innerHTML += list_coeur[i];       
    }    
    
        list_pique.length= 0;
        list_carreau.length= 0;
        list_trefle.length=0;
        list_coeur.length=0;         
}



function brasser() {
    let list_pique = []
    let list_carreau = []
    let list_trefle = []
    let list_coeur = []    
    let paquet = []
    let paquet1 = []
    let paquet2 = []
    let liste1 = []
    let liste2 = []
    let liste3 = []
    let liste4 = []
    let pique = document.querySelector(".pique").innerHTML
    let carreau = document.querySelector(".carreau").textContent
    let trefle = document.querySelector(".trefle").textContent
    let coeur = document.querySelector(".coeur").innerHTML
    
    for(let i = 1; i < 14; i++){
        let temp = i
        if (i===1){
            temp="A";
        }else if(i === 11){
            temp="J";
        }else if(i ===12){
            temp="Q";
        }else if(i===13){
            temp="K";
        }
        list_pique[i] = temp+pique        
        list_carreau[i] = temp+carreau        
        list_trefle[i] = temp+trefle        
        list_coeur[i] = temp+coeur     
       
    }
    
        paquet1 = list_carreau.concat(list_pique)
        paquet2 = list_coeur.concat(list_trefle)
        paquet = paquet1.concat(paquet2) 
         
    let demie = paquet.length/2
    for(let i = 0; i < paquet.length/2; i++){
        if(i % 2 ===0 && paquet[i] != undefined){
            liste1.push(paquet[i])

        }else if(i % 2 ===1 && paquet[i] != undefined){
            liste3.push(paquet[i])
        }         
    }
    for(let j = paquet.length/2; j<= paquet.length; j++){
        if(j % 2 ===0 && paquet[j] != undefined){
            liste2.push(paquet[j])
        }else if(j % 2 ===1 && paquet[j] != undefined){
            liste4.push(paquet[j])
        }        
    }

    document.querySelector("#afficher_pique").innerHTML = "";
    
    document.querySelector("#afficher_carreau").innerHTML = "";
    document.querySelector("#afficher_trefle").innerHTML = ""; 
    document.querySelector("#afficher_coeur").innerHTML = "";        
         
       
    for(let k = 1; k < liste1.length; k++){ 
        document.querySelector("#afficher_pique").innerHTML += liste1[k];
        document.querySelector("#afficher_carreau").innerHTML += liste2[k];
        document.querySelector("#afficher_trefle").innerHTML += liste3[k]; 
        document.querySelector("#afficher_coeur").innerHTML += liste4[k];
    }  
    
        list_pique.length= 0;
        list_carreau.length= 0;
        list_trefle.length=0;
        list_coeur.length=0;  
    
        liste1.length= 0;
        list2.length= 0;
        liste3.length=0;
        liste4.length=0;        

}//brasser