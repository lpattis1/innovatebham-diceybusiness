// DOM Variables
const dieContainer = document.querySelector(".die-container");
const generateBtn = document.querySelector(".generate-btn");
const rerollBtn = document.querySelector(".reroll-btn");
const sumBtn = document.querySelector(".sum-btn");

// Tracker
let total = [];

// The Die Class

class Die {
  constructor() {
    this.value = this.roll(1, 7);

    this.die = document.createElement("div");
    this.die.className = "die";
    this.die.textContent = this.value;
    dieContainer.appendChild(this.die);

    this.die.addEventListener("click", () => {
      this.die.textContent = this.roll(1, 7);
      this.value = Number(this.die.textContent);
    });

    // Reroll all dies

    rerollBtn.addEventListener("click", () => {
      this.die.textContent = this.roll(1, 7);
      this.value = Number(this.die.textContent);
    });
  }

  roll(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

// Generate new dies on click

generateBtn.addEventListener("click", generateDie);

function generateDie() {
  const newDie = new Die();
}
