function calculateInsulin() {
    let carbs = Number(document.getElementById("carbs").value)
    let bloodSugar = Number(document.getElementById("bloodSugar").value)
    let targetBloodSugar = Number(document.getElementById("targetBloodSugar").value)
    let insulinCarbRatio = Number(document.getElementById("insulinCarbRatio").value)
    let correctionFactor = Number(document.getElementById("correctionFactor").value)
    
    

    //alert bloodSugar
    let through = 1;
    if (bloodSugar < 2.9) {
        let through = 0;
        alert ("Нивото " + bloodSugar + " е: Опасно ниска (риск за живота) вземи мерки!");
    } else if (bloodSugar >= 2.9 && bloodSugar <= 4.9) {
        let through = 0;
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

    if(through){
        let carbBolus = round((carbs / insulinCarbRatio),2);
        let correctionBolus = round(((bloodSugar - targetBloodSugar) / correctionFactor),2);
        let totalInsulin = round((carbBolus + correctionBolus),2);
        document.getElementById("answer1").textContent = `${carbBolus}`
        document.getElementById("answer2").textContent = `${correctionBolus}`
        document.getElementById("answer3").textContent = `${totalInsulin}`
    }
    
        
    
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
