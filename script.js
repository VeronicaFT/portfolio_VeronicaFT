// Puedes añadir aquí funciones JS para mostrar proyectos dinámicamente o mejorar la interacción

// Array de proyectos: cada objeto representa un proyecto con título, descripción y enlace
// Puedes añadir aquí funciones JS para mostrar proyectos dinámicamente o mejorar la interacción

// Array de proyectos: cada objeto representa un proyecto con título, descripción y enlace
const projects = [
    {
        id: 'singluten-go',
        title: "SinGluten&GO", //título del proyecto
        description: "SinGluten&Go es una aplicación web diseñada para ayudar a personas con enfermedad celíaca o sensibilidad al gluten a encontrar establecimientos que ofrezcan comida sin gluten de forma segura.", // Breve descripción
        link: "https://github.com/VeronicaFT/SinGluten-Go", // Enlace al proyecto 
        logo: "assets/logo-app.png"
    },
    {
        id: 'quien-es-quien',
        title: "Quién es Quién", //título del proyecto
        description: "Adaptación interactiva del clásico juego “¿Quién es quién?”, donde el usuario debe adivinar el personaje aplicando lógica y observación.", // Breve descripción
        link: "https://github.com/VeronicaFT/quien-es-quien", // Enlace al proyecto
        logo: "assets/logo-quien-es-quien.png"
    },

    {
    id:'mi_portfolio',
    title: "Mi Portfolio", //título del proyecto
    description: "Este portfolio personal donde se muestra un poco mi trayectoria como desarrolladora web",
    link: "",
    logo:"assets/logoVFT.png"
    }

];

// Cuando la página termina de cargar, se ejecuta esta función
window.onload = function() {
    // Selecciona el contenedor donde se mostrarán los proyectos
    const projectList = document.getElementById('project-list');
    // Recorre el array de proyectos y crea una tarjeta para cada uno
    projects.forEach(project => {
        // Crea un div para la columna de Bootstrap
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';
        // Preferir el logo definido en el objeto del proyecto
          let logoImg = '';
          if (project.logo) {
            // si el usuario ya puso project.logo, usamos la ruta relativa dentro del proyecto
            // añadimos una clase específica por proyecto: project-{id}
            logoImg = `<img src="${project.logo}" alt="Logo ${project.title}" class="project-logo project-${project.id} mb-3">`;
        } else {
            // Fallback: detección por título (legacy) con rutas relativas en assets/
            if (project.title.toLowerCase().includes('singluten&go')) {
                logoImg = `<img src="assets/logo app.png" alt="Logo SinGluten&Go" class="project-logo project-${project.id} mb-3">`;
            }
            if (project.title.toLowerCase().includes('quién es quién')) {
                logoImg = `<img src="assets/logo-quien-es-quien.png" alt="Logo quien-es-quien" class="project-logo project-${project.id} mb-3">`;
            }
        }


        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body text-center">
                    ${logoImg}
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.link}" class="btn btn-primary" target="_blank">Ver más</a>
                </div>
            </div>
        `;
        // Añade la tarjeta al contenedor de proyectos
        projectList.appendChild(col);
    });

    // Script para mostrar mensaje de confirmación tras enviar el formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    document.getElementById('formSuccess').style.display = 'block';
                } else {
                    response.json().then(data => {
                        alert(data.error || 'Hubo un error al enviar el mensaje.');
                    });
                }
            })
            .catch(() => {
                alert('Hubo un error al enviar el mensaje.');
            });
        });
    }

    
};
