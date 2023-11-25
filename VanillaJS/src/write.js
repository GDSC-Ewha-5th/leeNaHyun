const input = document.querySelector(".input");

let tagArr = new Set();

function addTag(event) {
  if (event.key === "Enter") {
    if (tagArr.has(event.target.value)) {
      event.target.value = "";
    } else {
      const newTag = document.createElement("span");
      tagArr.add(event.target.value);
      newTag.innerText = event.target.value;
      document.body.insertBefore(newTag, input);

      newTag.addEventListener("click", () => {
        newTag.remove();
      });
      event.target.value = "";
    }
  }
}

input.addEventListener("keypress", addTag);
