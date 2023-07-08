//use strict vanilla javascript

const smallCups = document.querySelectorAll('.cup.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

fillBigCup();

// addeventlistener for small cups Added

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index));
});

//function for highlighting the cups

function highlightCups(index) {
  if (
    smallCups[index].classList.contains('full') &&
    !smallCups[index].nextElementSibling?.classList.contains('full')
  ) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  fillBigCup();
}
// fil the Cup
function fillBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const total = smallCups.length;

  if (fullCups === 0) {
    percentage.style.opacity = 0;
    percentage.style.height = 0;
    percentage.innerText = `${(fullCups / total) * 100}%`;
  } else {
    percentage.style.opacity = 1;
    percentage.style.height = `${(fullCups / total) * 330}px`;
    percentage.innerText = `${(fullCups / total) * 100}%`;
  }

  if (fullCups === total) {
    remained.style.height = 0;
    liters.innerText = `${((total - fullCups) / total) * 2} L`;
  } else {
    remained.style.height = `${((total - fullCups) / total) * 330}px`;
    liters.innerText = `${((total - fullCups) / total) * 2} L`;
  }
}
