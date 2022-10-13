
function affichercarte(){
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
       /*
    document.write("<table style='text-align:center'>")    
    for(let i = 2; i < list_pique.length; i++){  
        document.write(" <tr>")         
       document.write(" <td style='font-size: 5rem; background-color: powderblue;'>")
        document.write(i+""+list_pique[i]+"    "); 
        document.write(" </td>")        

        document.write(" <td style='color:red; font-size: 5rem; background-color: powderblue;'>")
        document.write(i+""+list_carreau[i]+"    "); 
        document.write(" </td>") 

        document.write(" <td style='font-size: 5rem; background-color: powderblue;'>")
        document.write(i+""+list_trefle[i]+"    ");
        document.write(" </td>")

        document.write(" <td style='font-size: 5rem; color:red; background-color: powderblue; '>")
        document.write(i+""+list_coeur[i]+"    "); 
        document.write(" </td>")
        //document.write("<br/>"); 
        document.write(" </tr>")        
    }
    
    document.write(" </table>")
    */

    document.write("<table style='text-align:center'>") 
    document.write(" <tr>") 
    for(let i = 2; i < list_carreau.length; i++){
       
        document.write("<td>")
        //document.getElementById("afficher").innerHTML = list_carreau[i];
        document.getElementById("afficher").innerHTML = i;
        document.write("<td>")            

    }
    document.write(" </tr>") 
    document.write(" </table>")
           
                 
        
}






/*

function myFunction() {
    document.getElementById("afficher").innerHTML = "Hello World";
}
*/