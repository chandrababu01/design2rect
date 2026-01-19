import gsap from "gsap";

/*
  GSAP Horizontal Loop Helper
*/
export function horizontalLoop(items, config = {}) {
  items = gsap.utils.toArray(items);
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
  });

  let length = items.length;
  let startX = items[0].offsetLeft;
  let times = [];
  let widths = [];
  let xPercents = [];
  let curIndex = 0;

  items.forEach((el, i) => {
    widths[i] = el.offsetWidth;
    xPercents[i] = (el.offsetLeft / widths[i]) * 100;
  });

  gsap.set(items, { xPercent: i => xPercents[i] });

  let totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    widths[length - 1];

  items.forEach((item, i) => {
    let curX = (xPercents[i] / 100) * widths[i];
    let distanceToStart = item.offsetLeft + curX - startX;
    let distanceToLoop = distanceToStart + widths[i];

    tl.to(
      item,
      {
        xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
        duration: distanceToLoop / 100,
      },
      0
    ).fromTo(
      item,
      {
        xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
      },
      {
        xPercent: xPercents[i],
        duration:
          (totalWidth - distanceToLoop) / 100,
        immediateRender: false,
      },
      distanceToLoop / 100
    );

    times[i] = distanceToStart / 100;
  });

  tl.time(times[curIndex]);
  return tl;
}
