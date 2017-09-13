/**
 * Created by User on 2017/9/13.
 */
var docELe = document.documentElement,
  resizeEvt = "onorientationchange" in window ? "orientationchange" : "resize",
  recalc = function() {
    docELe.style.fontSize = 16 * (docELe.clientWidth / 375) + "px";
  };
document.addEventListener("DOMContentLoaded", recalc, false);
