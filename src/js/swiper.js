const swiperBrend = new Swiper(".brend-block", {
  pagination: { el: ".swiper-pagination-brend", clickable: true },

  centeredSlides: true,

  spaceBetween: 16,
  autoHeight: true,

  slidesPerView: 1.3,
});

const swiperType = new Swiper(".type-equip-block", {
  pagination: { el: ".swiper-pagination-type", clickable: true },

  centeredSlides: true,
  spaceBetween: 16,
  autoHeight: true,

  slidesPerView: 1.3,
});

const swiperServicePrices = new Swiper(".service-prices", {
  pagination: { el: ".swiper-pagination-service", clickable: true },

  centeredSlides: true,
  spaceBetween: 16,
  autoHeight: true,

  slidesPerView: 1.3,
});
