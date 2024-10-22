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
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '24px',
      autoplay: true,
      infinite: true,
      variableWidth: true,
      dots: false,
      arrows: false,
      touchMove: true,
      touchThreshold: 100,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      speed: 1000
    })
  }
})
