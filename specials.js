var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes hinge {
  0% {
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  20%, 60% {
    transform: rotate3d(0, 0, 1, 80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }

  40%, 80% {
    transform: rotate3d(0, 0, 1, 60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.hinge extends .animated {
  animation-name: hinge;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@keyframes rollIn {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.rollIn extends .animated {
  animation-name: rollIn;
}

/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

@keyframes rollOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.rollOut extends .animated {
  animation-name: rollOut;
}
`