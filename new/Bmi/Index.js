const submit = document.getElementById('calculate');

calculate.addEventListener('click', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const bmi = (weight / ((height * height)/10000));
    const result = document.querySelector('#result');
    result.innerHTML = `Your BMI is: <span>${bmi.toFixed(2)}</span>`;
    });

