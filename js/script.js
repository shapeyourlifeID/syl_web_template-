document.addEventListener('DOMContentLoaded', function () {
  // Get and append header
  const headerElement = document.getElementById('syl-header')
  fetch('./partials/header.html')
    .then((response) => response.text())
    .then((data) => {
      headerElement.innerHTML = data
    })
    .catch((error) => console.error('Error loading header:', error))

  // Get and append footer
  const footerElement = document.getElementById('syl-footer')
  fetch('./partials/footer.html')
    .then((response) => response.text())
    .then((data) => {
      footerElement.innerHTML = data
    })
    .catch((error) => console.error('Error loading footer:', error))
})

$(document).ready(function () {
  if ($('.partner-slider').length) {
    $('.partner-slider').slick({
      slidesToShow: 5,
      centerMode: false,
      centerPadding: '24px',
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      variableWidth: true,
      dots: false,
      arrows: false,
      touchMove: true,
      touchThreshold: 5,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  }
})
