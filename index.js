// Your code here

let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftPos = dodger.style.left.replace("px", "");
  let left = parseInt(leftPos, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
    let leftPos = dodger.style.left.replace("px", "");
    let left = parseInt(leftPos, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
