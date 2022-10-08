export default `
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap');
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #181818;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Raleway !important;
}
.loading {
  font-size: 44px;
  font-weight: 800;
  text-align: center;
}
span {
    display: inline-block;
    margin: 0 -.05em;
    color: #fff !important;
  }
/* code #5 */
.loading05 {
  perspective: 1000px;
}
.loaderText {
    transform-origin: 50% 50% -25px;
    transform-style: preserve-3d;
    animation: loading05 1.6s infinite;
  }
  .loaderText:nth-child(2) {
\t animation-delay: 0.1s;
}
 .loaderText:nth-child(3) {
\t animation-delay: 0.2s;
}
 .loaderText:nth-child(4) {
\t animation-delay: 0.3s;
}
 .loaderText:nth-child(5) {
\t animation-delay: 0.4s;
}
 .loaderText:nth-child(6) {
\t animation-delay: 0.5s;
}
 .loaderText:nth-child(7) {
\t animation-delay: 0.6s;
}
@keyframes loading05 {
  0% {
    transform: rotateX(-360deg);
  }
  70% {
    transform: rotateX(0);
  }
}
@media screen and (max-width: 600px) {
  .loading {
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-top: 10px;
}
}`;