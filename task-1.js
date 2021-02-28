// task 1

const amountElements = document.querySelectorAll(".item");
console.log(`В списке ${amountElements.length} категории.`);

const titlesRef = document.querySelectorAll('h2')
const itemListRef = document.querySelectorAll('.item > ul')
console.log(itemListRef);
[...itemListRef].forEach((element, index) =>
    console.log('Категория:', titlesRef[index].textContent, 
'Количество элементов:', element.childElementCount)
);

// task 2

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allIngredient = document.querySelector('#ingredients');

const listRef = ingredients.map((ingredient) => { 
    const itemIngredient = document.createElement('li'); 
    itemIngredient.textContent = `${ingredient}`; 
    allIngredient.appendChild(itemIngredient);
})
    
// task 3

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listImages = document.querySelector('#gallery');
const imagesRef = images.map((image) => {
    listImages.insertAdjacentHTML('beforeend', `<li class='gallery-item' ><img class='gallery-img' src='${image.url} alt='${image.alt}'/></li>`);
});

// task 4

const decrementBtn = document.querySelector(' button[data-action="decrement"]');
const incrementBtn = document.querySelector(' button[data-action="increment"]');
const counterValue = document.querySelector('#value');

let counter = 0;

const onDecrementBtnClick = () => {
    counter -= 1;  
    counterValue.textContent = counter;
    console.log(counterValue);
};
const onIncrementBtnClick = () => { 
    counter += 1;
    counterValue.textContent = counter;
    console.log(counterValue);
};
decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

// task 5
const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value !== '' ? nameLabel.textContent = event.currentTarget.value
    : nameLabel.textContent = 'незнакомец';
}

// task 6

const inputRef = document.querySelector('#validation-input');
const validNumber = inputRef.dataset.length;

const onInputBlur = (event) => {
    if (event.currentTarget.value.length === Number(validNumber)) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
  } else { 
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
  }
}

inputRef.addEventListener('blur', onInputBlur);

// task 7

const input1Ref = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
const onInput = event => { 
 spanRef.style.fontSize = `${event.currentTarget.value}px`;
}

input1Ref.addEventListener('input', onInput)