
let list_pique = []
let list_carreau = []
let list_trefle = []
let list_coeur = []
let paquet1 = []
let paquet2 = []
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
*/
    
/*
    for(let i = 2; i < 14; i++){
        list_pique[i] = pique
        list_carreau[i] = carreau
        list_trefle[i] = trefle
        list_coeur[i] = coeur
    }

*/
     
    document.write("<table style='text-align:center'>")    
    for(let i = 2; i < list_pique.length; i++){  
        document.write(" <tr>")         
       document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+list_pique[i]+"    "); 
        document.write(" </td>")        

        document.write(" <td style='color:red; font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+list_carreau[i]+"    "); 
        document.write(" </td>") 

        document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+list_trefle[i]+"    ");
        document.write(" </td>")

        document.write(" <td style='font-size: 2rem; color:red; background-color: powderblue; '>")
        document.write(i+""+list_coeur[i]+"    "); 
        document.write(" </td>")
        //document.write("<br/>"); 
        document.write(" </tr>")        
    }
    
    document.write(" </table>")                
        
}//fonction








function  brasser_carte(){

    for(let i = 2; i < 14; i++){
        if(i % 2 === 0){
            list_pique[i] = list_carreau[i]
            list_carreau[i] = list_trefle[i]
            list_trefle[i] = list_coeur[i] 
            list_coeur[i] = list_trefle[i]
        }        
    }

    document.write("<table style='text-align:center'>")    
    for(let i = 2; i < list_pique.length; i++){  
        document.write(" <tr>")         
       document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+list_pique[i]+"    "); 
        document.write(" </td>")        

        document.write(" <td style='color:red; font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+list_carreau[i]+"    "); 
        document.write(" </td>") 

        document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+list_trefle[i]+"    ");
        document.write(" </td>")

        document.write(" <td style='font-size: 2rem; color:red; background-color: powderblue; '>")
        document.write(i+""+list_coeur[i]+"    "); 
        document.write(" </td>")
        //document.write("<br/>"); 
        document.write(" </tr>")        
    }
    
    document.write(" </table>")              



   // document.getElementById("afficher").innerHTML = "Hello World";
}//fonction


function  couper_carte(){
    //let paquet1 = []
    //let paquet2 = []

    for(let i = 2; i < 14; i++){
        if(i % 2 == 0){
            paquet1[i] = list_carreau[i]
            paquet2[i] = list_trefle[i]
            
        } else{
            paquet2[i] = list_pique[i]
            paquet1[i] = list_coeur[i]
        }       
    }

    document.write("<table style='text-align:center'>")    
    for(let i = 2; i < 14; i++){  
        document.write(" <tr>")         
       document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+paquet1[i]+"    "); 
        document.write(" </td>")        

        document.write(" <td style='color:red; font-size: 2rem; background-color: powderblue;'>")
        document.write(i+""+paquet2[i]+"    "); 
        document.write(" </td>") 

        
        //document.write("<br/>"); 
        document.write(" </tr>")        
    }
    
    document.write(" </table>")   

}





