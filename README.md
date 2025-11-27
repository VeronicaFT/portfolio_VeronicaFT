# Portfolio de Verónica Flores Torralba 💻✨

Bienvenido/a a mi portfolio web.  
Aquí recojo mi trayectoria como **Desarrolladora Web Junior**, mis proyectos más representativos y una vía de contacto profesional.
Este portfolio está desarrollado con HTML, CSS, JavaScript y Bootstrap, y funciona como carta de presentación pública para mostrar quién soy y qué puedo aportar como profesional del desarrollo web.

---

## 🎯 Objetivo del sitio

Mi portfolio está diseñado para:

- Presentarme como desarrolladora web.
- Mostrar mis proyectos más relevantes (Frontend + Backend).
- Resumir mi formación y experiencia.
- Facilitar que empresas y profesionales puedan contactar conmigo.
- Servir como plataforma viva donde ir añadiendo nuevos proyectos.

---

## 🧩 Secciones principales del Portfolio

El sitio está dividido en varias secciones visibles desde la navbar:

### 🏠 **Inicio** (`#about`)
- Presentación personal.
- Animación con doble imagen (avatar y foto real) usando efecto "flip".
- Mensaje breve de quién soy y qué hago.

### 👩‍💻 **Sobre mí** (`#sobremi`)
- Sección explicativa donde cuento mi perfil profesional.
- Qué tecnologías domino.
- Qué me motiva como desarrolladora.
- Imagen decorativa asociada a la sección.

### 🎓 **Formación y experiencia** (`#formacion`)
- Formación en Desarrollo de Aplicaciones Web (DAW).
  - Centro: IFES Fomento Ocupacional.
  - Periodo: 2023–2025.
- Prácticas como Desarrolladora Fullstack en Soltel Group.
  - Trabajo con Angular, Spring Boot, MySQL y Git.
  - Participación en un proyecto real (ELEX).
- Enlace directo para descargar mi CV en PDF.
- Sección visualmente destacada con tarjetas temáticas personalizadas.

### 🧪 **Proyectos** (`#projects`)
Los proyectos se cargan dinámicamente desde el archivo `script.js`, donde se gestionan mediante un array JavaScript:

Tres proyectos principales:

1. **SinGluten&GO**  
   Aplicación web fullstack para personas celíacas.  
   *Incluye backend en Spring Boot y frontend en Angular.*

2. **Quién es Quién**  
   Versión web del clásico juego “¿Quién es quién?”, hecha con Angular.

3. **Mi Portfolio**  
   Este propio sitio, mostrado como ejemplo de diseño y desarrollo web.

Cada proyecto genera automáticamente:
- Tarjeta responsive con imagen/logo  
- Título  
- Descripción  
- Enlace al repositorio correspondiente  

Gracias al script, puedes añadir más proyectos fácilmente.

### 📬 **Contacto** (`#contact`)
- Tarjeta estilizada con enlaces a mis redes (GitHub y LinkedIn).
- Formulario funcional conectado mediante **Formspree**:
  - Campo de email
  - Campo de mensaje
  - Notificación visual al enviar con éxito
- Sección con diseño claro y profesional.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura principal del portfolio.  
- **CSS3 / SCSS** — estilos personalizados (colores, sombras, degradados, flip, efectos hover).  
- **Bootstrap 5** — sistema de diseño responsive y componentes predefinidos.  
- **JavaScript (ES6)** — generación dinámica de tarjetas de proyectos y lógica del formulario.  
- **Formspree** — envío de mensajes del formulario de contacto.  
- **Diseño responsive** — adaptado a ordenador, tablet y móvil.

---

## 📦 Estructura del proyecto

Archivos principales:

- `index.html`  
  Contiene la estructura general del sitio. Secciones:
  - Navbar  
  - Inicio  
  - Sobre mí  
  - Formación y experiencia  
  - Proyectos  
  - Contacto  
  - Footer  

- `styles.css`  
  Archivo de estilos completo del portfolio.  
  Incluye:
  - Paleta de colores personalizada (rosa, azul oscuro y blancos)  
  - Animación del avatar con efecto flip  
  - Diseño de tarjetas  
  - Estilos de secciones  
  - Sombras, bordes, tipografía y responsive  

- `script.js`  
  Controla:
  - Carga dinámica de proyectos  
  - Creación de tarjetas  
  - Manejo del formulario de contacto (AJAX + Formspree)

- `assets/`  
  Carpeta con imágenes, logos, iconos y CV.

---

## 🚀 Cómo visualizar el proyecto

1. Descargar o clonar el repositorio:

   git clone https://github.com/VeronicaFT/portfolio.git

2. Abrir el archivo:

   index.html

3. Navegar libremente por todas las secciones.

No requiere servidor ni instalación adicional.

---

## 📈 Mejoras futuras

- Añadir modo oscuro/claro.
- Añadir animaciones suaves al hacer scroll (ScrollReveal o AOS).
- Integrar un blog personal o sección de artículos.
- Incorporar filtros para los proyectos.
- Convertirlo en una Single Page Application más dinámica (Angular o React).
- Mejorar accesibilidad (atributos ARIA, focos visibles, etc.).

---

## 👩‍💻 Autora

**Verónica Flores Torralva**  
Desarrolladora Web Junior

LinkedIn: https://www.linkedin.com/in/veronicaflorestorralva/  
GitHub: https://github.com/VeronicaFT

## Licencia
Este proyecto está bajo la licencia **MIT**.  
Puedes consultar los detalles en el archivo [LICENSE](./LICENSE).


