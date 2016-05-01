var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes bounceOut {
  20% {
    transform: scale3d(.9, .9, .9);
  }

  50%, 55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
}

.bounceOut extends .animated {
  animation-name: bounceOut;
}

@keyframes bounceOutDown {
  20% {
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.bounceOutDown extends .animated {
  animation-name: bounceOutDown;
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
}

.bounceOutLeft extends .animated {
  animation-name: bounceOutLeft;
}

@keyframes bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
}

.bounceOutRight extends .animated {
  animation-name: bounceOutRight;
}

@keyframes bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

.bounceOutUp extends .animated {
  animation-name: bounceOutUp;
}
`