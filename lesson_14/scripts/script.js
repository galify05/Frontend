const headerElement = document.querySelector('.header');
headerElement.innerText = 'Калькулятор';
headerElement.classList.add('red');

// создание элемента Кнопка
const submitButtonElement = document.createElement('button');
submitButtonElement.innerText = 'Результат';
submitButtonElement.classList.add('submit-button');
// добавляем созданный элемент в определенное место
headerElement.after(submitButtonElement);


// создадим функцию с реакцией на клик по кнопке
const submitButtonHanler = () => {
    // сначала найдем и удалим сущуствующий span (если есть)
    const createdSpanElement = document.querySelector('.result');
    if (createdSpanElement) {createdSpanElement.remove()};
    // ищем наши элементы
    const inputElements = document.querySelectorAll('input');
    // запишем из инпутов в переменные
    const element1 = inputElements[0].value;  
    const element2 = inputElements[1].value;
    // parse / Number() / +
    const summ = +element1 + +element2;
    // Создадим элемент для вывода на страничку
    const resultElement = document.createElement('span');
    resultElement.classList.add('result');
    // Заполним данными (результатом)
    resultElement.innerText = summ;
    // Отобразим на страничке
    const bodyElement = document.querySelector('body');
    bodyElement.append(resultElement);
    // body можно не искать отдельно
    // document.body.append........
}


// добавляем на кнопку действие
submitButtonElement.addEventListener('click', submitButtonHanler);

// ******************************************************
const submitButtonElement = document.querySelector('#bmi-form button');
submitButtonElement.addEventListener('click', submitButtonHandler);

const inputWeightElement = document.querySelector('#weight');
const inputHeightElement = document.querySelector('#height');

inputWeightElement.addEventListener('change', removeAlert);
inputHeightElement.addEventListener('change', removeAlert);

function submitButtonHandler(evt) {
  evt.preventDefault();

  if (inputWeightElement.value < 1 || inputHeightElement.value < 1) {
    showAlert();
  } else {
    const bmiIndex = (
      inputWeightElement.value /
      (inputHeightElement.value / 100) ** 2
    ).toFixed(1);

    removeAlert();

    const bmiResultElement = document.querySelector('#bmi-result');
    bmiResultElement.innerText = `Ваш BMI: ${bmiIndex}`;

    const bmiCommetResult = document.querySelector('#bmi-status');
    bmiCommetResult.innerText = `Статус: ${getBmiComment(bmiIndex)}`;
  }
}

function getBmiComment(bmi) {
  bmi = +bmi;
  if (bmi <= 16) {
    return 'Выраженный дефицит массы тела';
  } else if (bmi <= 18.5) {
    return 'Недостаточная (дефицит) масса тела';
  } else if (bmi <= 25) {
    return 'Норма';
  } else if (bmi <= 30) {
    return 'Избыточная масса тела (предожирение)';
  } else if (bmi <= 35) {
    return 'Ожирение 1 степени';
  } else if (bmi <= 40) {
    return 'Ожирение 2 степени';
  } else {
    return 'Ожирение 3 степени';
  }
}

function showAlert() {
    const alert = document.querySelector('.alert');
    alert.innerText = 'Соберитесь, введите корректные значения';
    document.querySelector('#bmi-form').after(alert);
}

function removeAlert() {
    const alertElement = document.querySelector('.alert');
    if (alertElement) {
        alertElement.innerText = '';
    }
}




