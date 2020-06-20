function cambios() {
    let caja = document.getElementById("primeraCaja");
    let parrafo = document.getElementById("primerParrafo");

    let caja2 = document.getElementById("segundaCaja");
    let parrafo2 = document.getElementById("segundoParrafo");

    let caja3 = document.getElementById("terceraCaja");
    let parrafo3 = document.getElementById("tercerParrafo");


    caja.addEventListener("click", () => {
        parrafo.classList.toggle("apareceParrafo");
        parrafo2.classList.remove("apareceParrafo");
        parrafo3.classList.remove("apareceParrafo");
    });

    caja2.addEventListener("click", () => {
        parrafo.classList.remove("apareceParrafo");
        parrafo2.classList.toggle("apareceParrafo");
        parrafo3.classList.remove("apareceParrafo");
    });

    caja3.addEventListener("click", () => {
        parrafo.classList.remove("apareceParrafo");
        parrafo2.classList.remove("apareceParrafo");
        parrafo3.classList.toggle("apareceParrafo");
    })

}

cambios()