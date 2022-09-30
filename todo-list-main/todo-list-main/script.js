//tomamos los elementos
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

//variable que lleva la cantidad de tareas
var total = 0;


function AsignaEle(param) {
        console.log(param);
        //tomamos el valor del campo
        var elemento = param;
        console.log(elemento);
        //creo un elemento li
        var li = document.createElement("li");
        li.textContent = param;
        //egrego el li al listado
        listado.appendChild(li);
        //incremento la cantidad de tareas
        total++;
        cantidad.innerHTML = total;
    
        //Agregamos el boton eliminar a cada elemento del listado
        var btnEliminar = document.createElement("span");
        btnEliminar.textContent = "\u00d7";
        li.appendChild(btnEliminar);
    
    
        //Agregamos la funcionalidad que elimina del listado el elemento
        btnEliminar.onclick = function() {
            li.remove();
            total--;
            cantidad.innerHTML = total;
        }
    
    
}


