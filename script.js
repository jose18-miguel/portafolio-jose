// =============================================
// SCRIPT PARA PORTAFOLIO - JOSE MANCUELLO
// Funcionalidad: menú responsive, scroll activo, filtros, validación
// =============================================

// Mostrar/ocultar menú responsive
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("mostrar");
}

// Seleccionar y cerrar menú
function seleccionar() {
    const nav = document.getElementById("nav");
    nav.classList.remove("mostrar");
}

// Resaltar sección activa al hacer scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
        if (scrollPos >= top && scrollPos < top + height && navLink) {
            document.querySelectorAll("nav ul li a").forEach((a) =>
                a.classList.remove("activo")
            );
            navLink.classList.add("activo");
        }
    });
});

// Filtrar proyectos
function filtrarProyectos(categoria) {
    const proyectos = document.querySelectorAll(".proyecto");
    proyectos.forEach((proyecto) => {
        proyecto.style.display =
            categoria === "todos" || proyecto.classList.contains(categoria) ?
            "block" :
            "none";
    });
}

// Validar formulario de contacto
function validarFormulario() {
    const nombre = document.querySelector("input[name='nombre']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const mensaje = document.querySelector("textarea[name='mensaje']").value.trim();
    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    }
    return true;
}

// ===============================
// Modo claro/oscuro con almacenamiento
// ===============================

function aplicarTemaGuardado() {
    const stored = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', stored);
    const toggle = document.getElementById('theme-toggle');
    if (toggle && stored === 'light') {
        toggle.textContent = 'Modo Oscuro';
    }
}

function toggleTheme() {
    const actual = document.documentElement.getAttribute('data-theme');
    const nuevo = actual === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nuevo);
    localStorage.setItem('theme', nuevo);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.textContent = nuevo === 'light' ? 'Modo Oscuro' : 'Modo Claro';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    aplicarTemaGuardado();
    const boton = document.getElementById('theme-toggle');
    if (boton) {
        boton.addEventListener('click', toggleTheme);
    }
});
