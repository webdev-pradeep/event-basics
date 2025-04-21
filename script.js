const image = document.getElementById("images");
// console.log(image);
image.addEventListener("click", (e) => {
  //   console.log(e.target.tagName);
  e.target.parentNode.remove();
  //   if (e.target.tagName === "IMG") {
  //     const removeId = e.target.parentNode;
  //     console.log(e.target.id);
  //     removeId.remove();
  //   }
});
