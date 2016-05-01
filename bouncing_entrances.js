var csjs = require('csjs')
module.exports = csjs`
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn extends .animated {
  animation-name: bounceIn;
}

@keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: none;
  }
}

.bounceInDown extends .animated {
  animation-name: bounceInDown;
}

@keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: none;
  }
}

.bounceInLeft extends .animated {
  animation-name: bounceInLeft;
}

@keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  to {
    transform: none;
  }
}

.bounceInRight extends .animated {
  animation-name: bounceInRight;
}

@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp extends .animated {
  animation-name: bounceInUp;
}
`