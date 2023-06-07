<template>
  <main id="Projects" class="mt-5">
    <Title :title1="`My`" :title2="`Projects`" />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-4 mb-3">
          <a target="_blank" href="https://isystems.site/">
            <div class="item">
              <img src="../../public/img/iSystems.png" alt="" />
            </div>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a target="_blank" href="https://acacia-trading.com/">
            <div class="item">
              <img src="../../public/img/Acacia-Home.png" alt="" />
            </div>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a target="_blank" href="https://academian.co.uk/">
            <div class="item">
              <img src="../../public/img/Home-Academian.png" alt="" />
            </div>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a target="_blank" href="http://front.e-dalely.com/">
            <div class="item">
              <img src="../../public/img/E-Dalily.png" alt="" />
            </div>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a target="_blank" href="https://market-syria.com/">
            <div class="item">
              <img src="../../public/img/Syria-Market-Home.png" alt="" />
            </div>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a target="_blank" href="http://mfconline.me/">
            <div class="item">
              <img src="../../public/img/Family-Care.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Title from "../global/Title";

export default {
  name: "Projects",
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
#Projects {
  .item {
    height: 400px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.178);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    img {
      width: 100%;
      transition: 0.2s;
    }
    &:hover {
      img {
        animation: transform 20s forwards;
      }
    }
  }
}
@keyframes transform {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-580px);
  }
}
</style>

