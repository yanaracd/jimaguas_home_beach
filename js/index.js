/* Este archivo index.js contiene todo el JS del sitio web
Estructura:
- Constantes
- Variables
- Funciones
- Eventos
*/

'use strict'

// Constantes utilizadas para el evento del menú
const headerButton = document.querySelector(`.Header-button`)                     // Botón menú
const headerNav = document.querySelector(`.Header-nav`)                           // Barra de navegación
const headerH1 = document.querySelector(`.Header-h1`)                             // Logo de la web
const headerLiList = document.querySelectorAll(`.Header-li`)                      // Listado de la barra de navegación

// Constantes utilizadas para el evento del slider
const homeLiList = document.querySelectorAll(`.Home-li`)                          // Listado de los botones del slider
const homeImageList = document.querySelectorAll(`.Home-img`)                      // Listado de las imágenes del slider

// Constantes utilizadas para el evento del lightbox
const roomImgageList = document.querySelectorAll(`.Room-img`)                     // Listado de las imágenes de las habitaciones
const lightboxButton = document.querySelector(`.Lightbox-button`)                 // Botón "X" del lightbox
const lightbox = document.querySelector(`.Lightbox`)                              // Lightbox

// Constantes utilizadas para el evento del acordeon
const roomButtonDown = document.querySelector(`.Room-button`)                     // Botón "ver más"
const roomButtonUp = document.querySelector(`.Room-button--disabled`)             // Botón "ver menos"
const acordeon = document.querySelector(`.Acordeon`)                              // Acordeón

// Constantes utilizadas para el evento del slider dentro del acordeon
const acordeonButtonNext = document.querySelector(`.Acordeon-button--next`)       // Botón ">" del slider dentro del acordeon 
const acordeonButtonPrev = document.querySelector(`.Acordeon-button--prev`)       // Botón "<" del slider dentro del acordeon
const acordeonGridDisabled = document.querySelector(`.Acordeon-grid--disabled`)   // Grid de imágenes del slider

// Constantes utilizadas para el evento que muestra la imágen seleccionada
// dentro del acordeon
const acordeonImage = document.querySelectorAll(`.Acordeon-image`)                // Listado de imágenes del grid del slider
const acordeonImg = document.querySelector(`.Acordeon-img`)                       // Imágen que aparece en grande encima del slider

// Constantes utilizadas para el evento del modal
const serviceButton = document.querySelectorAll(`.Service-button`)                // Botón "saber más" de cada servicio
const modalSection = document.querySelectorAll(`.Modal-section`)                  // Sección del servicio que voy a mostrar
const modal = document.querySelector(`.Modal`)                                    // Modal
const modalButton = document.querySelector(`.Modal-button`)                       // Botón "X" del modal

// Variable utilizada para contar las imágenes del slider
let contImg = 0;

// Función que elimina la clase ".isActive" de las imágenes y los botones del slider
// y agrega la clase ".isActive" a la imágen y el botón del slider en la posición "contImg"
const setActive = () => {

  homeLiList.forEach((eachLi, i) => {

    homeLiList[i].classList.remove(`isActive`)
    homeImageList[i].classList.remove(`isActive`)

  })

  homeLiList[contImg].classList.add(`isActive`)
  homeImageList[contImg].classList.add(`isActive`)

}

// Evento que desliza la barra de navegación y la oculta
headerButton.addEventListener(`click`, () => {

  headerNav.classList.toggle(`isActive`)

})

// Evento que oculta la barra de navegación al hacer click en el logo de la web
headerH1.addEventListener(`click`, () => {

  headerNav.classList.remove(`isActive`)

})

// Evento que oculta la barra de navegación al hacer click en cualquier elemento del listado de la barra de navegación
headerLiList.forEach((eachLi, i) => {

  headerLiList[i].addEventListener(`click`, () => {

    headerNav.classList.remove(`isActive`)

  })

})

// Evento que al hacer click en alguno de los botones del slider cambia a la imágen correspondiente
homeLiList.forEach((eachButton, i) => {

  homeLiList[i].addEventListener(`click`, () => {

    contImg = i
    setActive()

  })

})

// Evento que cambia de imágen, en el slider, cada 5s
setInterval(() => {

  contImg++

  if (contImg > 9) {

    contImg = 0

  }

  setActive()

}, 5000)

// Evento que al hacer click encima de alguna las imágenes de las habitaciones muestra el ligthbox
roomImgageList.forEach((eachImg, i) => {

  roomImgageList[i].addEventListener(`click`, () => {

    lightbox.classList.add(`isActive`)

  })

})

// Evento que al hacer click en el botón "X" oculta el ligthbox
lightboxButton.addEventListener(`click`, () => {

  lightbox.classList.remove(`isActive`)

})

// Evento que al hacer click en el botón "ver más" desliza el acordeón
// y cambia el botón a "ver menos"
roomButtonDown.addEventListener(`click`, () => {

  acordeon.classList.add(`isActive`)
  roomButtonUp.classList.add(`isActive`)

})

// Evento que al hacer click en el botón "ver menos" oculta el acordeón
// y cambia el botón a "ver más"
roomButtonUp.addEventListener(`click`, () => {

  acordeon.classList.remove(`isActive`)
  roomButtonUp.classList.remove(`isActive`)

})

// Evento que al hacer click en el botón ">" desliza el slider
acordeonButtonNext.addEventListener(`click`, () => {

  acordeonGridDisabled.classList.toggle(`isActive`)

})

// Evento que al hacer click en el botón "<" desliza el slider
acordeonButtonPrev.addEventListener(`click`, () => {

  acordeonGridDisabled.classList.toggle(`isActive`)

})

// Evento que al hacer click en alguna de las imágenes del slider, que se encuentran en el acordeón,
// se muestra más grande en el .div de arriba
acordeonImage.forEach((eachImg, i) => {

  acordeonImage[i].addEventListener(`click`, () => {

    acordeonImg.src = acordeonImage[i].src

  })

})

// Evento que al hacer click en el botón "saber más" de alguno de los servicios, muestra el modal y la sección correspondiente a ese servicio
serviceButton.forEach((eachButton, i) => {

  serviceButton[i].addEventListener(`click`, () => {

    modal.classList.add(`isActive`)
    modalSection[i].classList.add(`isActive`)

  })

})

// Evento que al hacer click en el botón "X", oculta el modal y la sección correspondiente a ese servicio
serviceButton.forEach((eachButton, i) => {

  modalButton.addEventListener(`click`, () => {

    modal.classList.remove(`isActive`)
    modalSection[i].classList.remove(`isActive`)

  })

})