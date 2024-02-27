let canvas = document.getElementById("canvas")
if(canvas && canvas.getContext){
let ctx = canvas.getContext("2d") 
if(ctx){
    alert("Canvas aceptado")
}else{
    alert("Canvas no valido")
}
}
