export function createModal() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      createModalWindow(card);
    });
  });
}

function createModalWindow(card) {
  const modalBg = createModalBackground();
  const modal = createModalContent(card);
  const closeBtn = createCloseButton();

  toggleScrollHidden(true);

  document.body.appendChild(modalBg);
  modalBg.appendChild(modal);
  modalBg.appendChild(closeBtn);
}

function createModalBackground() {
  const modalBg = document.createElement("div");
  modalBg.setAttribute("class", "modal_background");
  return modalBg;
}

function createModalContent(card) {
  const modal = document.createElement("div");
  modal.setAttribute("class", "card modal");
  modal.innerHTML = card.innerHTML;
  return modal;
}

function createCloseButton() {
  const closeBtn = document.createElement("span");
  closeBtn.setAttribute("class", "modal_closeBtn");
  closeBtn.innerText = "X";

  closeBtn.addEventListener("click", () => {
    const modalBg = document.querySelector(".modal_background");
    modalBg.remove();
    toggleScrollHidden(false);
  });

  return closeBtn;
}

function toggleScrollHidden(enable) {
  const body = document.querySelector("body");
  if (enable) {
    //scroll hidden을 하겠다
    body.classList.add("scroll_hidden");
  } else {
    body.classList.remove("scroll_hidden");
  }
}
