import createButton from './components/hello-world-button/hello-world';
import { Header } from './components/header/header';

const header = new Header();
header.render();
const createBtn = new createButton();
createBtn.render();

if(process.env.NODE_ENV === 'production'){
  console.log('Production Mode')
}
else if(process.env.NODE_ENV === 'development'){
  console.log('Development Mode')
}
