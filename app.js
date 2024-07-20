const reviews = [
  {
    Id: 1,
    name: 'susan johan',
    job: 'web developer',
    image: './images/person-1.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat. Eaque doloremque non veritatis voluptate, illo qui magnam alias rerum.',
  },
  {
    Id: 2,
    name: 'emily watson',
    job: 'ux designer',
    image: './images/person-2.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat. Eaque doloremque non veritatis voluptate, illo qui magnam alias rerum.',
  },
  {
    Id: 3,
    name: 'benjmin wao',
    job: 'web designer',
    image: './images/person-3.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat. Eaque doloremque non veritatis voluptate, illo qui magnam alias rerum.',
  },
  {
    Id: 4,
    name: 'jennie roy',
    job: 'content writer',
    image: './images/person-4.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat. Eaque doloremque non veritatis voluptate, illo qui magnam alias rerum.',
  },
  {
    Id: 5,
    name: 'john smith',
    job: 'Plugin Developer',
    image: './images/person-5.jpg',
    info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, repellat. Eaque doloremque non veritatis voluptate, illo qui magnam alias rerum.',
  },
];

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw Error(`Please Try to Enter valid slector ${selector}`);
  }
};

const prev_btn = getElement('.prev-btn');
const next_btn = getElement('.next-btn');
const random_btn = getElement('.random-btn');
const author = getElement('#author');
const personImg = getElement('#person-img');
const job = getElement('.job');
const info = getElement('.info');

// global variable
let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

// show previous person
prev_btn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
});

// show next person
next_btn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});
// show random person
random_btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * reviews.length);
  console.log(random);

  showPerson(random);
});
// show person
function showPerson(person) {
  let item = reviews[person];
  personImg.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
}
