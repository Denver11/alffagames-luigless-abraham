const Fila = document.querySelector('.Cont-Carousel');
const Combo = document.querySelectorAll('.ComboBM');

const FlechIzq = document.getElementById('Flech-Izq');
const FlechDerch = document.getElementById('Flech-Derch');

//Evento de la flecha derecha //
FlechDerch.addEventListener("click", () => {
    Fila.scrollLeft += Fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//Eevento de la flecha izquierda//
FlechIzq.addEventListener("click", () => {
    Fila.scrollLeft -= Fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//Paginas de carrucel//
const numeroPag = Math.ceil(Combo.length / 6);
for (let i = 0; i < numeroPag; i++) {
    const indicador = document.createElement('button');
    if (i == 0) {
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        Fila.scrollLeft = i * Fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

//Hover de videojuegos//
Combo.forEach((ComboBM) => {
    ComboBM.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            Combo.forEach(ComboBM => ComboBM.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

Fila.addEventListener('mouseleave', () => {
    Combo.forEach(ComboBM => ComboBM.classList.remove('hover'));
});