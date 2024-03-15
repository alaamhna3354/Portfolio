<template>
  <main id="Services" class="mt-5">
    <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
    <Title data-aos="fade-down" :title1="`My`" :title2="`Services`" />
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-12 item" data-aos="fade-down-right">
        <lord-icon
            src="https://cdn.lordicon.com/myroguwc.json"
            trigger="hover"
            colors="outline:#121331,primary:#4bb3fd,secondary:#ebe6ef"
            class="icon"
            style="width:150px;height:150px">
        </lord-icon>
          <h3 class="text-white">Responsive Design</h3>
        </div>
        <div class="col-md-4 col-12 item" data-aos="fade-down">
          <lord-icon
            src="https://cdn.lordicon.com/meqqbzid.json"
            trigger="hover"
            colors="outline:#121331,primary:#4bb3fd"
            class="icon"
            style="width: 150px; height:150px"
          >
          </lord-icon>
          <h3 class="text-white">Clean Code</h3>
        </div>
        <div class="col-md-4 col-12 item" data-aos="fade-down-left">
          <lord-icon
            src="https://cdn.lordicon.com/cllunfud.json"
            trigger="hover"
            colors="outline:#121331,primary:#646e78,secondary:#ebe6ef"
            class="icon"
            style="width: 150px; height:150px"
          >
          </lord-icon>
          <h3 class="text-white">Competitive Prices</h3>
        </div>
        <div class="col-md-4 col-12 item" data-aos="fade-up-right">
          <lord-icon
            src="https://cdn.lordicon.com/nrzqxhfu.json"
            trigger="hover"
            colors="primary:#121331,secondary:#646e78"
            class="icon"
            style="width: 150px; height:150px"
          >
          </lord-icon>
          <h3 class="text-white">High Security</h3>
        </div>
        <div class="col-md-4 col-12 item" data-aos="fade-up">
          <lord-icon
            src="https://cdn.lordicon.com/dmonnrsh.json"
            trigger="hover"
            colors="outline:#121331,primary :#3a3347,secondary:#646e78,tertiary:#92140c,quaternary:#4bb3fd"
            class="icon"
            style="width: 150px; height:150px"
          >
          </lord-icon>
          <h3 class="text-white">Customer Service</h3>
        </div>
        <div class="col-md-4 col-12 item" data-aos="fade-up-left">
          <lord-icon
              src="https://cdn.lordicon.com/osbjlbsb.json"
              trigger="hover"
              colors="outline:#121331,secondary:#b26836,secondary2:#4bb3fd,quaternary:#ebe6ef"
              class="icon"
              style="width:150px;height:150px">
          </lord-icon>
          <h3 class="text-white">Better SEO</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Title from "../global/Title";

export default {
  name: "Services",
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
#Services{
  .item{
    display: grid;
    place-content: center;
    text-align: center;
    .icon{
      margin: 0 auto;
    }
  }
}

</style>

