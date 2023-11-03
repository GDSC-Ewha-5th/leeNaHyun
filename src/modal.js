const card = document.querySelector(".card");

function createModal() {
  const background = document.createElement("div");
  background.setAttribute("class", "modal_background");
}

function handleClick() {
  createModal();
  console.log("hi");
}

card.addEventListener("click", handleClick);
