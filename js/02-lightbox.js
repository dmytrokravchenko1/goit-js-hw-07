// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox,
// яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
// Використовуй готовий код з першого завдання.

// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
// Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.

// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. 
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

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
