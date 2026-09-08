const card = document.getElementById("card");
const messageCard = document.getElementById("messageCard");
const questionCard = document.getElementById("questionCard");
const finalCard = document.getElementById("finalCard");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


// ==============================
// BUKA PESAN
// ==============================

openBtn.addEventListener("click", () => {

  card.classList.add("hidden");

  messageCard.classList.remove("hidden");

  createHearts(12);

});


// ==============================
// PESAN SELANJUTNYA
// ==============================

nextBtn.addEventListener("click", () => {

  messageCard.classList.add("hidden");

  questionCard.classList.remove("hidden");

  createHearts(15);

});


// ==============================
// TOMBOL "BOLEH"
// ==============================

yesBtn.addEventListener("click", () => {

  questionCard.classList.add("hidden");

  finalCard.classList.remove("hidden");

  createHearts(30);

});


// ==============================
// TOMBOL "NANTI DULU"
// ==============================

let noCount = 0;

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {

  noCount++;

  if (noCount >= 4) {

    noBtn.textContent = "Yaudah deh 😭";

    return;

  }

  const parent = noBtn.parentElement;

  const maxX = parent.clientWidth - noBtn.offsetWidth;

  const maxY = 120;

  const x = Math.random() * maxX - maxX / 2;

  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.transform =
    `translate(${x}px, ${y}px)`;

}


// ==============================
// FLOATING HEARTS
// ==============================

function createHeart() {

  const container =
    document.querySelector(".hearts");

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  const emojis = [
    "💗",
    "💕",
    "💖",
    "💘",
    "🌸",
    "✨"
  ];

  heart.textContent =
    emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.fontSize =
    (Math.random() * 15 + 12) + "px";

  heart.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

  container.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, 10000);

}


function createHearts(amount = 1) {

  for (let i = 0; i < amount; i++) {

    setTimeout(() => {

      createHeart();

    }, i * 150);

  }

}


// hati muncul terus
setInterval(() => {

  createHeart();

}, 1200);
