<template>
  <div class="form-container" @mousemove="mousemove">
    <div class="container-sides">
      <div class="left-container">
        <form @submit.prevent="validateForm" method="post">
          <div>
            <label for>Hello. My name is</label>
            <input
              v-model="name"
              name="name"
              type="text"
              @focus="errorBorder"
              :class="{'red-border': submitted && missingName}"
              autofocus
              placeholder="person/company"
            />
          </div>
          <div class="interested">
            <label>Interested in</label>
            <div class="dropdown">
              <div class="row" @click="showServices=!showServices">
                <p class="wrap">{{service}}</p>
                <div class="down2"></div>
              </div>
              <div class="list" v-show="showServices">
                <ul>
                  <li @click="innerServices">Web Development</li>
                  <li @click="innerServices">Design</li>
                  <li @click="innerServices">Branding</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <label for>My budget is</label>
            <input v-model="budget" type="text" placeholder="one billion dollars" />
          </div>
          <div>
            <label for>and I need it done by</label>
            <input v-model="deadline" type="text" placeholder="yesterday" />
          </div>
          <div>
            <label for="email">Contact me at</label>
            <input
              v-model="email"
              name="email"
              type="email"
              @focus="errorBorder"
              :class="{'red-border': submitted && missingEmail}"
              placeholder="email"
            />
          </div>
          <textarea v-model="task" type="text" placeholder="Tell us more"></textarea>
          <button type="submit">Submit</button>
          <pre>{{output}}</pre>
        </form>
      </div>
      <div class="right-container">
        <div class="yellow">
          <h1>let's</h1>
          <h1>create</h1>
          <h1>together</h1>
        </div>
        <div class="purple">
          <h1>let's</h1>
          <h1>create</h1>
          <h1>together</h1>
        </div>
      </div>
    </div>
    <div class="background" v-if="showThanks">
      <div class="thanks">
        <img src="../styles/images/closeYel.png" @click="showThanks=false" />
        <p>thank you</p>
        <p>we will answer you in few minutes</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "form",
  components: {},
  data() {
    return {
      name: "",
      budget: "",
      deadline: "",
      email: "",
      task: "",
      output: "",
      inputError: true,
      showThanks: false,
      submitted: false,
      showServices: false,
      service: "Web Development"
    };
  },
  computed: {
    missingName: function() {
      return this.name === "";
    },
    missingEmail: function() {
      return this.isEmail(this.email) === null;
    }
  },
  methods: {
    innerServices(event) {
      let items = document.querySelectorAll(".list ul li");
      let drop = document.querySelector("dropdown");
      if (items[0].contains(event.target)) {
        this.service = "Web Development";
        this.showServices = false;
      } else if (items[1].contains(event.target)) {
        this.service = "Design";
        this.showServices = false;
      } else if (items[2].contains(event.target)) {
        this.service = "Branding";
        this.showServices = false;
      }
    },
    isEmail: str => {
      let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return str.match(regexp);
    },
    validateForm(e) {
      this.submitted = true;
      if (this.missingName || this.missingEmail) {
        event.preventDefault();
      } else {
        this.formSubmit();
      }
    },
    formSubmit() {
      this.submitted = true;
      this.showThanks = true;
      let currentObj = this;

      this.$http
        .post("http://test.sharksteam.com.ua/test.php", {
          name: this.name,
          budget: this.budget,
          deadline: this.deadline,
          email: this.email,
          task: this.task
        })
        .then(function(response) {
          currentObj.output = response.data;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    },
    mousemove(e) {
      let yellow = document.querySelector(".yellow");
      let purple = document.querySelector(".purple");
      let ax = -(window.innerWidth / 2 - e.pageX) / 40;
      let ay = (window.innerHeight / 2 - e.pageY) / 20;
      purple.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg) translateX(${ax *
        -0.2}px) translateY(${ay * -0.6}px)`;
      yellow.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg) translateX(${ax *
        -0.2}px) translateY(${ay * 0.6}px)`;
    },
    errorBorder(e) {
      this.inputError = true;
      e.target.classList.remove("red-border");
    }
  }
};
</script>
<style>
.red-border {
  border-bottom: 1px solid #f00;
}
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.95;
  z-index: 999;
}
.thanks {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 570px;
  height: 37%;
  padding: 15px 23px;
  background: #000;
  color: rgb(115, 255, 0);
  font-family: "Archivo Black", sans-serif;
  box-sizing: border-box;
  opacity: 1;
  text-shadow: 0 0 10px rgba(132, 242, 30, 0.384),
    /* 0 0 21px rgba(125, 242, 30, 0.92),
  0 0 34px rgba(150, 242, 30, 0.78), */
      0 0 30px rgba(150, 242, 30, 0.562);
}
.thanks p:first-of-type {
  font-size: 5.7em;
  line-height: 1em;
}
.thanks p:nth-of-type(2) {
  font-size: 1.6em;
}

.thanks img {
  width: 20px;
  height: 20px;
  position: relative;
  left: 93%;
  margin-top: 3%;
  cursor: pointer;
}
@media screen and (max-width: 650px) {
  .thanks {
    width: 350px;
  }
  .thanks p:first-of-type {
    font-size: 3.5em;
    line-height: 1em;
  }
  .thanks p:nth-of-type(2) {
    font-size: 1em;
  }
}
@media screen and (max-width: 400px) {
  .thanks {
    width: 270px;
  }
  .thanks p:first-of-type {
    font-size: 2.6em;
    line-height: 1em;
  }
  .thanks p:nth-of-type(2) {
    font-size: 0.7em;
  }
  .thanks img {
  width: 15px;
  height: 15px;
  }
}
</style>