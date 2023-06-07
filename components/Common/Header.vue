<template>
  <div class="container-fluid contain-header">
    <div class="blur"></div>
    <header id="home">
     <a href="#home"><div class="logo"><span class="first-letter">A</span>laa</div></a> 
      <ul class="links d-none d-md-flex">
        <li><a href="#About">About Me</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Resume">Resume</a></li>
        <li><a href="#Contact">Contact Me</a></li>
      </ul>
      <div class="icons">
      <a target="_blank" href="https://www.facebook.com/alaa.mhna.14"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
      <a target="_blank" href="https://wa.me/+963933080648"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/alaa-mhna-a9737824a/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a target="_blank" href="https://t.me/+963933080648"><font-awesome-icon :icon="['fab', 'telegram']" /></a>
      </div>
      <div class="bars d-flex d-md-none">
        <font-awesome-icon @click="show = !show" :icon="['fas', 'bars']" />
      </div>
      <div class="overlay d-block d-md-none" v-if="show" @click="show = !show" ></div>
      <div class="side-bar d-block d-md-none" :class="show ? 'active' :''">
        <ul class="links-side">
        <li><a href="#About">About Me</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Resume">Resume</a></li>
        <li><a href="#Contact">Contact Me</a></li>
      </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      bounce:false,
      show:false
    };
  },
  computed: {},
  methods: {},
  created() {},
};
</script>

<style lang="scss">
@import "../../public/scss/variables.scss";
.contain-header{
  position: relative;
   .blur{
  background: #00000063;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: 100%;
  height: 88px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  }
}
header {
  display: flex;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  
  
  .logo {
    width: 170px;
    @media (max-width: 768.98px) {
    width: 70px;
    }
    color: $white-color;
    font-weight: bold;
    font-size: 2rem;
    transition: $transition;
    letter-spacing: 1.1px;
    cursor: pointer;
    .first-letter {
      text-transform: uppercase;
      color: $secondary-color;
      transition: $transition;
    }
    &:hover {
      .first-letter {
        text-shadow: $text-shadow;
      }
    }
  }
  .links {
    display: flex;
    justify-content: center;
    flex: 1;
    
    a{
      color: $white-color;
      padding: 15px;
      font-size: 20px;
      transition: $transition;
      &:hover{
      color: $secondary-color;
    }
    }
  }
  .icons{
     @media (max-width: 768.98px) {
        width: 100%;
        text-align: center;
      }
   svg{
    color: $white-color;
    transition: $transition;
    margin: 10px;
    font-size: 22px;
    &:hover{
      color: $secondary-color;
    }
   }
  }
  .bars{
    justify-content: end;
    svg{
      color: $white-color;
      transition: $transition;
      cursor: pointer;
      font-size: 25px;
      &:hover{
      color: $secondary-color;
    }
    }
  }
  .overlay{
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.226);
  }
  .side-bar{
    background-color: $third-color;
    padding: 20px 50px;
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    z-index: 10;
    transition: $transition;
    &.active{
      right: 0 !important;
    }
    ul{
      line-height: 2;
          a{
        color: $white-color;
        padding: 10px;
        font-size: 20px;
        transition: $transition;
        &:hover{
        color: $secondary-color;
      }
      }
    }
    
  }
}
</style>
