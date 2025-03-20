function calculateInsulin() {
  let glucose = parseFloat(document.getElementById('glucose').value);
  let carbs = parseFloat(document.getElementById('carbs').value);

  if (isNaN(glucose) || isNaN(carbs)) {
    alert("Моля, въведете валидни стойности.");
    return;
  }

  // Примерна формула за изчисляване на инсулин: 
  let insulinRequired = (glucose - 100) / 50 + (carbs / 10);
  
  document.getElementById('result').textContent = `Препоръчвано количество инсулин: ${insulinRequired.toFixed(2)} единици`;
}
