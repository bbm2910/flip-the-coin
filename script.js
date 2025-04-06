// Global variables
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const headsCount = document.querySelector(".headsCount");
const tailsCount = document.querySelector(".tailsCount");
const coin = document.querySelector(".coin"); // FIXED: this was missing

// Create an object to track the results
const obj = { record: [], headsCount: 0, tailsCount: 0 };

function coinFlip() {
  // Restart the animation
  coin.classList.remove("flipping");
  void coin.offsetWidth;
  coin.classList.add("flipping");

  // Flip logic
  setTimeout(() => {
    if (Math.floor(Math.random() * 2) === 1) {
      obj.record.push("Heads");
      obj.headsCount++;
      result.textContent = "Heads!";
    } else {
      obj.record.push("Tails");
      obj.tailsCount++;
      result.textContent = "Tails!";
    }

    headsCount.textContent = obj.headsCount;
    tailsCount.textContent = obj.tailsCount;
  }, 500);
}

// Spin the coin on click
btn.addEventListener("click", coinFlip);
