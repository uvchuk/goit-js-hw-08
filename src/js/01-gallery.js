// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const createMarkup = markup();
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function markup() {
  const markupArr = galleryItems
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}"><img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/></a>`;
    })
    .join('');
  galleryRef.insertAdjacentHTML('afterbegin', markupArr);
}
