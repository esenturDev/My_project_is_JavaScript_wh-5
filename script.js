// console.log("Hello/");



// Задача 1.

const showHuman1 = {
  name: 'Esentur',
  farsName: 'Ismailov',
  age: 17,
  аloor: 'Эркек',
  status: 'KR',
  forStudent: 'Студент',
  hobby: 'frontend!',
  birthday: '28.03.2006.',
  city: {
    name: 'Osh Kara-Suu',
    yourAdrest: 'Гражданская 119 Peaksoft house.',
  },
};
console.log(showHuman1);

//  Задача 2.


const showHuman2 = {
  name: ['Esentur'],
  farsName: ['Ismailov'],
  age: [17],
  аloor: ['Эркек'],
  status: ['KR'],
  forStudent: 'Студент',
  hobby: 'frontend!',
  birthday: '28.03.2006.',
  city: {
    name: 'Osh Kar-Suu',
    yourAdrest: 'Гражданская 119 Peaksoft house.',
  },
};
console.log(showHuman2);

const showHuman3 = {
  name: 'Esentur',
  farsName: 'Ismailov',
  age: 17,
  аloor: 'Эркек',
  status: 'KR',
  forStudent: 'Студент',
  hobby: 'frontend!',
  birthday: '28.03.2006.',
  city: {
    name: 'Osh Kara-Suu',
    yourAdrest: 'Гражданская 119 Peaksoft house.',
  },
};
console.log(showHuman3.name);
console.log(showHuman3.age);
console.log(showHuman3.аloor);
console.log(showHuman3.status);
console.log(showHuman3.farsName);

// Задача 3.
// Ментор байкелерим ал жакта айтып жатат адамдын жашын озгортуп console.log ко жаңыртылган маалыматты басып чыгарыңыз. Деп жатат. Мен дал ошондой кылдым эгер ката кетсе кечирим сураймын.
const showHuman = {
  name: 'Esentur',
  farsName: 'Ismailov',
  age: 17,
  аloor: 'Эркек',
  status: 'KR',
  forStudent: 'Студент',
  hobby: 'frontend!',
  birthday: '28.03.2006.',
  city: {
    name: 'Osh Kara-Suu',
    yourAdrest: 'Гражданская 119 Peaksoft house.',
  },
};

showHuman.age = 25,
console.log(showHuman.age);

// Задача 4.

const getNumber = (valivu) => {
  const showHuman = {
    name: "Esentur"
  };
  return `${valivu}, ${showHuman.name}`
};
const result = getNumber ('Hello')
console.log(result);

// Задача 5.

const showHuman = {
  name: 'Esentur',
  farsName: 'Ismailov',
  age: 17,
  аloor: 'Эркек',
  status: 'KR',
  forStudent: 'Студент',
  hobby: 'frontend!',
  birthday: '28.03.2006.',
  city: {
    name: 'Osh Kara-Suu',
    yourAdrest: 'Гражданская 119 Peaksoft house.',
  },
};

let user = prompt('Напишите слово!!!');


if(user in showHuman){
  console.log(true);
}else {
  console.log(false);
}


// Задача 6.

const yourName = prompt('Вветите ваше имя.');
const yourAge = prompt('Вветите ваше имя.');
const yourAloor = prompt('Вветите ваше имя.');
const yourStatus = prompt('Вветите ваше имя.');
const yourfarsName = prompt('Вветите ваше имя.');

const showHuman = {
  name: yourName,
  farsName: yourfarsName,
  age: yourAge,
  аloor: yourAloor,
  status: yourStatus,
};

console.log(showHuman);