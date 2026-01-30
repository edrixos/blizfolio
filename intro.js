const title = [".::.", "...."];
let index = 0;

setInterval(() => {
  index = (index + 1) % title.length;
  document.title = title[index];
}, 500);
