$('.carousel__hero').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  center: true,
  nav: false,
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})


$('.events-carousel').owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  center: false,
  nav: false,
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    750: {
      items: 4
    },
    800: {
      items: 4
    },
    1000: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
})
