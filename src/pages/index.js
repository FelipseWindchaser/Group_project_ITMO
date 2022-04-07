import './index.css';

// description popup
const popupDescription = document.querySelector('.description-popup');
const moreBtns = document.querySelectorAll('.description__card-more-btn');
const popupDescriptionOpened = ('description-popup_opened');

function openPopupDescription(popup) {
    popup.classList.add(popupDescriptionOpened);
}

function closePopupDescription(popup) {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains(popupDescriptionOpened)) {
            popup.classList.remove(popupDescriptionOpened);
        }
        if (evt.target.classList.contains('description-popup__close-btn')) {
            popup.classList.remove(popupDescriptionOpened);
        }
    })
}

moreBtns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        openPopupDescription(popupDescription);
    });
});
closePopupDescription(popupDescription);