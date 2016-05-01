var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut extends .animated {
  animation-name: zoomOut;
}

@keyframes zoomOutDown {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutDown extends .animated {
  animation-name: zoomOutDown;
}

@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(-2000px, 0, 0);
    transform-origin: left center;
  }
}

.zoomOutLeft extends .animated {
  animation-name: zoomOutLeft;
}

@keyframes zoomOutRight {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(.1) translate3d(2000px, 0, 0);
    transform-origin: right center;
  }
}

.zoomOutRight extends .animated {
  animation-name: zoomOutRight;
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  to {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform-origin: center bottom;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomOutUp extends .animated {
  animation-name: zoomOutUp;
}
`