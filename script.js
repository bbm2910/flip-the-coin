//global variables
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const headsCount = document.querySelector(".headsCount");
const tailsCount = document.querySelector(".tailsCount");

//create an object to trakc the results
const obj = { record: [], headsCount: 0, tailsCount: 0 };

function coinFlip() {
  if (Math.floor(Math.random() * 2 + 1) === 1) {
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
}

//spin the coin
btn.addEventListener("click", () => {
  console.log(coinFlip(1));
});
