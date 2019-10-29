<template>
  <div class="services-container">
    <div class="left-side">
      <transition
        appear
        mode="in-out"
        enter-active-class="animated zoomIn"
        leave-active-class="animated fadeOutLeft"
      >
        <img :src="getSrc" class="img-container" />
      </transition>
    </div>
    <div class="right-side">
      <transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
      >
        <div class="service1" v-if="showDesc1" :class="{active: showDesc1}">
          <h4>
            <b>01</b>content creation
            <div class="closer" @click="showDesc1=false"></div>
          </h4>
          <p>
            Content creation is the process of generating topic ideas that
            appeal to your buyer persona, creating written or visual content
            around those ideas, and making that information accessible to your
            audience as a blog, video, infographic, or other format.
          </p>

          <div class="card">
            <router-link tag="a" to="/form">contact us</router-link>
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
      >
        <div class="service2" v-if="showDesc2" :class="{active: showDesc2}">
          <h4>
            <b>02</b>marketing
            <div class="closer" @click="showDesc2=false"></div>
          </h4>
          <p>
            A marketing strategy refers to a business' overall game plan for
            reaching prospective consumers and turning them into customers of
            the products or services the business provides. A marketing strategy
            contains the company’s value proposition, key brand messaging and other high-level elements.
          </p>

          <div class="card">
            <router-link tag="a" to="/form">contact us</router-link>
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
      >
        <div class="service3" v-if="showDesc3" :class="{active: showDesc3}">
          <h4>
            <b>03</b>web development
            <div class="closer" @click="showDesc3=false"></div>
          </h4>
          <p>
            Web development broadly refers to the tasks associated with
            developing websites for hosting via internet. The web
            development process includes web design, web content development,
            client-side/server-side scripting and network security
            configuration, among other tasks.
          </p>

          <div class="card">
            <router-link tag="a" to="/form">contact us</router-link>
          </div>
        </div>
      </transition>
      <transition
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutDown"
      >
        <div class="service4"  v-if="showDesc4" :class="{active: showDesc4}">
          <h4>
            <b>04</b>branding
            <div class="closer" @click="showDesc4=false"></div>
          </h4>
          <p>
            Branding, by definition, is a marketing practice in which a company
            creates a name, symbol or design that is easily identifiable as
            belonging to the company. This helps to identify a product and
            distinguish it from other products and services.
          </p>

          <div class="card">
            <router-link tag="a" to="/form">contact us</router-link>
          </div>
        </div>
      </transition>
      <ul>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutLeft"
        >
          <li @click="showDescription1" @mouseover="changeImage(image1)">
            <img src="../styles/images/9.gif" alt="gif2" />
            <b>01</b>content creation
          </li>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInRight delay-1s"
          leave-active-class="animated fadeOutLeft"
        >
          <li @click="showDescription2" @mouseover="changeImage(image2)">
            <b>02</b>marketing
            <img src="../styles/images/6.gif" alt="gif2" />
          </li>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInRight delay-2s"
          leave-active-class="animated fadeOutLeft"
        >
          <li @click="showDescription3" @mouseover="changeImage(image3)">
            <img src="../styles/images/5.gif" alt="gif2" />
            <b>03</b>web development
          </li>
        </transition>
        <transition
          appear
          mode="in-out"
          enter-active-class="animated fadeInRight delay-3s"
          leave-active-class="animated fadeOutLeft"
        >
          <li @click="showDescription4" @mouseover="changeImage(image4)">
            <b>04</b>branding
            <img src="../styles/images/8.gif" alt="gif2" />
          </li>
        </transition>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "services",
  components: {},
  data() {
    return {
      image: "9",
      showDesc1: false,
      showDesc2: false,
      showDesc3: false,
      showDesc4: false,
      image1: "9",
      image2: "8",
      image3: "5",
      image4: "6"
    };
  },
  computed: {
    getSrc: function() {
      return require(`../../public/${this.image}.gif`);
    }
  },
  methods: {
    showDescription1() {
      this.showDesc1 = !this.showDesc1;
    },
    showDescription2() {
      this.showDesc2 = !this.showDesc2;
    },
    showDescription3() {
      this.showDesc3 = !this.showDesc3;
    },
    showDescription4() {
      this.showDesc4 = !this.showDesc4;
    },
    changeImage(variantImage) {
      this.image = variantImage;
    }
  }
};
</script>
<style>
</style>