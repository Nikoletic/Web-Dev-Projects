function calculate() {
    const shape = document.getElementById('shape').value;

    if (shape === 'rectangle') {
        const width = parseFloat(document.getElementById('width').value);
        const height = parseFloat(document.getElementById('height').value);
        const resultX = width * height ** 3 / 12;
        const resultY = height * width ** 3 / 12;
        document.getElementById('result-x').innerHTML = `Ix= ${resultX.toFixed(2)} mm<sup>4</sup>`;
        document.getElementById('result-y').innerHTML = `Iy= ${resultY.toFixed(2)} mm<sup>4</sup>`;
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        const result = Math.PI * radius ** 4 / 4;
        document.getElementById('result-x').innerHTML = `Ix= ${result.toFixed(2)} mm<sup>4</sup>`;
        document.getElementById('result-y').innerHTML = `Iy= ${result.toFixed(2)} mm<sup>4</sup>`;
    }
}

function toggleInputs() {
    const shape = document.getElementById('shape').value;
    if (shape === 'rectangle') {
        document.getElementById('rectangleInputs').style.display = 'block';
        document.getElementById('circleInputs').style.display = 'none';
    } else if (shape === 'circle') {
        document.getElementById('rectangleInputs').style.display = 'none';
        document.getElementById('circleInputs').style.display = 'block';
    }else{
        document.getElementById('circleInputs').style.display = 'none';
        document.getElementById('rectangleInputs').style.display = 'none';
    }
}
