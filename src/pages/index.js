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

// education
const magistrBtn = document.querySelector('.education__button_type_magistratura');
const aspirantBtn = document.querySelector('.education__button_type_aspirantura');
const activeBtn = 'education__button_type_active';
const cardAspirant = document.querySelector('.education__card_aspirantura');
const cardAspirantVisible = 'education__card_aspirantura_visible';

aspirantBtn.addEventListener('click', () => {
    magistrBtn.classList.remove(activeBtn);
    aspirantBtn.classList.add(activeBtn);
    cardAspirant.classList.add(cardAspirantVisible);
});

magistrBtn.addEventListener('click', () => {
    aspirantBtn.classList.remove(activeBtn);
    magistrBtn.classList.add(activeBtn);
    cardAspirant.classList.remove(cardAspirantVisible);
});