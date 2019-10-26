<template>
  <div class="form-container" @mousemove="mousemove">
    <div class="container-sides">
      <div class="left-container">
        <form @submit.prevent="formSubmit">
          <div>
            <label for>Hello. My name is</label>
            <input v-model="name" type="text" @focus="errorBorder" :class="{'red-border': inputError}" autofocus placeholder="person/company" />
          </div>
          <div class="interested">
            <label>Interested in</label>
            <div class="dropdown">
              <div class="row">
                <p class="wrap">Web Development</p>
                <div class="down2"></div>
              </div>
              <div class="list" style="display:none">
                <ul>
                  <li>Web Development</li>
                  <li>Design</li>
                  <li>Branding</li>
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
            <label for>Contact me at</label>
            <input v-model="contact" type="text"  @focus="errorBorder" :class="{'red-border': inputError}" placeholder="phone/email" />
          </div>
          <textarea v-model="task" placeholder="Tell us more"></textarea>
          <button type="submit" @click="checkForm">Submit</button>
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
    <div class="background" v-show="checkForm()">
    <div class="thanks">
      <img src="../styles/images/close.png">
      <p>thank you</p>
      <p>we will answer you in few minutes</p>
    </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: "form",
  components: {},
  data() {
    return {
      name: null,
      budget: null,
      deadline: null,
      contact: null,
      task: null,
      output: null,
      inputError: true
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      console.log(this.name);
      let currentObj = this;

      this.$axios
        .post("http://test.sharksteam.com.ua/test.php", {
          name: this.name,
          budget: this.budget,
          deadline: this.deadline,
          contact: this.contact,
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
    errorBorder(e){
      this.inputError = true;
      e.target.classList.remove('red-border')
    },
    checkForm(e){
      if (this.name && this.contact) {
        return true;
      }
      if(!this.name || !this.contact){
        this.inputError = false;
      }
    }
  }
};
</script>
<style>
.red-border {
  border: 1px solid #f00;
}
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.9;
  z-index: 999;
}
.thanks {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 40%;
  height: 37%;
  padding: 15px 23px;
  background-color: rgb(255, 255, 255);
  color: rgb(119, 0, 255);
  font-family: "Archivo Black", sans-serif;
  box-sizing: border-box;
  opacity: 1;
}
.thanks p:first-of-type {
  font-size: 5.7em;
  line-height: 1em;
}
.thanks p:nth-of-type(2) {
  font-size: 1.6em;
}

.thanks img{
 position: relative;
left:93%;
margin-top:3%;
cursor:pointer;
}
</style>