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
