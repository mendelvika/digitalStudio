<template>
  <div class="main-page">
    <div class="main">
      <div class="text">
        <div class="main-header" data-text="digital">digital</div>
        <div class="main-header" data-text="studio">studio</div>
      </div>
      <div class="cube-container" @mouseover="mouseover" @mouseleave="mouseleave">
        <div class="scene">
          <div class="cube">
            <div class="cube__face cube__face--front">
              cr
              <br />ea
              <br />te
            </div>
            <div class="cube__face cube__face--back">
              de
              <br />ve
              <br />lop
            </div>
            <div class="cube__face cube__face--right">
              wo
              <br />rkh
              <br />ard
            </div>
            <div class="cube__face cube__face--left">
              fe
              <br />elg
              <br />ood
            </div>
            <div class="cube__face cube__face--top">
              de
              <br />ve
              <br />lop
            </div>
            <div class="cube__face cube__face--bottom">
              de
              <br />ve
              <br />lop
            </div>
          </div>
        </div>
      </div>
      <div class="down">
        <svg width="46" height="46" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>background</title>
            <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
          </g>
          <g>
            <title>Layer 1</title>
            <polygon
              id="svg_2"
              points="0.046,2.582 2.13,0.498 12.967,11.334 23.803,0.498 25.887,2.582 12.967,15.502  "
              fill="#ade529"
            />
            <polygon
              id="svg_3"
              points="0.046,13.582 2.13,11.498 12.967,22.334 23.803,11.498 25.887,13.582 12.967,26.502  "
              fill="#6e00ff"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      ax: 0,
      ay: 0
    };
  },
  methods: {
    mouseover: function(e) {
      this.ax = -(window.innerWidth / 2 - e.pageX) / 5;
      this.ay = (window.innerHeight / 2 - e.pageY) / 2.5;
      var cube = document.querySelector(".cube");
      cube.style.animation = "none";
      cube.style.transform =
        "rotateY(" + this.ax + "deg)" + "rotateX(" + this.ay + "deg)";
    },
    mouseleave: function(e) {
      // var cube = document.querySelector(".cube");
      // cube.style.animation = "spin 40s infinite linear";
       var style = document.createElement("style");
          var cube = document.querySelector(".cube");
    style.rel = "stylesheet";
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    style.sheet.insertRule(`\
    @keyframes anim {\
     0% { transform: rotateY(${this.ax}) rotateX(${this.ay});   }\
    100%  { transform: rotateY(360deg) rotateX(360deg);}\
    }`);
    cube.style.animation = "anim 60s infinite linear";
    }
  }
};
</script>
<style>
</style>
