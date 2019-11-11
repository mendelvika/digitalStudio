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
        <router-link tag="li" to="/contacts">
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
.router-link-active{
  color:rgb(157, 255, 0);
}
.header {
  justify-content: space-between;
  width: 100%;
  display: flex;
  position: fixed;
  background-color: transparent;
  padding: 2%;
  align-items: center;
  z-index: 5;
  font-family: "Poppins", sans-serif;
}
.logo a {
  margin-left: 20px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  text-shadow: 5px 5px 10px rgba(110, 16, 232, 0.74),
    -5px -5px 10px rgba(110, 16, 232, 0.74);
  width: 57px;
  height: 57px;
  display: inline-block;
  box-sizing: border-box;
  font-family: "MyWebFont";
  font-size: 40px;
  color: rgb(110, 22, 192);
}

nav {
  display: flex;
  align-items: center;
  ul {
    width: 700px;
    margin-right: 45px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    li {
      height: 40px;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 1.3em;
        transition: all 0.3s linear;
        &:after {
          display: block;
          content: "";
          border-bottom: solid 2px rgb(157, 255, 0);
          transform: scaleX(0);
          transition: all 250ms ease-in-out;
        }
        &:hover:after {
          transform: scaleX(1);
          transition: all 250ms ease-in-out;
        }
        &:hover {
          color: rgb(180, 255, 59);
          transition: all 250ms ease-in-out;
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
  top: 35vh;
  a {
    img {
      width: 40px;
      height: 40px;
      transition: all 0.2s ease;
      &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease;
      }
      &:active {
        transform: scale(1.2);
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1366px) {
  .icons {
    flex-direction: row;
    z-index: 10;
    width: 70vw;
    height: 50px;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
    top: 90vh;
    bottom: 5vh;
    a {
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
  .header {
    padding: 2% 3%;
    align-items: center;
  }
  .burger {
    display: block;
  }
  nav {
    position: fixed;
    right: 0px;
    left: 0px;
    top: 0px;
    bottom: 0px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.6s ease;

    ul {
      width: 100%;
      margin-right: 0px;
      padding: 7vh 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        font-size: 1.6em;
        height: 20vh;
        transition: all 0.25s ease;
        text-align: center;
        &:hover {
          transform: translateX(20px);
          transition: all 0.25s ease;
        }
        a {
          color: rgb(157, 255, 0);
          font-size: 4em;
          font-weight: 600;
          letter-spacing: 3px;
        }
      }
    }
  }
  nav.visible {
    transform: translateX(0%);
    transition: transform 0.6s ease;
  }
  .logo a {
    margin-left: 0px;
  }
}

@media screen and (max-width: 900px) {
  .icons {
    flex-direction: row;
    z-index: 10;
    width: 70vw;
    height: 50px;
    justify-content: space-between;
    left: 50%;
    transform: translateX(-50%);
    top: 90vh;
    bottom: 5vh;
  }
  .header {
    padding: 2% 3%;
    align-items: center;
  }
  .burger {
    display: block;
  }
  nav {
    position: fixed;
    right: 0px;
    left: 0px;
    top: 0px;
    bottom: 0px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.6s ease;

    ul {
      width: 100%;
      margin-right: 0px;
      padding: 7vh 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        height: 20vh;
        transition: all 0.25s ease;
        text-align: center;
        &:hover {
          transform: translateX(20px);
          transition: all 0.25s ease;
        }
        a {
          color: rgb(157, 255, 0);
          font-size: 4em;
          font-weight: 600;
          letter-spacing: 3px;
        }
      }
    }
  }
  nav.visible {
    transform: translateX(0%);
    transition: transform 0.6s ease;
  }
  .logo a {
    margin-left: 0px;
  }
}
@media screen and (max-width: 475px) {
  nav {
    ul {
      li {
        a {
          font-size: 3em;
        }
      }
    }
  }
  .burger {
    right: 0px;
    top: 5px;
  }
  .logo {
    margin-left: 0px;
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
    margin-left: 0px;
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
    a {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>