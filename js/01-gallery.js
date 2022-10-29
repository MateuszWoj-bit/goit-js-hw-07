import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    image => `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt="${image.description}"
    />
  </a>
</div>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', selectImg);

function selectImg(event) {
  event.preventDefault();

  const dataSource = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`
    <img src= ${dataSource} width="853" height="1280">
`);
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  instance.show();

  if (instance.visible()) {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        instance.close();        
      }
      return;
    });
  }
}
