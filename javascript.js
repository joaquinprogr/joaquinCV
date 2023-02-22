document.getElementById('boton').onclick = function(){
    document.getElementById("empresa").innerHTML = "Empresa (2018)";
    document.getElementById("ayudante").innerHTML = "AYUDANTE GENERAL";
    document.getElementById("texto").innerHTML = "Atencion al cliente, trabajo bajo presion, <br> resolucion de problemas ";
}
document.getElementById('boton').addEventListener('click',function(){
    document.getElementById('boton').style.display = "none";

});