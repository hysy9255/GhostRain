let gameStart = () => {
  let timeBoxElem = document.getElementById("timeBox");
  timeBoxElem.classList.toggle("invisible");

  let timeElem = document.getElementById("time");
  let count = 60;
  let timer = setInterval(() => {
    timeElem.innerText = `Time Remaining: ${count}`;
    console.log(count);
    count--;
    if (count === -1) {
      clearInterval(timer);
      setTimeout(() => {
        alert("와우!");
      }, 1000);
    }
  }, 1000);
};
