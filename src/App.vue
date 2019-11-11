<template>
  <div id="app">
    <Navbar />
         <transition
      name="router-anim"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
      mode="out-in"
      >
        <router-view />
      </transition>
  </div>
</template>
 
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  },
};
</script>

<style lang="scss">
@import "./styles/main.css";
#app {
  background-color: #000;
  overflow: hidden;
}
</style>
