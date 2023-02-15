const clickUpbt = e => {
    e.preventDefault();
    const divMove = e.target.closest(".bloque");/*el div que contiene el boton que pulsamos*/
    const divPrev = divMove.previousElementSibling;/*el div anterior*/
    if(! divPrev) return;/* si es un error, osea no hay anterior para*/
    divMove.parentNode.insertBefore(divPrev, divMove);/*Intercambio los 2 div*/
    console.log(divMove);
    console.log(divPrev);
};


const clickDownbt = e => {
    e.preventDefault();
    const divMove = e.target.closest(".bloque");/*el div que contiene el boton que pulsamos*/
    const divpost = divMove.nextElementSibling;/*el div posterior*/
    if(! divpost) return;/* si es un error, osea no hay posterior para*/
    divMove.parentNode.insertBefore(divpost, divMove);/*Intercambio los 2 div*/
    console.log(divMove);
    console.log(divpost);



};



const btnsUp = D.queryAll(".btn-up");
const btnsDown = D.queryAll(".btn-down");

btnsUp.forEach(element => {
    element.addEventListener("click", clickUpbt);
});


btnsDown.forEach(element => {
    element.addEventListener("click", clickDownbt);
});


