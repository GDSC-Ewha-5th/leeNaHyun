const dropDown_clickable = document.querySelector(".dropDown_clickable");
const dropDownContent = document.querySelector(".dropDown_content");
const eachDropDownContent = document.querySelectorAll(".dropDown_content span");

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

function findIndex() {
  alert("hi");
}

function handleMouseenter(index) {
  if (state === "on") {
    const isMouseOnContent = document.querySelector(
      `.dropDown_content span:nth-child(${index + 1})`
    );
    isMouseOnContent.style.backgroundColor = "lightgrey";
  }
}

function handleMouseleave(index) {
  if (state === "on") {
    const isMouseLeaveContent = document.querySelector(
      `.dropDown_content span:nth-child(${index + 1})`
    );
    isMouseLeaveContent.style.backgroundColor = "whitesmoke";
  }
}

dropDown_clickable.addEventListener("click", handleClick);

eachDropDownContent[0].addEventListener("mouseenter", function () {
  handleMouseenter(0);
});
eachDropDownContent[1].addEventListener("mouseenter", function () {
  handleMouseenter(1);
});
eachDropDownContent[2].addEventListener("mouseenter", function () {
  handleMouseenter(2);
});
eachDropDownContent[3].addEventListener("mouseenter", function () {
  handleMouseenter(3);
});

eachDropDownContent[0].addEventListener("mouseleave", function () {
  handleMouseleave(0);
});
eachDropDownContent[1].addEventListener("mouseleave", function () {
  handleMouseleave(1);
});
eachDropDownContent[2].addEventListener("mouseleave", function () {
  handleMouseleave(2);
});
eachDropDownContent[3].addEventListener("mouseleave", function () {
  handleMouseleave(3);
});
