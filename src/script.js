const layer1 = document.querySelector(".layer-1");
const layer2 = document.querySelector(".layer-2");
const layer3 = document.querySelector(".layer-3");
const layer4 = document.querySelector(".layer-4");
const title = document.querySelector(".hero h1");

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

 
      title.style.transform = `translate(-50%,-50%) translateY(${scrollY * 0.35}px)`;
      layer3.style.transform = `translateY(${scrollY * 0.5}px)`;
      layer4.style.transform = `translateY(${scrollY * 0.7}px)`;

      ticking = false;
    });
    ticking = true;
  }
});
