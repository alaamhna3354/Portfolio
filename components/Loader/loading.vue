<template>
   <div id="preloader" v-if="loading">
    <div class='containers'>
  <svg height="200" width="200">
    <circle class='ring' cx="100" cy="102" r="70" stroke="white" fill="none" stroke-linecap="round"/>
  </svg>
</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
  created() {
    setTimeout(() => {
     this.loading =false;
      
    }, 2500);
    
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
#preloader {
  position: fixed;
  z-index: 99999;
  width: 100%;
  display: grid;
  place-items: center;
  margin:0;
  padding:0;
  min-height: 100vh;
  overflow: hidden;
  background-color: $main-color;
}
#preloader svg {
  filter: drop-shadow(0px 0px 8px $secondary-color);
}
#preloader .containers {
  position: relative;
  animation: spin 1.4s linear infinite;
}
#preloader .ring {
  position: absolute;
  top:  50%;
  left: 50%;
  stroke-dasharray: 60 440;
  stroke-dashoffset: -500;
  stroke-width: 10px;
  animation: shift 3.2s ease-in-out infinite;
}
@keyframes shift {
  0%    {}
  50% 	{stroke-dasharray: 400 100;
         stroke-dashoffset: -350;}
  100%  {}
}
@keyframes shift-test {
  to {stroke-dashoffset: 0;}
}
@keyframes spin {
   to {
      transform: rotate(360deg);
  }
}
</style>
