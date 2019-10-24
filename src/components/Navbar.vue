<template>
  <div class="header">
    <div class="logo">DS</div>
    <nav :class="{visible: showMenu}">
      <ul @click="showMenu=false">
        <router-link tag="li" to="/" exact>
          <a href="#">main page</a>
        </router-link>
        <router-link tag="li" to="/services">
          <a href="#">services</a>
        </router-link>
        <router-link tag="li" to="/portfolio">
          <a href="#">portfolio</a>
        </router-link>
        <router-link tag="li" to="/form">
          <a href="#">contacts</a>
        </router-link>
      </ul>
      <div class="icons">
        <a href="https://www.instagram.com/mendel.v/?hl=ru" target="_blank">
          <img src="../styles/images/inst.png" alt="instagram" />
        </a>
        <a href="mailto:mendel.viktoia7@gmail.com" target="_blank"> 
          <img src="../styles/images/email.png" alt="email" />
        </a>
        <a href="tg://resolve?domain=mendelvika" target="_blank">
          <img src="../styles/images/telegram.png" alt="email" />
        </a>
      </div>
    </nav>
    <div class="burger" @click="showMenu = !showMenu" :class="{open: showMenu}">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  justify-content: space-between;
  width: 97%;
  display: flex;
  position: fixed;
  left: 50%;
  margin-left: -49%;
  background-color: transparent;
  padding: 20px;
  align-items: center; 
  // transform: translateX(1.5%);
  z-index: 5;
  font-family: "Poppins", sans-serif;
}
.logo {
      font-weight:900;
    text-align: center;
    text-transform: uppercase;
  margin-left: 35px;
  // border: 1px solid rgb(157, 255, 0);
  width: 57px;
  height: 57px;
  padding-top: 5px;
  display: inline-block;
  box-sizing: border-box;
  font-family: "MyWebFont";
  font-size: 36px;
  color: rgb(110, 22, 192);
}

nav {
  display: flex;
  align-items: center;
  ul {
    width: 600px;
    margin-right: 45px;
       display: flex;
    justify-content: space-between;
    list-style-type: none;
    li {
      transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
      height: 40px;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2em;
        transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
        &:hover {
          color: rgb(157, 255, 0);
        }
      }
    }
  }
}

.burger {
  display: none;
  width: 50px;
  height: 30px;
  position: relative;
  right: 0px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 10px;
    }

    &:nth-child(3) {
      top: 20px;
    }
  }
}
.burger.open span:nth-child(1) {
  top: 18px;
  transform: rotate(135deg);
}

.burger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.burger.open span:nth-child(3) {
  top: 18px;
  transform: rotate(-135deg);
}
.icons {
     display: flex;
    justify-content: space-between;
  height: 300px;
  flex-direction: column;
  position: absolute;
  right: 63px;
  bottom: -500px;
  a {
    img {
      width: 40px;
      height: 40px;
    &:hover {
      transform: translateX(-10px);
    }
    &:active {
      transform: scale(1.2);
    }
  }
}
}
@media screen and (max-width: 900px) {
  .burger {
    display: block;
  }
  nav {
    display: none;
    position: fixed;
    right: 0px;
    left: 0px;
    top: 0px;
    bottom: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(105%);
    transition: transform 0.6s ease;

    ul {
      margin: 70px 0px 10px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 450px;

      li {
        height: 100px;
        transition: all 0.25s ease;
        text-align: center;
        &:hover {
          transform: translateX(20px);
          transition: all 0.25s ease;
        }
        a {
          color:rgb(157, 255, 0);
          height: 100px;
          font-size: 4em;
          font-weight: 600;
          letter-spacing: 3px;
          text-align: center;
        }
      }
    }
  }
  nav.visible {
    transform: translateX(0%);
    transition: transform 0.6s ease;
  }
  .logo{
    margin-left: 5px;
  }
}
@media screen and (max-width: 1150px) {
  .icons {
    right: 50px;
  }
}
@media screen and (max-width: 1100px) {
  .icons {
    right: 50px;
  }
}
@media screen and (max-width: 900px) {
  .icons {
    flex-direction: row;
    z-index: 10;
    width: 320px;
    height: 50px;
    justify-content: space-between;
    right: 50%;
    transform: translateX(50%);
    bottom: 20px;
  }
  .header {
    padding: 17px;
  }
}
@media screen and (max-width: 475px) {
    nav {
    ul {
      height:67%;
      li {
         min-height:40px;
        a {
          font-size: 3em;
        }
      }
    }
  }
  .burger {
    right: 0px;
  }
  .icons {
    width: 250px;
     bottom: 10px;
  }
  .logo {
    margin-left: 15px;
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
  .burger {
    width: 40px;
    span {
      height: 2px;
    }
  }
}

@media screen and (max-width: 240px) {
  .burger {
    width: 30px;
    span {
      height: 2px;
      &:nth-child(1) {
        top: 0px;
      }

      &:nth-child(2) {
        top: 6px;
      }

      &:nth-child(3) {
        top: 12px;
      }
    }
  }
  .logo {
    margin-left: 15px;
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
}
@media screen and (max-width: 350px) {
  nav {
    ul {
      li {
        a {
          font-size: 2em;
          letter-spacing: 1px;
        }
      }
    }
  }
  .icons {
    width: 170px;
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>