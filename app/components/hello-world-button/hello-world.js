import './hello-world.scss';

class CreateButton{
  btnprop = 'hello-button';
  render(){
    const btn = document.createElement('button');
    btn.innerHTML ='Click Me!';
    btn.classList.add(this.btnprop);
    document.querySelector('body').appendChild(btn);
    btn.addEventListener('click', ()=>{
      const p = document.createElement('p');
      p.innerHTML = 'Hello World';
      p.classList.add('hello-text');
      document.querySelector('body').appendChild(p);
    })
  }
}

export default CreateButton;