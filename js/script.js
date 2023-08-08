const swiper = new Swiper('.sliders', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // watchSlidesProgress: true,
  // virtual: true,
  // autoHeight: auto,
  // slidesPerView: 3,
  // spaceBetween: 90,
  // Navigation arrows
  // observer: true,
  // observerParents: true,
  // observerSlideChildren: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 40,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },
    1030: {
      slidesPerView: 3,
      spaceBetween: 90,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },
});
// window.addEventListener('resize', () => {
//   swiper.update();
// });
