//額外引入的 ScrollTrigger 與 TextPlugin 套件
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// gsap.to(".hand", { width: 630, duration: 3, repeat: -1 });

// gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 5, repeat: -1 });
// const timeline = gsap.timeline(repeat: -1);
// timeline.to(".box", { x: 100, duration: 1 });
// timeline.to(".box", { y: 100, duration: 1 });
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".anitio", // 決定scrolltrigger要以哪一個元素作為觸發基準點
//     markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
//     start: "top 35%", // 決定動畫開始點的位置
//     end: "top 1%", // 決定動畫結束點的位置
//     scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
//   },
// });
// tl.to(".box1", {
//   backgroundColor: "yellow",
//   yPercent: "-50",
//   duration: 20,
// }).to(".box1", {
//   yPercent: "-50", // translate(0, -100%)
//   duration: 20,
//   position: "absolute",
//   backgroundColor: "red",
// });
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
