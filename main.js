console.log("Hello world!");

const inputLengthEl = document.getElementById("inputLength");
const inputLengthResultEl = document.getElementById("inputLengthResult");

const outputPwdEl = document.getElementById("outputPwd");

const checkUppercaseEl = document.getElementById("checkUppercase");
const checkLowercaseEl = document.getElementById("checkLowercase");
const checkNumbersEl = document.getElementById("checkNumbers");
const checkSymbolsEl = document.getElementById("checkSymbols");

const btnIconEl = document.getElementById("btnIcon");
const btnGenerateEl = document.getElementById("btnGenerate");

let isGenerated = false;
let isCopied = false;

let outputPwdVal = "P4$5W0rD!";
let inputLengthVal = 12;
let checkUppercaseVal = false;
let checkLowercaseVal = false;
let checkNumbersVal = false;
let checkSymbolsVal = false;

updateUi();

inputLengthEl.addEventListener("input", () => {
  inputLengthVal = inputLengthEl.value;

  updateInputLengthUi();
  updateInputLengthResultUi();
});

checkUppercaseEl.addEventListener("change", () => {
  checkUppercaseVal = checkUppercaseEl.checked;
});

checkLowercaseEl.addEventListener("change", () => {
  checkLowercaseVal = checkLowercaseEl.checked;
});

checkNumbersEl.addEventListener("change", () => {
  checkNumbersVal = checkNumbersEl.checked;
});

checkSymbolsEl.addEventListener("change", () => {
  checkSymbolsVal = checkSymbolsEl.checked;
});

function updateCheckSymbolsUi() {
  checkSymbolsEl.checked = checkSymbolsVal;
}

function updateCheckNumbersUi() {
  checkNumbersEl.checked = checkNumbersVal;
}

function updateCheckUppercaseUi() {
  checkUppercaseEl.checked = checkUppercaseVal;
}

function updateCheckLowercaseUi() {
  checkLowercaseEl.checked = checkLowercaseVal;
}

function updateOutputPwdUi() {
  outputPwdEl.textContent = outputPwdVal;
}

function updateInputLengthUi() {
  inputLengthEl.value = inputLengthVal;
  updateInputLengthBarUi();
}

function updateInputLengthBarUi() {
  let minLimit = inputLengthEl.min;
  let maxLimit = inputLengthEl.max;
  let x = inputLengthVal - minLimit;

  let percent = (x * 100.0) / (maxLimit - minLimit);

  inputLengthEl.style.setProperty("--range-percentage", `${percent}%`);
}

function updateInputLengthResultUi() {
  inputLengthResultEl.textContent = inputLengthVal;
}

function updateUi() {
  updateOutputPwdUi();
  updateInputLengthUi();
  updateInputLengthResultUi();

  updateCheckUppercaseUi();
  updateCheckLowercaseUi();
  updateCheckNumbersUi();
  updateCheckSymbolsUi();
}
