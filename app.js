// DOM Variables
const dieContainer = document.querySelector(".die-container");
const generateBtn = document.querySelector(".generate-btn");
const rerollBtn = document.querySelector(".reroll-btn");
const sumBtn = document.querySelector(".sum-btn");

// Tracker
const dieTotal = document.querySelector(".die-total-num");

// The Die Class

class Die {
  constructor() {
    // Create dies

    this.value = this.roll(1, 7);
    this.die = document.createElement("div");
    this.die.className = "die";
    this.die.textContent = this.value;
    dieContainer.appendChild(this.die);

    // Change die number individually

    this.die.addEventListener("click", () => {
      this.die.textContent = this.roll(1, 7);
      this.value = Number(this.die.textContent);
    });

    // Reroll all dies

    rerollBtn.addEventListener("click", () => {
      this.die.textContent = this.roll(1, 7);
      this.value = Number(this.die.textContent);
    });

    // Remove a die
    this.die.addEventListener("dblclick", (e) => {
      const allDie = document.querySelectorAll(".die");
      allDie.forEach((all) => {
        if (all === e.target) {
          e.target.remove();
        }
      });
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

// Get the sum of all dies

sumBtn.addEventListener("click", sumDice);

function sumDice() {
  let updatedTotal = 0;
  const dice = document.querySelectorAll(".die");
  console.log(dice);

  dice.forEach((die) => {
    updatedTotal += Number(die.textContent);
  });

  dieTotal.innerHTML = `The total is: <span class="highlight">${updatedTotal}</span>`;

  const highlight = document.querySelector(".highlight");
  highlight.style.color = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

// Change the total num's color

function randomRGB() {
  return Math.floor(Math.random() * 255);
}
