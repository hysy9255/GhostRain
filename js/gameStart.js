let gameStart = () => {
  let timeBoxElem = document.getElementById("timeBox");
  timeBoxElem.classList.toggle("invisible");

  let buttonElem = document.getElementById("startButton");
  buttonElem.classList.toggle("invisible");

  let timeElem = document.getElementById("time");
  let count = 60;
  let timer = setInterval(() => {
    timeElem.innerText = `Time Remaining: ${count}`;
    // console.log(count);
    count--;
    if (count === -1) {
      clearInterval(timer);
      setTimeout(() => {
        alert("Game Over!");
        location.reload();
      }, 1000);
    }
  }, 1000);

  init();

  let footerElem = document.getElementsByTagName("footer")[0];

  setInterval(() => {
    // total ghost created
    footerElem.children[0].innerText = `Total Ghost Created: ${countGhostCreated}`;
    // ghost killed
    footerElem.children[1].innerText = `Ghost Killed: ${countDeath}`;
    // ghost missed
    footerElem.children[2].innerText = `Ghost Missed: ${countMissed}`;
  }, 10);
};
