function abrir(img){
 
document.getElementById('modal').style.display="flex";
document.getElementById('imgGrande').src=img.src;

}
function cerrar(){
document.getElementById('modal').style.display="none";
}
// para poner modo claro y oscuro
const logo = document.getElementById("logo");
function cambiar(){
    //busca el body y le asigna una clase o
    //le quita la clase(toggle)
    document.body.classList.toggle("dark");
    // asignar a la memoria la preferencia
    if(document.body.classList.contains("dark")){
        localStorage.setItem("tema","oscuro");
       logo.src = "img/oscuro.jpeg";
    }else{
        localStorage.setItem("tema","claro");
         logo.src = "img/claro.jpeg";
    }
    cambiar_nombre();
}

cambiar_nombre();

if(localStorage.getItem("tema") === "oscuro"){
   document.body.classList.add("dark");
     logo.src = "img/oscuro.jpeg";
}
if(localStorage.getItem("tema") === "claro"){
   document.body.classList.add("claro");
    logo.src = "img/claro.jpeg";
}

function cambiar_nombre(){
    if(document.body.classList.contains("dark")){
        document.getElementById('btn').innerText="Modo claro ";

       
    }else{
        document.getElementById('btn').innerText="Modo oscuro ";
    }
}
