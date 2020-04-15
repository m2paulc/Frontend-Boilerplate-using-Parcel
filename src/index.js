import Header from './components/Header';
import './scss/main.scss';

const app = () => {
  document.querySelector('#header').innerHTML = Header();
};

app();