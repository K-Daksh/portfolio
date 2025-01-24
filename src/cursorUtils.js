export function enableGlobalCustomCursorBlack() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
* {
  cursor: url("/cursor.svg") 4 4, auto !important;
}
*[style*="cursor: pointer"],
button,
a,
input[type="submit"],
input[type="button"],
[role="button"] {
  cursor: url("/cursorPointer.svg") 3.5 3.5, pointer !important;
}`;
  document.head.appendChild(styleElement);
}

export function enableGlobalCustomCursorBlue() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
* {
  cursor: url("/cursorBlue.svg") 4 4, auto !important;
}
*[style*="cursor: pointer"],
button,
a,
input[type="submit"],
input[type="button"],
[role="button"] {
  cursor: url("/cursorPointerBlue.svg") 3.5 3.5, pointer !important;
}`;
  document.head.appendChild(styleElement);
}

export function enableGlobalCustomCursorYellow() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
* {
  cursor: url("/cursorYellow.svg") 4 4, auto !important;
}
*[style*="cursor: pointer"],
button,
a,
input[type="submit"],
input[type="button"],
[role="button"] {
  cursor: url("/cursorPointerYellow.svg") 3.5 3.5, pointer !important;
}`;
  document.head.appendChild(styleElement);
}

export function enableGlobalCustomCursorFunk() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
* {
  cursor: url("/cursorFunk.svg") 4 4, auto !important;
}
`;
  document.head.appendChild(styleElement);
}

export function enableGlobalCustomCursorHappy() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
* {
  cursor: url("/cursorHappy.svg") 4 4, auto !important;
}
`;
  document.head.appendChild(styleElement);
}
