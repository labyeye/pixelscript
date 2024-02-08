function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./gate/0001.png
     ./gate/0002.png
     ./gate/0003.png
     ./gate/0004.png
     ./gate/0005.png
     ./gate/0006.png
     ./gate/0007.png
     ./gate/0008.png
     ./gate/0009.png
     ./gate/0010.png
     ./gate/0011.png
     ./gate/0012.png
     ./gate/0013.png
     ./gate/0014.png
     ./gate/0015.png
     ./gate/0016.png
     ./gate/0017.png
     ./gate/0018.png
     ./gate/0019.png
     ./gate/0020.png
     ./gate/0021.png
     ./gate/0022.png
     ./gate/0023.png
     ./gate/0024.png
     ./gate/0025.png
     ./gate/0026.png
     ./gate/0027.png
     ./gate/0028.png
     ./gate/0029.png
     ./gate/0030.png
     ./gate/0031.png
     ./gate/0032.png
     ./gate/0033.png
     ./gate/0034.png
     ./gate/0035.png
     ./gate/0036.png
     ./gate/0037.png
     ./gate/0038.png
     ./gate/0039.png
     ./gate/0040.png
     ./gate/0041.png
     ./gate/0042.png
     ./gate/0043.png
     ./gate/0044.png
     ./gate/0045.png
     ./gate/0046.png
     ./gate/0047.png
     ./gate/0048.png
     ./gate/0049.png
     ./gate/0050.png
     ./gate/0051.png
     ./gate/0052.png
     ./gate/0053.png
     ./gate/0054.png
     ./gate/0055.png
     ./gate/0056.png
     ./gate/0057.png
     ./gate/0058.png
     ./gate/0059.png
     ./gate/0060.png
     ./gate/0061.png
     ./gate/0062.png
     ./gate/0063.png
     ./gate/0064.png
     ./gate/0065.png
     ./gate/0066.png
     ./gate/0067.png
     ./gate/0068.png
     ./gate/0069.png
     ./gate/0070.png
     ./gate/0071.png
     ./gate/0072.png
     ./gate/0073.png
     ./gate/0074.png
     ./gate/0075.png

     ./plant/0001.png
     ./plant/0002.png
     ./plant/0003.png
     ./plant/0004.png
     ./plant/0005.png
     ./plant/0006.png
     ./plant/0007.png
     ./plant/0008.png
     ./plant/0009.png
     ./plant/0010.png
     ./plant/0011.png
     ./plant/0012.png
     ./plant/0013.png
     ./plant/0014.png
     ./plant/0015.png
     ./plant/0016.png
     ./plant/0017.png
     ./plant/0018.png
     ./plant/0019.png
     ./plant/0020.png
     ./plant/0021.png
     ./plant/0022.png
     ./plant/0023.png
     ./plant/0024.png
     ./plant/0025.png
     ./plant/0026.png
     ./plant/0027.png
     ./plant/0028.png
     ./plant/0029.png
     ./plant/0030.png
     ./plant/0031.png
     ./plant/0032.png
     ./plant/0033.png
     ./plant/0034.png
     ./plant/0035.png
     ./plant/0036.png
     ./plant/0037.png
     ./plant/0038.png
     ./plant/0039.png
     ./plant/0040.png
     ./plant/0041.png
     ./plant/0042.png
     ./plant/0043.png
     ./plant/0044.png
     ./plant/0045.png
     ./plant/0046.png
     ./plant/0047.png
     ./plant/0048.png
     ./plant/0049.png
     ./plant/0050.png
     ./plant/0051.png
     ./plant/0052.png
     ./plant/0053.png
     ./plant/0054.png
     ./plant/0055.png
     ./plant/0056.png
     ./plant/0057.png
     ./plant/0058.png
     ./plant/0059.png
     ./plant/0060.png
     ./plant/0061.png
     ./plant/0062.png
     ./plant/0063.png
     ./plant/0064.png
     ./plant/0065.png
     ./plant/0066.png
     ./plant/0067.png
     ./plant/0068.png
     ./plant/0069.png
     ./plant/0070.png
     ./plant/0071.png
     ./plant/0072.png
     ./plant/0073.png
     ./plant/0074.png
     ./plant/0075.png

     ./gold/0001.png
     ./gold/0002.png
     ./gold/0003.png
     ./gold/0004.png
     ./gold/0005.png
     ./gold/0006.png
     ./gold/0007.png
     ./gold/0008.png
     ./gold/0009.png
     ./gold/0010.png
     ./gold/0011.png
     ./gold/0012.png
     ./gold/0013.png
     ./gold/0014.png
     ./gold/0015.png
     ./gold/0016.png
     ./gold/0017.png
     ./gold/0018.png
     ./gold/0019.png
     ./gold/0020.png
     ./gold/0021.png
     ./gold/0022.png
     ./gold/0023.png
     ./gold/0024.png
     ./gold/0025.png
     ./gold/0026.png
     ./gold/0027.png
     ./gold/0028.png
     ./gold/0029.png
     ./gold/0030.png
     ./gold/0031.png
     ./gold/0032.png
     ./gold/0033.png
     ./gold/0034.png
     ./gold/0035.png
     ./gold/0036.png
     ./gold/0037.png
     ./gold/0038.png
     ./gold/0039.png
     ./gold/0040.png
     ./gold/0041.png
     ./gold/0042.png
     ./gold/0043.png
     ./gold/0044.png
     ./gold/0045.png
     ./gold/0046.png
     ./gold/0047.png
     ./gold/0048.png
     ./gold/0049.png
     ./gold/0050.png
     ./gold/0051.png
     ./gold/0052.png
     ./gold/0053.png
     ./gold/0054.png
     ./gold/0055.png
     ./gold/0056.png
     ./gold/0057.png
     ./gold/0058.png
     ./gold/0059.png
     ./gold/0060.png
     ./gold/0061.png
     ./gold/0062.png
     ./gold/0063.png
     ./gold/0064.png
     ./gold/0065.png
     ./gold/0066.png
     ./gold/0067.png
     ./gold/0068.png
     ./gold/0069.png
     ./gold/0070.png
     ./gold/0071.png
     ./gold/0072.png
     ./gold/0073.png
     ./gold/0074.png
     ./gold/0075.png

     ./robot/0001.png
     ./robot/0002.png
     ./robot/0003.png
     ./robot/0004.png
     ./robot/0005.png
     ./robot/0006.png
     ./robot/0007.png
     ./robot/0008.png
     ./robot/0009.png
     ./robot/0010.png
     ./robot/0011.png
     ./robot/0012.png
     ./robot/0013.png
     ./robot/0014.png
     ./robot/0015.png
     ./robot/0016.png
     ./robot/0017.png
     ./robot/0018.png
     ./robot/0019.png
     ./robot/0020.png
     ./robot/0021.png
     ./robot/0022.png
     ./robot/0023.png
     ./robot/0024.png
     ./robot/0025.png
     ./robot/0026.png
     ./robot/0027.png
     ./robot/0028.png
     ./robot/0029.png
     ./robot/0030.png
     ./robot/0031.png
     ./robot/0032.png
     ./robot/0033.png
     ./robot/0034.png
     ./robot/0035.png
     ./robot/0036.png
     ./robot/0037.png
     ./robot/0038.png
     ./robot/0039.png
     ./robot/0040.png
     ./robot/0041.png
     ./robot/0042.png
     ./robot/0043.png
     ./robot/0044.png
     ./robot/0045.png
     ./robot/0046.png
     ./robot/0047.png
     ./robot/0048.png
     ./robot/0049.png
     ./robot/0050.png
     ./robot/0051.png
     ./robot/0052.png
     ./robot/0053.png
     ./robot/0054.png
     ./robot/0055.png
     ./robot/0056.png
     ./robot/0057.png
     ./robot/0058.png
     ./robot/0059.png
     ./robot/0060.png
     ./robot/0061.png
     ./robot/0062.png
     ./robot/0063.png
     ./robot/0064.png
     ./robot/0066.png
     ./robot/0066.png
     ./robot/0067.png
     ./robot/0068.png
     ./robot/0069.png
     ./robot/0070.png
     ./robot/0071.png
     ./robot/0072.png
     ./robot/0073.png
     ./robot/0074.png
     ./robot/0075.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
// gsap.to("#page2", {
//   scrollTrigger: {
//     trigger: `#page2`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `#main`,
//   },
// });
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page4", {
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
// ./0200.png
//      ./0201.png
//      ./0202.png
//      ./0203.png
//      ./0204.png
//      ./0205.png
//      ./0206.png
//      ./0207.png
//      ./0208.png
//      ./0209.png
//      ./0210.png
//      ./0211.png
//      ./0212.png
//      ./0213.png
//      ./0214.png
//      ./0215.png
//      ./0216.png
//      ./0217.png
//      ./0218.png
//      ./0219.png
//      ./0220.png
//      ./0221.png
//      ./0222.png
//      ./0223.png
//      ./0224.png
//      ./0225.png
//      ./0226.png
//      ./0227.png
//      ./0228.png
//      ./0229.png
//      ./0230.png
//      ./0231.png
//      ./0232.png
//      ./0233.png
//      ./0234.png
//      ./0235.png
//      ./0236.png
//      ./0237.png
//      ./0238.png
//      ./0239.png
//      ./0240.png
//      ./0241.png
//      ./0242.png
//      ./0243.png
//      ./0244.png
//      ./0245.png
//      ./0246.png
//      ./0247.png
//      ./0248.png
//      ./0249.png
//      ./0250.png
//      ./0251.png
//      ./0252.png
//      ./0253.png
//      ./0254.png
//      ./0255.png
//      ./0256.png
//      ./0257.png
//      ./0258.png
//      ./0259.png
//      ./0260.png
//      ./0261.png
//      ./0262.png
//      ./0263.png
//      ./0264.png
//      ./0265.png
//      ./0266.png
//      ./0267.png
//      ./0268.png
//      ./0269.png
//      ./0270.png
//      ./0271.png
//      ./0272.png
//      ./0273.png
//      ./0274.png
//      ./0275.png
//      ./0276.png
//      ./0277.png
//      ./0278.png
//      ./0279.png
//      ./0280.png
//      ./0281.png
//      ./0282.png
//      ./0283.png
//      ./0284.png
//      ./0285.png
//      ./0286.png
//      ./0287.png
//      ./0288.png
//      ./0289.png
//      ./0290.png
//      ./0291.png
//      ./0292.png
//      ./0293.png
//      ./0294.png
//      ./0295.png
//      ./0296.png
//      ./0297.png
//      ./0298.png
//      ./0299.png
//      ./0300.png
//      ./0301.png
//       ./0302.png
//       ./0303.png
//       ./0304.png
//       ./0305.png
//       ./0306.png
//       ./0307.png
//       ./0308.png
//       ./0309.png
//       ./0310.png
//       ./0311.png
//       ./0312.png
//       ./0313.png
//       ./0314.png
//       ./0315.png
//       ./0316.png
//       ./0317.png
//       ./0318.png
//       ./0319.png
//       ./0320.png
//       ./0321.png
//       ./0322.png
//       ./0323.png
//       ./0324.png
//       ./0325.png
//       ./0326.png
//       ./0327.png
//       ./0328.png
//       ./0329.png
//       ./0330.png
//       ./0331.png
//       ./0332.png
//       ./0333.png
//       ./0334.png
//       ./0335.png
//       ./0336.png
//       ./0337.png
//       ./0338.png
//       ./0339.png
//       ./0340.png
//       ./0341.png
//       ./0342.png
//       ./0343.png
//       ./0344.png
//       ./0345.png
//       ./0346.png
//       ./0347.png
//       ./0348.png
//       ./0349.png
//       ./0350.png
//       ./0351.png
//       ./0352.png
//       ./0353.png
//       ./0354.png
//       ./0355.png
//       ./0356.png
//       ./0357.png
//       ./0358.png
//       ./0359.png
//       ./0360.png
//       ./0361.png
//       ./0362.png
//       ./0363.png
//       ./0364.png
//       ./0365.png
//       ./0366.png
//       ./0367.png
//       ./0368.png
//       ./0369.png
//       ./0370.png
//       ./0371.png
//       ./0372.png
//       ./0373.png
//       ./0374.png
//       ./0375.png
//       ./0376.png
//       ./0377.png
//       ./0378.png
//       ./0379.png
//       ./0380.png
//       ./0381.png
//       ./0382.png
//       ./0383.png
//       ./0384.png
//       ./0385.png
//       ./0386.png
//       ./0387.png
//       ./0388.png
