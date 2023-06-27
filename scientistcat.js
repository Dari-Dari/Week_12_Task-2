const text = document.getElementById('text').textContent;

//Задание 1
const button1 = document.querySelector('.b-1');
const result1 = document.getElementById('result1');

button1.addEventListener('click', () => {
    const lengthText = text.length;
    result1.textContent = lengthText;
    console.log(lengthText);
});

//Задание 2
const button2 = document.querySelector('.b-2');
const result2 = document.getElementById('result2');
const result = text.replaceAll(';', '\n');

button2.addEventListener('click', () => {
    result2.textContent = result;
    console.log(result);
});


//Задание 3
const button3 = document.querySelector('.b-3');
const result3 = document.getElementById('result3');
const substring = result.replace(/\s/g, '');

button3.addEventListener('click', () => {
    result3.textContent = substring;
    console.log(substring);
});


//Задание 4
const button4 = document.querySelector('.b-4');
const result4 = document.getElementById('result4');
const newText = text.slice(26, 49);

button4.addEventListener('click', () => {
    result4.textContent = newText;
    console.log(newText);
});


//Задание 5
const button5 = document.querySelector('.b-5');
const result5 = document.getElementById('result5');
const replacedText = newText.replaceAll('клён', 'дубе');

button5.addEventListener('click', () => {
    result5.textContent = replacedText;
    console.log(replacedText);
});


//Задание 6
const button6 = document.querySelector('.b-6');
const result6 = document.getElementById('result6');
const replacedText2 = text.toUpperCase();

button6.addEventListener('click', () => {
    result6.textContent = replacedText2;
    console.log(replacedText2);
});


//Задание 7
const button7 = document.querySelector('.b-7');
const result7 = document.getElementById('result7');
const replacedText3 = text.replaceAll('клён', 'дуб');

button7.addEventListener('click', () => {
    result7.textContent = replacedText3;
    console.log(replacedText3);
});



//Задание 8
const button8 = document.querySelector('.b-8');
const result8 = document.getElementById('result8');
const index = text.indexOf('моря');

button8.addEventListener('click', () => {
    result8.textContent = index;
    console.log(index);
});



//Задание 9
const button9 = document.querySelector('.b-9');
const result9 = document.getElementById('result9');
const modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);

button9.addEventListener('click', () => {
    result9.textContent = modifiedText;
    console.log(modifiedText);
});


//Задание 10
//Выводится на экран при нажатии на кнопки