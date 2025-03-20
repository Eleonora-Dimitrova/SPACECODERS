function calculateInsulin() {
    let carbs = Number(document.getElementById("carbs").value)
    let bloodSugar = Number(document.getElementById("bloodSugar").value)
    let targetBloodSugar = Number(document.getElementById("targetBloodSugar").value)
    let insulinCarbRatio = Number(document.getElementById("insulinCarbRatio").value)
    let correctionFactor = Number(document.getElementById("correctionFactor").value)
    
    // Болус за въглехидрати
    let carbBolus = round((carbs / insulinCarbRatio),2);
    
    // Корекционен болус
    let correctionBolus = round(((bloodSugar - targetBloodSugar) / correctionFactor),2);
    
    // Обща доза инсулин
    let totalInsulin = round((carbBolus + correctionBolus),2);
    
    
        
    document.getElementById("answer1").textContent = `${carbBolus}`
    document.getElementById("answer2").textContent = `${correctionBolus}`
    document.getElementById("answer3").textContent = `${totalInsulin}`
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}