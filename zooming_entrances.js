var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn extends .animated {
  animation-name: zoomIn;
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInDown extends .animated {
  animation-name: zoomInDown;
}

@keyframes zoomInLeft {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInLeft extends .animated {
  animation-name: zoomInLeft;
}

@keyframes zoomInRight {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInRight extends .animated {
  animation-name: zoomInRight;
}

@keyframes zoomInUp {
  from {
    opacity: 0;
    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
  }

  60% {
    opacity: 1;
    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
  }
}

.zoomInUp extends .animated {
  animation-name: zoomInUp;
}
`