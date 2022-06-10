import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const images = galleryItems
    .map((image) => `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/>
        </a>
    </div>`)
    .join("");

gallery.insertAdjacentHTML("afterbegin", images);

gallery.addEventListener("click", onImgOpenInModal);

function onImgOpenInModal(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return
    };
    const currentImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`<div class="modal">
        <img src="${currentImg}">
        </img>
    </div>`);
    instance.show();
    window.addEventListener("keydown", cancelKeyboard)
    function cancelKeyboard(evt) {
      if (evt.code === "Escape") {
        instance.close();
        window.removeEventListener("keydown", cancelKeyboard);
      }
    }
}