import Vue from "vue";
import aos from "aos";
import "aos/dist/aos.css";

Vue.component( "aos ", aos );
  aos.init({
    duration: 2000,
    once: false,
    offset: 250,
  });