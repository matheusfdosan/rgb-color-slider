const output = document.querySelector("#output")

const inputs = document.querySelectorAll("input[type=range]")

for (const input of inputs) {
  input.addEventListener("input", color)
}

function color() {
  const red = document.querySelector("input#red").value
  const green = document.querySelector("input#green").value
  const blue = document.querySelector("input#blue").value

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

  output.innerHTML = `rgb(${red}, ${green}, ${blue})`
}

output.addEventListener("click", copyColor)

function copyColor() {
  const range = document.createRange()
  range.selectNode(output)

  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)

  document.execCommand("copy")
}
