var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes rotateOut {
  from {
    transform-origin: center;
    opacity: 1;
  }

  to {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.rotateOut extends .animated {
  animation-name: rotateOut;
}

@keyframes rotateOutDownLeft {
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.rotateOutDownLeft extends .animated {
  animation-name: rotateOutDownLeft;
}

@keyframes rotateOutDownRight {
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutDownRight extends .animated {
  animation-name: rotateOutDownRight;
}

@keyframes rotateOutUpLeft {
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.rotateOutUpLeft extends .animated {
  animation-name: rotateOutUpLeft;
}

@keyframes rotateOutUpRight {
  from {
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.rotateOutUpRight extends .animated {
  animation-name: rotateOutUpRight;
}
`