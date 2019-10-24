<template>
  <div class="form-container" @mousemove="mousemove">
    <div class="container-sides">
      <div class="left-container">
        <form @submit="formSubmit">
          <div>
            <label for>Hello. My name is</label>
            <input v-model="name" type="text" autofocus placeholder="person/company" />
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
            <input v-model="contact" type="text" placeholder="phone/email" />
          </div>
          <textarea v-model="task" placeholder="Tell us more"></textarea>
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "form",
  components: {},
  data() {
    return {
      name: "",
      budget: "",
      deadline: "",
      contact: "",
      task: "",
      output: ""
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      this.axios
        .get("http://test.sharksteam.com.ua/test.php", {
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
    }
  }
};
</script>
<style>
</style>