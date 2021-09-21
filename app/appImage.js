import couch from './couch.jpeg';

// const img = couch;
function addimage(){
   const img = document.createElement('img');
   img.alt='Couch';
   img.src = couch;

   document.querySelector('body').appendChild(img);

}

export default addimage;