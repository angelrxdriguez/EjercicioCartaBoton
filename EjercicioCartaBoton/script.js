$(document).ready(() => {
    let contadorId = 1; 

    const personas = [
        {
            id: contadorId++,
            nombre: "Juan",
            apellidos: "García Pérez",
            descripcion: "juan juanito juan, juanito el golondrina amigo de los gallos y de las gallinas",
            imagen: "juan.jpg"
        },
        {
            id: contadorId++,
            nombre: "Maria",
            apellidos: "López Sánchez",
            descripcion: "Mari Carmen, Mari Carmen, tuuuuu hijo esta en el afterhour",
            imagen: "maria.jpg"
        },
        {
            id: contadorId++,
            nombre: "Carlos",
            apellidos: "Martínez Rodríguez",
            descripcion: "Carlos el de los ,,,, que no tio estas loco o que",
            imagen: "persona.png"
        }
    ];

    const listaPersonas = $('#lista-personas');

    function renderizarPersonas() {
        listaPersonas.empty();
        for (let i = 0; i < personas.length; i++) {
            const persona = personas[i];
            const elementoPersona = $('<div class="persona">');
            elementoPersona.attr('data-id', persona.id);
            elementoPersona.append('<img src="' + persona.imagen + '" class="imgC">');
            elementoPersona.append('<h2>' + persona.nombre + ' ' + persona.apellidos + '</h2>');
            elementoPersona.append('<p>' + persona.descripcion + '</p>');
            elementoPersona.append('<button class="btnC">SUPRIMIR</button>');
            listaPersonas.append(elementoPersona);
        }
    }

    function filtrarPersonas(termino) {
        listaPersonas.find('.persona').each(function() {
            const nombrePersona = $(this).find('h2').text();
            if (nombrePersona.toLowerCase().includes(termino.toLowerCase())) {
                $(this).show(); 
            } else {
                $(this).hide(); 
            }
        });
    }

    $('#textoInput').on('input', function() {
        const terminoBusqueda = $(this).val();
        filtrarPersonas(terminoBusqueda);
    });

    $('#btnA').on('click', function() {
        $('#formulario').toggle();
    });

    $('#btnAceptar').on('click', function() {
        const nuevaPersona = {
            id: contadorId++,
            imagen: $('#fotoInput').val(),
            nombre: $('#nombreInput').val(),
            apellidos: $('#apellidosInput').val(),
            descripcion: $('#descripcionInput').val()
        };
        personas.push(nuevaPersona);
        renderizarPersonas();
        $('#formulario').hide();
        $('#fotoInput').val('');
        $('#nombreInput').val('');
        $('#apellidosInput').val('');
        $('#descripcionInput').val('');
    });

    listaPersonas.on('click', '.btnC', function() {
        const idPersona = $(this).closest('.persona').data('id');
        const indice = personas.findIndex(persona => persona.id === idPersona);
        if (indice !== -1) {
            personas.splice(indice, 1);
            renderizarPersonas();
        }
    });

    renderizarPersonas();
});
