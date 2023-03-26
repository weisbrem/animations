window.addEventListener('scroll', () => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '.container',
  content: '.content',
});
