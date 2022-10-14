
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
    temp = String(i)
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
*/
    
/*
    for(let i = 1; i < 14; i++){
        list_pique[i] = pique
        list_carreau[i] = carreau
        list_trefle[i] = trefle
        list_coeur[i] = coeur
    }

*/




     
    document.write("<table style='text-align:center'>")
    //for (j=0; j<4; j++){
        document.write(" <tr>")   
        
   // }
   
    
    for(let i = 1; i < list_pique.length; i++){  
        //  document.write(list_carte[i]+"    "); 
               
       document.write(" <td style='font-size: 3rem; background-color: powderblue;'>")
        document.write(list_pique[i]+"    "); 
        document.write(" </td>") 
        document.write("<br/>");         
        
    } 
    document.write(" <tr>")  

    for(let i = 1; i < list_carreau.length; i++){ 
        document.write(" <td style='color:red; font-size: 3rem; background-color: powderblue;'>")
        document.write(list_carreau[i]+"    "); 
        document.write(" </td>") 

    } 
    document.write(" <tr>") 

    for(let i = 1; i < list_trefle.length; i++){ 
        document.write(" <td style='font-size: 3rem; background-color: powderblue;'>")
        document.write(list_trefle[i]+"    ");
        document.write(" </td>")

    }
    document.write(" <tr>") 
    for(let i = 1; i < list_trefle.length; i++){
         document.write(" <td style='font-size: 3rem; color:red; background-color: powderblue; '>")
         document.write(list_coeur[i]+"    "); 
         document.write(" </td>")

     }

        //document.write(" <td style='color:red; font-size: 3rem; background-color: powderblue;'>")
        //document.write(list_carreau[i]+"    "); 
        //document.write(" </td>") 

       // document.write(" <td style='font-size: 3rem; background-color: powderblue;'>")
        //document.write(list_trefle[i]+"    ");
        //document.write(" </td>")
     //   for(let i = 1; i < list_pique.length; i++){  

       // document.write(" <td style='font-size: 3rem; color:red; background-color: powderblue; '>")
       // document.write(list_coeur[i]+"    "); 
       // document.write(" </td>")
       // document.write("<br/>"); 
       // document.write(" </tr>")        
   // }//i
    
    
    document.write(" </table>")                
        
}//fonction








function  brasser_carte(){

    for(let i = 1; i < 14; i++){
        if(i % 2 === 0){
            list_pique[i] = list_carreau[i]
            list_carreau[i] = list_trefle[i]
            list_trefle[i] = list_coeur[i] 
            list_coeur[i] = list_trefle[i]
        }        
    }

    document.write("<table style='text-align:center'>")    
    for(let i = 1; i < list_pique.length; i++){  
        document.write(" <tr>")         
       document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(list_pique[i]+"    "); 
        document.write(" </td>")        

        document.write(" <td style='color:red; font-size: 2rem; background-color: powderblue;'>")
        document.write(list_carreau[i]+"    "); 
        document.write(" </td>") 

        document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(list_trefle[i]+"    ");
        document.write(" </td>")

        document.write(" <td style='font-size: 2rem; color:red; background-color: powderblue; '>")
        document.write(list_coeur[i]+"    "); 
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

    for(let i = 1; i < 14; i++){
        if(i % 2 == 0){
            paquet1.push(list_carreau[i])
            paquet2.push(list_trefle[i])
            
        } else{
            paquet2.push(list_pique[i])
            paquet1.push(list_coeur[i]) 
        }       
    }

    document.write("<table style='text-align:center'>")    
    for(let i = 0; i < paquet1.length ; i++){  
        document.write(" <tr>")         
       document.write(" <td style='font-size: 2rem; background-color: powderblue;'>")
        document.write(paquet1[i]+"    "); 
        document.write(" </td>")        

        document.write(" <td style='color:red; font-size: 2rem; background-color: powderblue;'>")
        document.write(paquet2[i]+"    "); 
        document.write(" </td>") 

        
        //document.write("<br/>"); 
        document.write(" </tr>")        
    }
    
    document.write(" </table>")   

}

function aff(){
    document.getElementById("afficher").innerHTML = affichercarte().innerHTML;

}





