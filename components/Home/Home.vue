<template>
  <main class="main-body p-0">
    <Blur :width="`100%`" :height="`20px`" :top="'-5px'" />
    <Blur :width="`100%`" :height="`10px`" :bottom="'-5px'" />
    <Blur :height="`100%`" :width="`10px`" :left="'0'" />
    <Blur :height="`100%`" :width="`10px`" :right="'0'" />
    <!-- MyInfo components  -->
    <MyInfo />
    <!-- About components  -->
    <About />
    <!-- Services components  -->
    <Services />
    <!-- Projects components  -->
    <Projects />
    <!-- Projects components  -->
    <Resume />
    <!-- Contact components  -->
    <Contact />
    <!-- whatsapp icon -->
    <div class="ApImage">
      <div class="what">
        <a target="_blank" href="https://wa.me/+963933080648"
          ><font-awesome-icon :icon="['fab', 'whatsapp']"
        /></a>
      </div>
    </div>
    <!-- whatsapp icon -->
  </main>
</template>

<script>
import MyInfo from "./MyInfo.vue";
import About from "./About.vue";
import Services from "./Services.vue";
import Projects from "./Projects.vue";
import Resume from "./Resume.vue";
import Contact from "./Contact";
import Blur from "./Blur";
export default {
  data() {
    return {};
  },
  components: {
    MyInfo,
    Services,
    About,
    Projects,
    Resume,
    Blur,
    Contact
  },

  methods: {},
  computed: {},
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
.main-body{
   background-image: linear-gradient(#1a444e, #091d2f) ;
}
.ApImage {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  .what {
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    position: relative;
    &::after {
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 6px solid $secondary-color;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:hover {
      &::after {
        animation: ring 1.5s infinite;
      }
    }
    a {
      color: #fff;
      font-size: 30px;
      background-color: $main-color;
      padding: 10px 15px;
      border-radius: 50%;
      transition: $transition;
      &:hover {
        color: $secondary-color;
      }
    }
  }
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
</style>

