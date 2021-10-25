const IMAGES = document.querySelectorAll("img");
const widths = ["400", "800", "1200", "1600", "2000"];

function generateSrcset() {
  let markup = [];

  for (let i = 0; i < widths.length; i++) {
    markup[i] = `img/image-${widths[i]}.jpg ${widths[i]}w`;
  }

  return markup.join();
}

for (let i = 0; i < IMAGES.length; i++) {
  let srcset = generateSrcset();

  IMAGES[i].setAttribute("srcset", srcset);
}
