import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    image => `<a class="gallery__item" href=${image.original}>
  <img class="gallery__image" src=${image.preview} alt="${image.description}" />
</a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', markup);


 (function () {
   new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });    
 })();

