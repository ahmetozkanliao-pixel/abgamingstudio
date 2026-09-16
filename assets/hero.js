(() => {
  const hero = document.querySelector("#abHero");
  const arcade = document.querySelector("#abHero .arcade-mount");
  if (!hero || !arcade) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  hero.addEventListener("pointermove", (event) => {
    if (reduce.matches) return;
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    arcade.style.transform = `translate3d(${x * 9}px, ${y * 7}px, 0) rotateY(${x * 2.2}deg) rotateX(${-y * 1.4}deg)`;
  });

  hero.addEventListener("pointerleave", () => {
    arcade.style.transform = "translate3d(0,0,0) rotateY(0) rotateX(0)";
  });
})();
