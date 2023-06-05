let boton = document.getElementById("accioar");
let input = document.getElementById("inputusuario");
let listafunc = document.querySelector("ul");

boton.addEventListener("click", function() {
    var nuevoli = document.createElement("li");
    var textoli = document.createTextNode(input.value);
    nuevoli.appendChild(textoli);
    listafunc.appendChild(nuevoli);
});