//額外引入的 ScrollTrigger 與 TextPlugin 套件
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const typingline = gsap.timeline();

typingline.to(".p1", {
  text: "羨慕別人的酷酷網頁動畫?", //text屬性將自動為DOM元素嵌入我們所輸入的文字
  duration: 3.5,
  repeat: -1,
  scrollTrigger: {
    trigger: ".p1",
    toggleActions: "play pause resume reset", //見備註
  },
});
typingline.fromTo(
  ".cursor",
  0,
  {
    visibility: "hidden",
  },
  {
    visibility: "visible",
    repeat: -1,
    yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
    repeatDelay: 0.3, // 下一次repeat的delay時間
  }
);
typingline.to(
  ".p2",
  {
    text: "滿足不了同事的許願？",
    repeat: -1,
    duration: 3.5,

    scrollTrigger: {
      trigger: ".p2",
      toggleActions: "play pause resume reset",
    },
  },
  "<"
);
typingline.to(
  ".p3",
  {
    text: "動畫技能樹太雜無從下手？",
    repeat: -1,
    duration: 3.5,

    scrollTrigger: {
      trigger: ".p2",
      toggleActions: "play pause resume reset",
    },
  },
  "<"
);
typingline.fromTo(
  ".imgho",
  0,
  {
    visibility: "hidden",
  },
  {
    visibility: "visible",
    repeat: -1,
    yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
    repeatDelay: 0.6, // 下一次repeat的delay時間
  },
  "<"
);

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

ScrollTrigger.create({
  //以box2作為觸發時機
  trigger: box1,
  markers: false,

  //向下滾動進入start點時觸發callback
  onEnter: function () {
    animated(box1);
  },

  //向下滾動超過end點時觸發callback
  onLeave: function () {
    hide(box1);
  },

  //向上滾動超過end點時觸發（回滾時觸發）callback
  onEnterBack: function () {
    animated(box1);
  },
});
ScrollTrigger.create({
  //以box2作為觸發時機
  trigger: box2,
  markers: false,

  //向下滾動進入start點時觸發callback
  onEnter: function () {
    animatedbac(box2);
  },

  //向下滾動超過end點時觸發callback
  onLeave: function () {
    hide(box2);
  },

  //向上滾動超過end點時觸發（回滾時觸發）callback
  onEnterBack: function () {
    animatedbac(box2);
  },
});
ScrollTrigger.create({
  //以box2作為觸發時機
  trigger: box3,
  markers: false,

  //向下滾動進入start點時觸發callback
  onEnter: function () {
    animated(box3);
  },

  //向下滾動超過end點時觸發callback
  onLeave: function () {
    hide(box3);
  },

  //向上滾動超過end點時觸發（回滾時觸發）callback
  onEnterBack: function () {
    animated(box3);
  },
});
function animated(element) {
  let x = -300;

  //設定元素初始值
  element.style.transform = `translate(${x}px, 0px)`;

  gsap.fromTo(
    element,
    { x: x, y: 0, opacity: 0, visibility: "hidden" },
    {
      duration: 4,
      delay: 0.2,
      x: 0,
      y: 0,
      visibility: "visible",
      opacity: "1",
      ease: "expo", // 元素的運動速度變化
      overwrite: "auto",
    }
  );
}
function animatedbac(element) {
  let x = 300;

  //設定元素初始值
  element.style.transform = `translate(${x}px, 0px)`;

  gsap.fromTo(
    element,
    { x: x, y: 0, opacity: 0, visibility: "hidden" },
    {
      duration: 4,
      delay: 0.2,
      x: 0,
      y: 0,
      visibility: "visible",
      opacity: "1",
      ease: "expo", // 元素的運動速度變化
      overwrite: "auto",
    }
  );
}
function hide(element) {
  gsap.set(element, { opacity: 0, visibility: "hidden" });
}
