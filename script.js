// select all bundle elements
const bundles = document.querySelectorAll('.bundle');

// toggle selection on bundle click
bundles.forEach(bundle => {
  bundle.addEventListener('click', () => {
    // if already selected, do nothing
    if (bundle.classList.contains('selected')) return;

    // deselect all bundles
    bundles.forEach(b => {
      b.classList.remove('selected');
      b.querySelector('input[type="radio"]').checked = false;
    });

    // select clicked bundle
    bundle.classList.add('selected');
    bundle.querySelector('input[type="radio"]').checked = true;

    // update total
    updateTotal();
  });
});

// function to update the total price
function updateTotal() {
  const selectedBundle = document.querySelector('.bundle.selected');
  const priceElement = selectedBundle?.querySelector('.price');
  const totalElement = document.querySelector('.total strong');

  if (priceElement && totalElement) {
    totalElement.textContent = priceElement.textContent.trim();
  }
}

// initialize total on page load
updateTotal();
