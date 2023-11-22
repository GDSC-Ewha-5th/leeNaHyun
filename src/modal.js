export function createModal() {
  const card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
      const modalBg = document.createElement("div");
      document.body.appendChild(modalBg);
      modalBg.setAttribute("class", "modal_background");

      const body = document.querySelector("body");
      body.classList.add("scroll_hidden");

      const modal = document.createElement("div");
      modalBg.appendChild(modal);
      modal.setAttribute("class", "card modal");

      const closeBtn = document.createElement("span");
      modalBg.appendChild(closeBtn);
      closeBtn.setAttribute("class", "modal_closeBtn");
      closeBtn.innerText = "X";
      closeBtn.addEventListener("click", () => {
        body.classList.remove("scroll_hidden");
        modalBg.remove();
        modal.remove();
        closeBtn.remove();
      });
    });
  }
}
