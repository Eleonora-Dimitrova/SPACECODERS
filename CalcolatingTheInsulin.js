function calculateInsulin() {
    let carbs = Number(document.getElementById("carbs").value)
    let bloodSugar = Number(document.getElementById("bloodSugar").value)
    let targetBloodSugar = Number(document.getElementById("targetBloodSugar").value)
    let insulinCarbRatio = Number(document.getElementById("insulinCarbRatio").value)
    let correctionFactor = Number(document.getElementById("correctionFactor").value)

    //alert bloodSugar
    if (bloodSugar < 2.9) {
        alert ("Нивото " + bloodSugar + " е: Опасно ниска (риск за живота) вземи мерки!");
    } else if (bloodSugar >= 2.9 && bloodSugar <= 4.9) {
        alert ("Нивото " + bloodSugar + " е: Нискo вземи мерки!");
    } else if (bloodSugar >= 5 && bloodSugar <= 10) {
        //alert ("Нивото " + bloodSugar + " е: Нормалнo");
    } else if (bloodSugar > 10 && bloodSugar <= 13) {
        alert ("Нивото " + bloodSugar + " е: Средно висока");
    } else if (bloodSugar > 13 && bloodSugar <= 30) {
        alert ("Нивото " + bloodSugar + " е: Висока");
    } else {
        alert ("Нивото " + bloodSugar + " е: Опасно висока (риск за живота)");
    }

    
    let carbBolus = round((carbs / insulinCarbRatio),2);
    let correctionBolus = round(((bloodSugar - targetBloodSugar) / correctionFactor),2);
    let totalInsulin = round((carbBolus + correctionBolus),2);
        
    document.getElementById("answer1").textContent = `${carbBolus}`
    document.getElementById("answer2").textContent = `${correctionBolus}`
    document.getElementById("answer3").textContent = `${totalInsulin}`
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// Запазване на грамовете въглехидрати
const carbs_input = document.querySelector("#carbs");
const text_carbs = document.querySelector("#carbs_text");
const button_carbs_save = document.querySelector("#carbs_button");
const stored_carbs_input = localStorage.getItem('carbs_input')

if (stored_carbs_input) {
    text_carbs.textContent = stored_carbs_input;
} else {
    // Ако няма стойност в localStorage, показваме празно
    text_carbs.textContent = "";
}
carbs_input.addEventListener("input", carbs => {
    text_carbs.textContent = carbs.target.value
});

const save_to_local_storage_carbs = () => {
    localStorage.setItem("carbs_input", text_carbs.textContent);
}

button_carbs_save.addEventListener('click', save_to_local_storage_carbs);

// Запазване на текуща кръвна захар
const blood_sugar_input = document.querySelector("#bloodSugar");
const text_blood_sugar = document.querySelector("#blood_sugar_text");
const button_blood_sugar_save = document.querySelector("#blood_sugar_button");
const stored_blood_sugar_input = localStorage.getItem('blood_sugar_input')

if (stored_blood_sugar_input) {
    text_blood_sugar.textContent = stored_blood_sugar_input;
} else {
    text_blood_sugar.textContent = "";
}
blood_sugar_input.addEventListener("input", blood_sugar => {
    text_blood_sugar.textContent = blood_sugar.target.value
})

const save_to_local_storage_blood_sugar = () => {
    localStorage.setItem("blood_sugar_input", text_blood_sugar.textContent)   
}

button_blood_sugar_save.addEventListener('click', save_to_local_storage_blood_sugar)

// Запазване на инсулинова доза
const insulin_output = document.querySelector("#answer3");
const text_insulin = document.querySelector("#insulin_text");
const button_insulin_save = document.querySelector("#insulin_button");
const stored_insulin_input = localStorage.getItem('insulin_output');

if (stored_insulin_input) {
    text_insulin.textContent = stored_insulin_input;
    insulin_output.value = stored_insulin_input; 
}

const save_to_local_storage_insulin = () => {
    const insulinValue = insulin_output.textContent;
    localStorage.setItem("insulin_output", insulin_output.textContent);
    text_insulin.textContent = insulinValue;
};

button_insulin_save.addEventListener('click', save_to_local_storage_insulin);

document.getElementById("carbs").addEventListener("input", calculateInsulin);
document.getElementById("bloodSugar").addEventListener("input", calculateInsulin);
document.getElementById("targetBloodSugar").addEventListener("input", calculateInsulin);
document.getElementById("insulinCarbRatio").addEventListener("input", calculateInsulin);
document.getElementById("correctionFactor").addEventListener("input", calculateInsulin);

calculateInsulin();
