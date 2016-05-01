var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes rotateIn {
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
}

.rotateIn extends .animated {
  animation-name: rotateIn;
}

@keyframes rotateInDownLeft {
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownLeft extends .animated {
  animation-name: rotateInDownLeft;
}

@keyframes rotateInDownRight {
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInDownRight extends .animated {
  animation-name: rotateInDownRight;
}

@keyframes rotateInUpLeft {
  from {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpLeft extends .animated {
  animation-name: rotateInUpLeft;
}

@keyframes rotateInUpRight {
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}

.rotateInUpRight extends .animated {
  animation-name: rotateInUpRight;
}
`