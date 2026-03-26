export function timer() {
  let ms = 0, sec = 0, min = 0, count;
  let totalSeconds = 0;
  const stopwatch = {
    start: function() {
      if (count) return;
      count = setInterval(() => {
        ms++;
        if (ms === 100) {
          ms = 0;
          sec++;
          totalSeconds++;
        }
        if (sec === 60) {
          sec = 0;
          min++;
        }
        const timeString = `${stopwatch.pad(min)}:${stopwatch.pad(sec)}:${stopwatch.pad(ms)}`;
        stopwatch.update(timeString);
      }, 10);
    },
    stop: function() {
      clearInterval(count);
      count = null;
    },
    reset: function() {
      ms = 0; sec = 0; min = 0;
      totalSeconds = 0;
      stopwatch.update("00:00:00");
    },
    update: function(txt) {
      const timerElem = document.getElementById("tiempo");
      if (timerElem) timerElem.textContent = txt;
    },
    pad: function(time) {
      return time < 10 ? "0" + time : time;
    },
    getSeconds: function() {
      return (min * 60 + sec + ms / 100).toFixed(2);
    }
  };
  return stopwatch;
}
