console.log("Hello world!");

const inputLengthEl = document.getElementById("inputLength");
const inputLengthResultEl = document.getElementById("inputLengthResult");

console.log(inputLengthEl, inputLengthResultEl);

inputLengthResultEl.textContent = inputLengthEl.value;

inputLengthEl.addEventListener("input", (ev) => {
  inputLengthResultEl.textContent = inputLengthEl.value;

  let minLimit = inputLengthEl.min;
  let maxLimit = inputLengthEl.max;
  console.log(minLimit);
  let x = inputLengthEl.value - minLimit;

  let percent = (x * 100.0) / (maxLimit - minLimit);
  console.log(`${percent}%`);

  inputLengthEl.style.setProperty("--range-percentage", `${percent}%`);
});
