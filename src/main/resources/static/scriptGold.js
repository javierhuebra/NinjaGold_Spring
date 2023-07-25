import { formatQuant } from "./helpers.js";

console.log("Js vinculado")

//Manejar la solicitud del formulario granja
document.getElementById('granja_form').addEventListener('submit', function (event) {
    event.preventDefault();
    fetch('/actions/granja', {
      method: 'POST'
    })
    .then(response => response.json())//La respuesta viene en formato json que es objeto parece,no viene "stringificado", reforzar esto
    .then(data => {
        console.log("De granja viene este dato: ",data)

        document.querySelector(".oroExistente").textContent = formatQuant(data.goldExistente)

        let parrafo = document.createElement("P") //Se crea un parrafo para guardar la info

        parrafo.innerHTML = `<span class="granja_log">En la granja ha obtenido:</span> ${ formatQuant(data.goldValue)} de oro y su cuenta al día de la fecha tiene <span class="dinero"> ${formatQuant(data.goldExistente)}</span> [${data.date}]` //Se le modifica el contenido de texto al parrafo

        parrafo.classList.add("adicion"); //Se le agrega la clase
        
        //console.log(parrafo)

        document.getElementById('respuesta_div').insertAdjacentElement("afterbegin",parrafo) // Actualiza el contenido del div con la respuesta recibida 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

//Manejar la solicitud del formulario cueva
document.getElementById('cueva_form').addEventListener('submit', function (event) {
  event.preventDefault();
  fetch('/actions/cueva', {
    method: 'POST'
  })
  .then(response => response.json())//La respuesta viene en formato json que es objeto parece,no viene "stringificado", reforzar esto
  .then(data => {
      console.log("De cueva viene este dato: ",data)

      document.querySelector(".oroExistente").textContent = formatQuant(data.goldExistente)

      let parrafo = document.createElement("P") //Se crea un parrafo para guardar la info

      parrafo.innerHTML = `<span class="cueva_log">En la cueva ha obtenido:</span> ${formatQuant(data.goldValue)} de oro y su cuenta al día de la fecha tiene <span class="dinero"> ${formatQuant(data.goldExistente)}</span> [${data.date}]` //Se le modifica el contenido de texto al parrafo

      parrafo.classList.add("adicion"); //Se le agrega la clase
      
      //console.log(parrafo)

      document.getElementById('respuesta_div').insertAdjacentElement("afterbegin",parrafo)// Actualiza el contenido del div con la respuesta recibida 
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

//Manejar la solicitud del formulario casa
document.getElementById('casa_form').addEventListener('submit', function (event) {
  event.preventDefault();
  fetch('/actions/casa', {
    method: 'POST'
  })
  .then(response => response.json())//La respuesta viene en formato json que es objeto parece,no viene "stringificado", reforzar esto
  .then(data => {
      console.log("De casa viene este dato: ",data)

      document.querySelector(".oroExistente").textContent = formatQuant(data.goldExistente)

      let parrafo = document.createElement("P") //Se crea un parrafo para guardar la info

      parrafo.innerHTML = `<span class="casa_log">En la casa ha obtenido:</span> ${formatQuant(data.goldValue)} de oro y su cuenta al día de la fecha tiene <span class="dinero"> ${formatQuant(data.goldExistente)}</span> [${data.date}]` //Se le modifica el contenido de texto al parrafo

      parrafo.classList.add("adicion"); //Se le agrega la clase
      
      //console.log(parrafo)

      document.getElementById('respuesta_div').insertAdjacentElement("afterbegin",parrafo) // Actualiza el contenido del div con la respuesta recibida 
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

//Manejar la solicitud del formulario casino
document.getElementById('casino_form').addEventListener('submit', function (event) {
  event.preventDefault();
  fetch('/actions/casino', {
    method: 'POST'
  })
  .then(response => response.json())//La respuesta viene en formato json que es objeto parece,no viene "stringificado", reforzar esto
  .then(data => {
      console.log("De casino viene este dato: ",data)

      document.querySelector(".oroExistente").textContent = formatQuant(data.goldExistente)

      let parrafo = document.createElement("P") //Se crea un parrafo para guardar la info
      if(data.goldValue < 0){
        parrafo.classList.add("sustraccion"); //Se le agrega la clase
      }else{
        parrafo.classList.add("adicion"); //Se le agrega la clase
      }
      parrafo.innerHTML = `<span class="casino_log">En el casino ha obtenido:</span> ${formatQuant(data.goldValue)} de oro y su cuenta al día de la fecha tiene <span class="dinero"> ${formatQuant(data.goldExistente)}</span> [${data.date}]` //Se le modifica el contenido de texto al parrafo

      //console.log(parrafo)

      document.getElementById('respuesta_div').insertAdjacentElement("afterbegin",parrafo) // Actualiza el contenido del div con la respuesta recibida 
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

//Manejar la solicitud del formulario spa
document.getElementById('spa_form').addEventListener('submit', function (event) {
  event.preventDefault();
  fetch('/actions/spa', {
    method: 'POST'
  })
  .then(response => response.json())//La respuesta viene en formato json que es objeto parece,no viene "stringificado", reforzar esto
  .then(data => {
      console.log("De spa viene este dato: ",data)

      document.querySelector(".oroExistente").textContent = formatQuant(data.goldExistente)

      let parrafo = document.createElement("P") //Se crea un parrafo para guardar la info
      
      parrafo.classList.add("sustraccion"); //Se le agrega la clase

      parrafo.innerHTML = `<span class="spa_log">En el spa ha gastado:</span> ${formatQuant(data.goldValue)} de oro y su cuenta al día de la fecha tiene <span class="dinero"> ${formatQuant(data.goldExistente)}</span> [${data.date}]` //Se le modifica el contenido de texto al parrafo

      //console.log(parrafo)

      document.getElementById('respuesta_div').insertAdjacentElement("afterbegin",parrafo) // Actualiza el contenido del div con la respuesta recibida 
  })
  .catch(error => {
    console.error('Error:', error);
  });
});