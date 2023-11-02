const dropDown_clickable = document.querySelector(".dropDown_clickable");
const dropDownContent = document.querySelector(".dropDown_content");

let state = "off";

function handleClick() {
  console.log(state);
  if (state === "off") {
    dropDownContent.style.display = "flex";
    state = "on";
  } else {
    dropDownContent.style.display = "none";
    state = "off";
  }
}

dropDown_clickable.addEventListener("click", handleClick);
