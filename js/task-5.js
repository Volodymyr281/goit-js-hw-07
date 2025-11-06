function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const colorValueEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

if (!changeColorBtn) {
  console.error('Кнопку з селектором .change-color не знайдено. Перевір HTML.');
}
if (!colorValueEl) {
  console.error('Елемент .color не знайдено. Перевір HTML.');
}

changeColorBtn?.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorValueEl.textContent = randomColor;
});
