const inputNameElement = document.querySelector('#name-form input');
const submitButtonElement = document.querySelector('#name-form button');
const showResultElement = document.querySelector('#result');

const getNameInfo = async (name) => {
    const fetchResult = await fetch(`https://api.genderize.io/?name=${name}`);
    const responseBody = await fetchResult.json();
    renderResultElement(responseBody);
}

submitButtonElement.addEventListener('click', submitButtonHandler);

function submitButtonHandler(evt) {
    evt.preventDefault();
    if(inputNameElement.value) {
        getNameInfo(inputNameElement.value);
    } else {
        alert('Введите все таки имя');
    }
}

function renderResultElement(responseBody) {
    const translatedName = responseBody.gender === 'male' ? 'мужской' : 'женский';
    showResultElement.textContent = `Ваш пол ${translatedName} c вероятностью ${responseBody.probability * 100}%`;
}