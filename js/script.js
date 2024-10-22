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
