var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn extends .animated {
  animation-name: fadeIn;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInDown extends .animated {
  animation-name: fadeInDown;
}

@keyframes fadeInDownBig {
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInDownBig extends .animated {
  animation-name: fadeInDownBig;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeft extends .animated {
  animation-name: fadeInLeft;
}

@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInLeftBig extends .animated {
  animation-name: fadeInLeftBig;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInRight extends .animated {
  animation-name: fadeInRight;
}

@keyframes fadeInRightBig {
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInRightBig extends .animated {
  animation-name: fadeInRightBig;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUp extends .animated {
  animation-name: fadeInUp;
}

@keyframes fadeInUpBig {
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.fadeInUpBig extends .animated {
  animation-name: fadeInUpBig;
}
`