function convertEnergy() {
    const input = parseFloat(document.getElementById('energyInput').value);
    const inputUnit = document.getElementById('energyInputUnit').value;
    const outputUnit = document.getElementById('energyOutputUnit').value;
    let result;

    // Convert input to joules
    switch (inputUnit) {
        case 'J':
            result = input;
            break;
        case 'KJ':
            result = input * 1000;
            break;
        case 'KW*h':
            result = input * 3600000;
            break;
        case 'W*h':
            result = input * 3600;
            break;
    }

    // Convert joules to output unit
    switch (outputUnit) {
        case 'J':
            break;
        case 'KJ':
            result /= 1000;
            break;
        case 'KW*h':
            result /= 3600000;
            break;
        case 'W*h':
            result /= 3600;
            break;
    }

    document.getElementById('energyResult').innerHTML = `${result.toFixed(2)} ${outputUnit}`;
}

function convertMoment() {
    const input = parseFloat(document.getElementById('momentInput').value);
    const inputUnit = document.getElementById('momentInputUnit').value;
    const outputUnit = document.getElementById('momentOutputUnit').value;
 
    let result;

    // Convert input to kgm&sup2;
    switch (inputUnit) {
        case 'Kg*m²':
            result = input;
            break;
        case 'Kg*mm²':
            result = input * 1e-6;
            break;
        case 'g*mm²':
            result = input * 1e-9;
            break;
    }

    // Convert kgm&sup2; to output unit
    switch (outputUnit) {
        case 'Kg*m²':
            break;
        case 'Kg*mm²':
            result *= 1e6;
            break;
        case 'g*mm²':
            result *= 1e9;
            break;
    }

    document.getElementById('momentResult').innerHTML = `${result.toFixed(2)} ${outputUnit}`;
}

function convertHeat() {
    const input = parseFloat(document.getElementById('heatInput').value);
    const inputUnit = document.getElementById('heatInputUnit').value;
    const outputUnit = document.getElementById('heatOutputUnit').value;
    let result;

    // Convert input to J/(kg*K)
    switch (inputUnit) {
        case 'J/(Kg*K)':
            result = input;
            break;
        case 'KJ/(Kg*K)':
            result = input * 1000;
            break;
        case 'J/(g*K)':
            result = input * 1000;
            break;
    }

    // Convert J/(kg*K) to output unit
    switch (outputUnit) {
        case 'J/(Kg*K)':
            break;
        case 'KJ/(Kg*K)':
            result /= 1000;
            break;
        case 'J/(g*K)':
            result /= 1000;
            break;
    }

    document.getElementById('heatResult').innerHTML = `${result.toFixed(2)} ${outputUnit}`;
}
