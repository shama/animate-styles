var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes slideOutDown {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
}

.slideOutDown extends .animated {
  animation-name: slideOutDown;
}

@keyframes slideOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}

.slideOutLeft extends .animated {
  animation-name: slideOutLeft;
}

@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight extends .animated {
  animation-name: slideOutRight;
}

@keyframes slideOutUp {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
}

.slideOutUp extends .animated {
  animation-name: slideOutUp;
}
`