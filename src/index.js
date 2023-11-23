import { createModal } from "./modal.js";

const dropDownClickable = document.querySelector(".dropDown_clickable");
const dropDownSelected = document.querySelector(".dropDown_clickable span");
const dropDownContent = document.querySelector(".dropDown_content");
const dropDownContents = document.querySelectorAll(".dropDown_content a");

let state = "off";
function handleClikableClick() {
  if (state === "off") {
    dropDownContent.style.display = "flex";
    state = "on";
  } else {
    dropDownContent.style.display = "none";
    state = "off";
  }
}

function handleMouseEnterLeave(event, isEntering) {
  let selected = event.currentTarget;
  selected.classList.toggle("hovered", isEntering);
  console.log(selected);
}

let clicked = dropDownContents[1];
function handleContentClick(event) {
  console.log(clicked);
  clicked.classList.remove("dropDown_content_clicked");
  clicked = event.currentTarget;
  clicked.classList.add("dropDown_content_clicked");
  dropDownSelected.innerText = clicked.innerText;
  dropDownContent.style.display = "none";
  state = "off";
}

dropDownClickable.addEventListener("click", handleClikableClick);

dropDownContents.forEach((content) => {
  content.addEventListener("mouseenter", (e) => handleMouseEnterLeave(e, true));
  content.addEventListener("mouseleave", (e) =>
    handleMouseEnterLeave(e, false)
  );
});

dropDownContents.forEach((content) => {
  content.addEventListener("click", handleContentClick);
});

function main() {
  createModal();
}

window.addEventListener("load", main);
