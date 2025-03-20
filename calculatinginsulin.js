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