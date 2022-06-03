import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const images = galleryItems
    .map((image) => `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
        </a>`)
    .join("");

gallery.insertAdjacentHTML("afterbegin", images);

const lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.5,
  captionsData: "alt",
  captionDelay: 250,
});
