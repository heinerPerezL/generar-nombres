 document.getElementById('generar').addEventListener('submit', function(e){
  
    e.preventDefault();

    const origenNombre = document.getElementById('pais');
    const optionNombre = origenNombre.options[origenNombre.selectedIndex].value;

    const genero = document.getElementById('genero');
    const sltGenero = genero.options[genero.selectedIndex].value;

    const cantNombres = document.getElementById('cantNombres').value;
    

    

    let url = '';

    url += 'http://uinames.com/api/?';

    if(optionNombre !== ''){

        url+= `region=${optionNombre}&`;
    }

    if(sltGenero !== ''){
        url+= `gender=${sltGenero}&`;
    }
    if(cantNombres !== ''){
        url+= `amount=${cantNombres}`;
    }

    //conectamos con ajax
     
    const xhr = new XMLHttpRequest();

    //abrir conexion
    xhr.open('GET', url, true);
    //cargar e imprimir
    xhr.onload = function(){
       
        let nombres = '<h2>Nombres Generados</h2>';
        const repuesta = JSON.parse(this.responseText);
        nombres+= '<ul>';

        repuesta.forEach(r => {
           
            nombres+= `<li> ${r.name}</li>`;
            
            
        });

        nombres+= '</ul>';

        document.getElementById('listado').innerHTML=nombres;

    }
    // enviar la peticion

    xhr.send();
});