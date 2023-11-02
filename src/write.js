const input = document.querySelector(".input");

function addTag(event) {
  if (event.key === "Enter") {
    const newTag = document.createElement("span");
    newTag.innerText = event.target.value;
    document.body.insertBefore(newTag, input);
    event.target.value = "";
  }
}

input.addEventListener("keypress", addTag);
