const dropDown_clickable = document.querySelector(".dropDown_clickable");
const dropDownContent = document.querySelector(".dropDown_content");
const dropDownContents = document.querySelectorAll(".dropDown_content a");

let state = "off";
function handleClick() {
  if (state === "off") {
    dropDownContent.style.display = "flex";
    state = "on";
  } else {
    dropDownContent.style.display = "none";
    state = "off";
  }
}

function handleMouseenter(event) {
  let selected = event.currentTarget;
  selected.style.backgroundColor = "lightgrey";
}

function handleMouseleave() {
  let selected = event.currentTarget;
  selected.style.backgroundColor = "whitesmoke";
}

dropDown_clickable.addEventListener("click", handleClick);

dropDownContents.forEach((content) => {
  content.addEventListener("mouseenter", handleMouseenter);
});

dropDownContents.forEach((content) => {
  content.addEventListener("mouseleave", handleMouseleave);
});
