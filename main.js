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
const btnIconContainerEl = document.getElementById("btnIconContainer");

const STRENGTH_LIST_DEFAULT_CLASS = "str-result-ticks";
const STRENGTH_LIST_TOO_WEAK_CLASS = "too-weak";
const STRENGTH_LIST_WEAK_CLASS = "weak";
const STRENGTH_LIST_MEDIUM_CLASS = "medium";
const STRENGTH_LIST_STRONG_CLASS = "strong";

const STRENGTH_NAME_TOO_WEAK = "TOO WEAK";
const STRNEGTH_NAME_WEAK = "WEAK";
const STRENGTH_NAME_MEDIUM = "MEDIUM";
const STRENGTH_NAME_STRONG = "STRONG";

const strengthListEl = document.getElementById("strengthList");
const strengthNameEl = document.getElementById("strengthName");

let isGenerated = false;
let isCopied = false;
let complexityScore = 5;

let outputPwdVal = "P4$5W0rD!";
let inputLengthVal = 10;
let checkUppercaseVal = false;
let checkLowercaseVal = false;
let checkNumbersVal = false;
let checkSymbolsVal = false;

computeComplexityScore();
updateUi();

inputLengthEl.addEventListener("input", () => {
  inputLengthVal = inputLengthEl.value;
  computeComplexityScore();

  updateInputLengthUi();
  updateInputLengthResultUi();
  updateComplexityUi();
});

checkUppercaseEl.addEventListener("change", () => {
  checkUppercaseVal = checkUppercaseEl.checked;
  computeComplexityScore();

  updateComplexityUi();
});

checkLowercaseEl.addEventListener("change", () => {
  checkLowercaseVal = checkLowercaseEl.checked;
  computeComplexityScore();

  updateComplexityUi();
});

checkNumbersEl.addEventListener("change", () => {
  checkNumbersVal = checkNumbersEl.checked;
  computeComplexityScore();

  updateComplexityUi();
});

checkSymbolsEl.addEventListener("change", () => {
  checkSymbolsVal = checkSymbolsEl.checked;
  computeComplexityScore();

  updateComplexityUi();
});

btnGenerateEl.addEventListener("click", (ev) => {
  isGenerated = true;
  isCopied = false;

  updateOutputPwdUi();
  updateBtnIconUi();
});

btnIconEl.addEventListener("click", (ev) => {
  isCopied = true;

  updateBtnIconUi();
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

  if (isGenerated) {
    outputPwdEl.classList.add("pwd--generated");
  }
}

function updateBtnIconUi() {
  if (isCopied) {
    btnIconContainerEl.classList.add("done");
    return;
  }

  btnIconContainerEl.classList.remove("done");
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
  updateComplexityUi();

  updateOutputPwdUi();
  updateBtnIconUi();

  updateInputLengthUi();
  updateInputLengthResultUi();

  updateCheckUppercaseUi();
  updateCheckLowercaseUi();
  updateCheckNumbersUi();
  updateCheckSymbolsUi();
}

function computeComplexityScore() {
  let score = 0;
  if (inputLengthVal < 8) {
    complexityScore = score;
    return;
  }

  score = 1;
  if (checkUppercaseVal) {
    score += 1;
  }

  if (checkLowercaseVal) {
    score += 1;
  }

  if (checkNumbersVal) {
    score += 1;
  }

  if (checkSymbolsVal) {
    score += 1;
  }

  complexityScore = score;
}

function updateComplexityUi() {
  let resultClassName = `${STRENGTH_LIST_DEFAULT_CLASS}`;
  let resultStrengthName = STRENGTH_NAME_TOO_WEAK;

  if (complexityScore === 0) {
    resultClassName = `${STRENGTH_LIST_DEFAULT_CLASS} ${STRENGTH_LIST_TOO_WEAK_CLASS}`;
    resultStrengthName = STRENGTH_NAME_TOO_WEAK;
  }
  if (complexityScore >= 1) {
    resultClassName = `${STRENGTH_LIST_DEFAULT_CLASS} ${STRENGTH_LIST_WEAK_CLASS}`;
    resultStrengthName = STRNEGTH_NAME_WEAK;
  }
  if (complexityScore >= 3) {
    resultClassName = `${STRENGTH_LIST_DEFAULT_CLASS} ${STRENGTH_LIST_MEDIUM_CLASS}`;
    resultStrengthName = STRENGTH_NAME_MEDIUM;
  }
  if (complexityScore >= 5) {
    resultStrengthName = STRENGTH_NAME_STRONG;
    resultClassName += `${STRENGTH_LIST_DEFAULT_CLASS} ${STRENGTH_LIST_STRONG_CLASS}`;
  }

  strengthListEl.classList = resultClassName;
  strengthNameEl.textContent = resultStrengthName;
}
