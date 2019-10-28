<template>
  <div class="portfolio-container" @mousemove="move">
      <div class="portfolio-header">portfolio</div>
    <div class="scene2" v-wheel.passive="onWheel">
      <div class="carousel">
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/fp.png" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/cat.png" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/10.jpg" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/9.jpg" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/2.gif" />
          </a>
        </div>
        <div class="carousel__cell">
          <a href="#">
            <img src="../styles/images/11.jpg" />
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
    return {};
  },
  methods: {
    move(e) {
      let header = document.querySelector(".portfolio-header");
      var ax = -(window.innerWidth / 2 - e.pageX) / 40;
      var ay = (window.innerHeight / 2 - e.pageY) / 20;
      header.style.textShadow = `${ay + 10}px ${ax + 10}px 0px #6e16c0`;
    },
    onWheel: function(e) {
      let delta = e.deltaY || e.detail || e.wheelDelta;
      let deg = 60;
      let carousel = document.querySelector(".carousel");
      if (delta > 0) deg += 0.5;
      else deg -= 0.5;
      carousel.style.animationPlayState = "paused";
      carousel.style.transform = `rotateY(${deg * 2}deg)`;
      e.preventDefault();
      let w = 1000;
      if (window.innerWidth < w) {
        carousel.style.transform = `rotateX(${deg * 2}deg)`;
      }
    }
  }
};
</script>
<style>
</style>