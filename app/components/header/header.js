import './header.scss';

export class Header {

  render(){
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Configuring Webpack';

    document.body.appendChild(h1);
  }

}