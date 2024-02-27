// llamar a los compotentes

let canvas = document.getElementById("canvas")

function introduccionCanvas(){
    if(canvas && canvas.getContext){
        ctx = canvas.getContext("2d")
        if(ctx){
            alert("Canvas si soportado")
        }else{
            alert("Canvas no soportado")
        }
    }
    
}
window.onload= introduccionCanvas