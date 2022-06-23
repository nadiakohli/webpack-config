import imgSrc from './images/dog.png';
import './styles/index.scss';

const img = document.createElement('img');

document.body.append(img);

img.src = imgSrc;

const userStack = {
  language: 'JavaScript',
  framework: 'Angular'
};

const user = {
  name: 'Vitalij',
  age: '37',
  ...userStack
};

console.log(user);