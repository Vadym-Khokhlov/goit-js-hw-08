import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryMarkupMaker(galleryItems);

const galleryList = galleryMarkupMaker(galleryItems);

function galleryMarkupMaker(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}
galleryRef.insertAdjacentHTML("afterbegin", galleryList);

function linkActionDenier(e) {
  e.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
