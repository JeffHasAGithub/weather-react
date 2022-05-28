const root = <HTMLDivElement>document.getElementById("root");

let imagei = 0;
const images = ["lake.jpg", "leaves.jpg", "moon.jpg", "storm.jpg"];

const intervalId = setInterval(() => {
  const [image, i] = cycleImage(images, imagei);
  imagei = i;

  root.style.backgroundImage = `url(images/${image}`;
  root.classList.toggle("fadeout");
}, 30000);

function cycleImage(images: string[], i: number): [image: string, i: number] {
  if (++i >= images.length) i = 0;

  return [images[i], i];
}

export default {};
