function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let settion = "AM";

  if (h === 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    settion = "PM"
  }
  
  h = h < 10 ? `0${h}` : h
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s

  let display = document.querySelector(".clock")
  display.innerText = `${h}:${m}:${s} ${settion}`
}
setInterval(showTime, 1000);
