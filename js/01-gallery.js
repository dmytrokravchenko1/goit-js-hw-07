// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >, і вказуватися в href посилання.

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. 
// Заборони цю поведінку за замовчуванням.

// Додай закриття модального вікна після натискання клавіші Escape.
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.Бібліотекаи basicLightbox містить метод для програмного закриття модального вікна.

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