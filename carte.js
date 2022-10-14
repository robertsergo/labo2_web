

let list_pique = []
let list_carreau = []
let list_trefle = []
let list_coeur = []
let list_carte = []
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

       
    //document.write("<table style='text-align:center'>")
    //document.write(" <tr>")

    for(let i = 1; i < 14; i++){ 
         
       // document.write("<td>") 

        document.querySelector("#afficher_pique").innerHTML += list_pique[i];
        document.querySelector("#afficher_carreau").innerHTML += list_carreau[i];
        document.querySelector("#afficher_trefle").innerHTML += list_trefle[i]; 
        document.querySelector("#afficher_coeur").innerHTML += list_coeur[i];          
        
       //document.write(" </td>")       
       
    }

    for(let i = 1; i < 14; i++){ 
       
        // document.querySelector("#afficher_carreau").innerHTML += list_carreau[i];             
        
     }
     for(let i = 1; i < 14; i++){ 
       
        //document.querySelector("#afficher_trefle").innerHTML += list_trefle[i];             
       
    }
    for(let i = 1; i < 14; i++){ 
       
       // document.querySelector("#afficher_coeur").innerHTML += list_coeur[i];             
       
    }
    //document.write(" </tr>")

    //document.write(" </table>")







        /* 
       document.write(" <td style='font-size: 10rem; background-color: powderblue;'>")
        document.write(i+""+list_pique[i]+"    "); 
        document.write(" </td>")
         */
   
   
        
/*
        document.write(" <td style='color:red; font-size: 10rem; background-color: powderblue;'>")
        document.write(i+""+list_carreau[i]+"    "); 
        document.write(" </td>") 
        document.write(" <td style='font-size: 10rem; background-color: powderblue;'>")
        document.write(i+""+list_trefle[i]+"    ");
        document.write(" </td>")
        document.write(" <td style='font-size: 10rem; color:red; background-color: powderblue; '>")
        document.write(i+""+list_coeur[i]+"    "); 
        document.write(" </td>")
        //document.write("<br/>"); 
        document.write(" </tr>")          
        
    }
    */
   
}





function myFunction() {
    document.getElementById("afficher").innerHTML = "Hello World";
}