const pantalla = document.querySelector(".pantalla"); //el queryselector es para traer del html al archivo js
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click" , () => {
        const botonClick = boton.textContent; //LO QUE EL USUARIO DIGITA EN LA ETIQUETA HTML QUE SE LLAMA boton, lo convierto 
        //en una variable que se llama botonClick
        //VALIDACION DE RUTAS 
    
        if (boton.id === "limpiar"){
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar"){
            if (pantalla.textContent.length ===1 || pantalla.textContent === "¡ERROR!") {
                pantalla.textContent = "0";
            } else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }

            return;
        }
        if (boton.id === "igual") {
            try {
                const expresion = pantalla.textContent;
                if (expresion.includes("//")){
                    pantalla.textContent = "¡ERROR!";
                } else {
                    //VALIDACION DEL SIGNO SELECCIONADO
                pantalla.textContent = eval(expresion);
            }
            } catch (error){
                pantalla.textContent = "¡ERROR!";
            }
            return;
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "¡ERROR!"){ //LA PANTALLA INICIA EN 0
            pantalla.textContent = botonClick; //le digo que me remplaze pantalla por botonclick que es lo que digito el usuario
        } else {
            pantalla.textContent += botonClick
        }
        
        
    })
})