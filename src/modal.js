export function createModal() {
  const card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
      const modal = document.createElement("div");
      document.body.appendChild(modal);
      modal.setAttribute("class", "modal_background");

      const body = document.querySelector("body");
      body.className += "scroll_hidden";
    });
  }
}
