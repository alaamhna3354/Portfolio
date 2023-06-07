<template>
  <main class="p-0">
     <div class="my-info">
      <div class="pic">
        <h1 class="ml8">
          <span class="letters-container">
          </span>
          <span class="circle circle-white"></span>
          <span class="circle circle-dark"><img src="../../public/img/my-pic.png" alt=""></span>
          <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
        </h1>
        
      </div>
      <h1 class="ml15">
        <span class="word">Alaa</span>
        <span class="word">Mhna</span>
      </h1>
      <h3 class="mt-3 ml2">A Creative Freelancer & Frontend Developer</h3>
    </div>
  </main>
</template>

<script>
export default {
  name: "MyInfo",
      head() {
    return {
      script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
      }
      
    ],
     
    };
  },
  mounted() {
setTimeout(() => {
// ***************************************** start img *****************************************
anime.timeline({loop: false})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 10000,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });
  anime({
    targets: '.ml8 .circle-dark-dashed',
    rotateZ: 360,
    duration: 10000,
    easing: "linear",
    loop: true
  });
// ***************************************** start name *****************************************
  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 1,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 1000
  });
// ***************************************** start description *****************************************
  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml2 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.ml2',
      opacity: 1,
      duration: 5000,
      easing: "easeOutExpo",
      delay: 1000
    });
// ***************************************** end description *****************************************
}, 3000);
  
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
.my-info{
  padding: 80px 0 ;
  display: grid;
  place-content: center;
  overflow: hidden;
  background-image: url(../../public/img/turquoise.png);
  background-size: cover;
  *{
    text-align: center !important;
  }

  .pic{
    width: 200px;
    height: 200px;
    margin: auto;
    position: relative;
    z-index: 1;
    img{
      width: 100%;
      height: 100%;
    }
  }
  h3{
    color: #fff;
  }
}
h1.ml8 {
  font-weight: 900;
  font-size: 4.5em;
  color: #fff;
  width: 3em;
  height: 3em;
}

.ml8 .letters-container {
  margin: auto;
  height: 1em;
}

.ml8 .letters {
  position: relative;
  z-index: 2;
  display: inline-block;
  line-height: 0.7em;
  right: -0.12em;
  top: -0.2em;
}

.ml8 .bang {
  font-size: 1.4em;
  top: auto;
  left: -0.06em;
}

.ml8 .circle {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
}

.ml8 .circle-white {
  width: 3em;
  height: 3em;
  border: 2px dashed white;
  border-radius: 2em;
}

.ml8 .circle-dark {
  width: 2.2em;
  height: 2.2em;
  background-color: transparent;
  border-radius: 3em;
  z-index: 1;
  overflow: hidden;
}

.ml8 .circle-dark-dashed {
  border-radius: 2.4em;
  background-color: transparent;
  border: 2px dashed $secondary-color;
  width: 2.3em;
  height: 2.3em;
}
.ml15 {
  font-weight: 800;
  font-size: 3.8em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
}

.ml15 .word {
  display: inline-block;
  line-height: 1em;
  color: $secondary-color;
}
</style>

