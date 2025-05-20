const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Main modal close function
function closeModalWithTransition(modal) {
  modal.classList.add("modal_is-closing");
  modal.addEventListener("transitionend", function handler() {
    modal.classList.remove("modal_is-opened", "modal_is-closing");
    modal.removeEventListener("transitionend", handler);
  });
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

// MODIFIED CLOSE HANDLER
editProfileCloseBtn.addEventListener("click", function () {
  closeModalWithTransition(editProfileModal); //
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

// MODIFIED CLOSE HANDLER
newPostCloseBtn.addEventListener("click", function () {
  closeModalWithTransition(newPostModal); //
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModalWithTransition(editProfileModal); //
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

//Test New post
const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput = newPostModal.querySelector("#card-image-input");
const cardCaptionInput = newPostModal.querySelector("#card-caption-input");
const cardsList = document.querySelector(".cards__list");

function handleNewPostSubmit(evt) {
  evt.preventDefault();

  // Geting value from form
  const imageUrl = cardImageInput.value;
  const caption = cardCaptionInput.value;

  // Creating new card
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `
    <img src="${imageUrl}" alt="${caption}" class="card__image" />
    <div class="card__content">
      <h2 class="card__title">${caption}</h2>
      <button type="button" class="card__like-btn"></button>
    </div>
  `;

  // add a new card to the top of the list
  cardsList.prepend(newCard);

  //smooth closing of the model
  closeModalWithTransition(newPostModal);

  // clean the form
  cardImageInput.value = "";
  cardCaptionInput.value = "";
}

newPostForm.addEventListener("submit", handleNewPostSubmit);
