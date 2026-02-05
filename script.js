// // 🎈 Balloons
// const balloons = document.querySelector(".balloons");

// for (let i = 0; i < 15; i++) {
//   const b = document.createElement("div");
//   b.className = "balloon";
//   b.style.left = Math.random() * 100 + "%";
//   b.style.animationDuration = 6 + Math.random() * 8 + "s";
//   balloons.appendChild(b);
// }

// // ⏳ Countdown
// const countdown = document.getElementById("countdown");

// function updateCountdown() {
//   const now = new Date();
//   const midnight = new Date();
//   midnight.setHours(24,0,0,0);

//   const diff = midnight - now;

//   const h = Math.floor(diff/1000/60/60);
//   const m = Math.floor(diff/1000/60)%60;
//   const s = Math.floor(diff/1000)%60;

//   countdown.innerHTML = `${h}h ${m}m ${s}s`;
// }
// setInterval(updateCountdown,1000);

// // 🎵 Music
// const music = document.getElementById("music");
// const musicBtn = document.querySelector(".music-player");

// musicBtn.onclick = () => {
//   if(music.paused){
//     music.play();
//   } else {
//     music.pause();
//   }
// };

// // 🎁 Surprise
// document.getElementById("surpriseBtn").onclick = () => {
//   alert("🎉 SURPRISE!!! Have the best birthday ever!!! 🎂🥳");
// };

// // 🌗 Theme Toggle
// const toggle = document.getElementById("themeToggle");

// toggle.onclick = () => {
//   document.body.classList.toggle("dark");
// };

// // ✍ Typing Effect
// const text = "🎉 Happy Birthday Alex 🎂";
// let i = 0;
// const el = document.getElementById("typingText");
// el.innerHTML = "";

// function type() {
//   if (i < text.length) {
//     el.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(type, 100);
//   }
// }
// type();

// 🌸 Flower Blast on Celebrate Button

// const celebrateBtn = document.getElementById("celebrateBtn");

// celebrateBtn.addEventListener("click", (e) => {
//   for (let i = 0; i < 35; i++) {
//     const flower = document.createElement("div");
//     flower.className = "flower";

//     const flowers = ["🌸","🌼","🌺","💐","🌷","🌻"];
//     flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

//     const x = (Math.random() - 0.5) * 600;
//     const y = (Math.random() - 0.5) * 600;

//     flower.style.setProperty("--x", `${x}px`);
//     flower.style.setProperty("--y", `${y}px`);

//     flower.style.left = e.clientX + "px";
//     flower.style.top = e.clientY + "px";

//     document.body.appendChild(flower);

//     setTimeout(() => flower.remove(), 2000);
//   }
// });

// 🌸 FULL SCREEN Flower Rain on Celebrate

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {

  const flowers = ["🌸","🌼","🌺","💐","🌷","🌻"];

  for (let i = 0; i < 160; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";

    flower.innerText =
      flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = "-40px";

    flower.style.animationDuration =
      2 + Math.random() * 3 + "s";

    flower.style.fontSize =
      18 + Math.random() * 24 + "px";

    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 4000);
  }
});
