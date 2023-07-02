const cajaPadre = document.getElementById("all_container-cajitas");

cajaPadre.addEventListener("click", function(event) {
  if (event.target.classList.contains("regalitos")) {
    const cajaHija = event.target;
    cajaHija.classList.toggle("nueva-clase");
  }
});

let caja = document.getElementById('epa');
function epaa(){
    caja.classList.add('sisas');
}