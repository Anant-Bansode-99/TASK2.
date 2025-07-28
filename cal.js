const display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/%/g, "/100"));
  } catch {
    display.value = "Error";
  }
}

// Bonus: Keyboard support
document.addEventListener("keydown", function (e) {
  const allowedKeys = "0123456789/*-+.%";
  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
