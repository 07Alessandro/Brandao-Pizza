let carrinho = document.querySelector('.carrinho')

document.querySelector('#cart').onclick = () => {
  carrinho.classList.toggle('active')

  login.classList.remove('active')
  menuResponsivo.classList.remove('active')


}

let login = document.querySelector('.login-form')

document.querySelector('#login').onclick = () => {
  login.classList.toggle('active')

  carrinho.classList.remove('active')
  menuResponsivo.classList.remove('active')
}

// MENU RESPONSIVO

let menuResponsivo = document.querySelector('.menu-site')
document.querySelector('#menu').onclick = () => {
  menuResponsivo.classList.toggle('active')

  login.classList.remove('active')

  carrinho.classList.remove('active')
}

window.onscroll = () => {
  login.classList.remove('active')
  carrinho.classList.remove('active')
  menuResponsivo.classList.remove('active')

}

var swiper = new Swiper(".home-slider", {

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  grapCursor: true,
  loop: true,
  centeredSlides: true,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },




})


var swiper = new Swiper(".menu-slider", {


  grapCursor: true,
  loop: true,
  autoHeight:true,
  centeredSlides: true,
  spaceBetwwen:20,


    pagination: {
     el: '.swiper-pagination',
    clickable:true,
  },
 

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


})

// CARROSSEL

// var swiper = new Swiper('.swiper', {
 
//   loop:true,
 
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   pagination: {
//      el: '.swiper-pagination',
//     clickable:true,
//   },

  // breakpoints: {
  //   // when window width is >= 320px
  //   // 640: {
  //   //   slidesPerView: 2,
  //   //   spaceBetween: 20
  //   // },
  //   // // when window width is >= 480px
  //   // 768: {
  //   //   slidesPerView: 3,
  //   //   spaceBetween: 30
  //   // },
  //   // when window width is >= 640px
  //   // 1188: {
  //   //   slidesPerView: 4,
  //   //   spaceBetween: 40
  //   // }
  // }


// });




const  menuSlider = document.querySelectorAll('.menu-slider')




// JANELA MODAL

let verModalCopo = document.querySelector('.menu-modal-container')
let verModalBox = verModalCopo.querySelector('.menu-modal')

document.querySelectorAll(".menu .box").forEach(menu => {

  menu.onclick = () => {
    verModalCopo.style.display = 'block';
    let nome = menu.getAttribute('data-name')

    verModalBox.forEach(visualizar => {
      let chamada = visualizar.getAttribute('data-target')

      if (nome == chamada) {
        visualizar.classList.add('active')
      }

    })

  }

})

verModalCopo.querySelector('#fechar').onclick = () => {

  verModalCopo.style.display = 'none';

  verModalBox.forEach(fechar => {
    fechar.classList.remove('active')

  })
}
