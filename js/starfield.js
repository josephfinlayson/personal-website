console.log("Great you're looking at my code, but this isn't normally what I'd do on a production project")

// to monitor window width modification and repaint

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 17);
    });
}



var ngn = {};
ngn.setup = function () {
  if (!window.innerWidth) {
    setTimeout(ngn.setup, 500);
    return;
  }

  var w = document.querySelector('.component-fullscreen').clientWidth;
  var h = window.innerHeight ;
  var cw = w / 2;
  var ch = h / 2;

  var canvas = document.querySelector("#starfield");

  canvas.width = w;
  canvas.height = h;
  var canvasContext = canvas.getContext("2d");
  canvasContext.fillStyle = "#000";
  canvasContext.strokeStyle = "#fff";
  canvasContext.globalAlpha = 0.5;
  canvasContext.translate(cw, ch);
  var p = 10;
  var s = 0.185;
  var starsArr = [];
  var numStars = 256;

  function recycle(star) {
    star.x = (Math.random() - 0.5) * w * p;
    star.y = (Math.random() - 0.5) * h * p;
    star.a = p;
    star.b = 0;
    star.c = 0;
  }

  for (var i = 0, star; i < numStars; i++) {
    star = {};
    recycle(star);
    starsArr.push(star);
  }
  (function onF() {
    window.requestAnimationFrame(onF, canvas);
    canvasContext.fillRect(-cw, -ch, w, h);
    for (i = 0; i < numStars; i++) {
      var star = starsArr[i];
      var x = star.x / star.a;
      var y = star.y / star.a;
      if (star.b !== 0) {
        canvasContext.beginPath();
        canvasContext.moveTo(x, y);
        canvasContext.lineTo(star.b, star.c);
        canvasContext.stroke();
      }
      star.b = x;
      star.c = y;
      star.a -= s;
      if (star.a < s || star.b > cw || star.c > ch || star.b < -cw || star.c < -ch) {
        recycle(star);
      }
    }
  }());// end animation loop
}

if (document.readyState === 'complete') {
  ngn.setup();
} else {
  window.onload = function () {
    ngn.setup();
  };
}