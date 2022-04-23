const sample = document.getElementById("sample");

document.addEventListener("keypress", (e) => {
  if (e.length > 1) return;

  const errorText = document.createElement("span");

  errorText.textContent = e.key;
  errorText.classList.add("animate");

  sample.insertAdjacentElement("beforeend", errorText);

  setTimeout(() => {
    errorText.remove();
  }, 500);
});
