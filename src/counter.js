export function setupCounter(element) {
  let count = 0
  const setCounter = (count) => {
    element.innerText = `count is ${count}`
  }
  element.addEventListener('click', () => {
    count++
    setCounter(count)
  })
  setCounter(0)
}

