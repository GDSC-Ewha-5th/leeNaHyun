const input = document.querySelector(".input");

let tagArr = [];

function isExist(value) {
  for (let i = 0; i < tagArr.length; i++) {
    if (value == tagArr[i]) return true;
  }
  return false;
}

function deleteTag(event) {
  event.currentTarget.par;
}

function addTag(event) {
  if (event.key === "Enter") {
    if (!isExist(event.target.value)) {
      const newTag = document.createElement("span");
      newTag.innerText = event.target.value;
      document.body.insertBefore(newTag, input);
      tagArr.push(event.target.value);
      newTag.addEventListener("click", () => {
        newTag.remove();
      });
    }
    event.target.value = "";
  }
}

input.addEventListener("keypress", addTag);
