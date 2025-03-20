function getingTheData(){
    let carbs = parseFloat(document.getElementById("carbs").value);
    let bloodSuger = parseFloat(document.getElementById("bloodSuger").value)
    
    if (isNaN(carbs) || isNaN(bloodSugar)) {
        document.getElementById("alert").innerText = "Моля, въведете отново!";
        return;
    }

    let response = await fetch('/calculate_insulin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ carbs: carbs, blood_sugar: bloodSugar })
    });
    
}
function sendData() {
    let text = document.getElementById("userInput").value;
    document.getElementById("output").innerText = "You enter: " + text;
  }
  fetch('/api/data')  
      .then(response => {
          if (!response.ok) {
              throw new Error('Неуспешно зареждане на данни');
          }
          return response.json();
      })
      .then(data => {
          console.log(data);
         
          alert(data.message);  
      .catch(error => {
      
      });
  