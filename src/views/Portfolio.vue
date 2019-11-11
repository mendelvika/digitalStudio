<template>
  <div class="portfolio-container" @mousemove="move">
    <div class="portfolio-header">portfolio</div>
    <div class="scene2" @wheel="onWheel">
      <div class="carousel" :style="wheel">
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/12.jpg" alt="portfolio project1" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/10.jpg" alt="portfolio project2" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/9.jpg" alt="portfolio project3" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/2.gif" alt="portfolio project4" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/11.jpg" alt="portfolio project5" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/fp.png" alt="portfolio project6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import vuewheel from "vuewheel";
Vue.use(vuewheel);
export default {
  name: "portfolio",
  components: {
    vuewheel
  },
  data() {
    return {
      deg: 60,
      w: 1024
    };
  },
  mounted() {
    var style = document.createElement("style");
    let carousel = document.querySelector(".carousel");
    style.rel = "stylesheet";
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    style.sheet.insertRule(`\
    @keyframes spin2 {\
     0% { transform: rotateY(${this.deg}deg}) ;   }\
     50%  { transform: rotateY(360deg);}\
    100%  { transform: rotateY(0deg);}\
    }`);
    carousel.style.animation = "spin2 100s infinite ease";
  },
  methods: {
    move(e) {
      let header = document.querySelector(".portfolio-header");
      var ax = -(window.innerWidth / 2 - e.pageX) / 60;
      var ay = (window.innerHeight / 2 - e.pageY) / 30;
      header.style.textShadow = `${ay + 10}px ${ax + 10}px 0px #6e16c0`;
    },
    onWheel: function(e) {
      let delta = e.deltaY || e.detail || e.wheelDelta;
      let carousel = document.querySelector(".carousel");
      if (delta > 0) this.deg += 2;
      else this.deg -= 2;
    }
  },
  computed: {
    wheel(e) {
      if (window.innerWidth > this.w) {
        return { transform: `rotateY(${this.deg * 5}deg)` };
      }
      if (window.innerWidth <= this.w) {
        return { transform: `rotateX(${this.deg * 5}deg)` };
      }
    }
  }
};
</script>
<style>
</style>