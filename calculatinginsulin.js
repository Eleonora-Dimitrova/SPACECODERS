


async function getingTheData() {
    let carbs = 30
    //parseFloat(document.getElementById("carbs").value);
    let blood_sugar = 5.6
    //parseFloat(document.getElementById("blood_sugar").value); 

    if (isNaN(carbs) || isNaN(blood_sugar)) {
        document.getElementById("alert").innerText = "Моля, въведете отново!";
        return;
    }

    try {
        let response = await fetch('/calculate_insulin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ carbs: carbs, blood_sugar: blood_sugar })
        });

        if (!response.ok) {
            throw new Error('Грешка при получаване на отговор от сървъра.');
        }

        let data = await response.json();
        document.getElementById("alert").innerText = data.message;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("alert").innerText = "Възникна грешка, опитайте отново.";
    }
}

function sendData() {
    let text = document.getElementById("userInput").value;
    document.getElementById("output").innerText = "You entered: " + text;
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
    })
    .catch(error => {
        console.error("Error:", error);
    });

  