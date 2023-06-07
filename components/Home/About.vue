<template>
  <main id="About">
       <div class="blur"></div>
    <Title :title1="`About`" :title2="`Me`" />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-4">
          <img src="../../public/img/me.jpg" alt="">
        </div>
        <div class="col-1"></div>
        <div class="col-md-7">
          <H3 class="hello mt-3">Hello I am <span>Alaa Mhna</span></H3>
          <br>
          <p>I am a dedicated front-end developer of websites, and I love my work. I have the ability to design and transform designs into a compatible, clean environment in terms of code and consistent on all sizes of devices and mobiles, in addition to solving all problems that hinder work. I also have the ability to work and communicate very well with co-workers in order to invest time and effort and improve the rate of work productivity.</p>
          <br>
          <span ><span class="fw-bolder"> My Github Link :</span> <a target="_blank" href="https://github.com/alaamhna3354">https://github.com/alaamhna3354</a></span>
          <br>
          <br>
           <a href="../../public/file/Cv-Alaa-Mhna.pdf" title="CV" download> <Button :content="`Download CV`" /></a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Title from "../global/Title";
import Button from "../global/Button";

export default {
  name: "Services",
  components: {
    Title,Button
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
#About{
  color: #fff;
  position: relative;
    .blur{
  background-image: linear-gradient(#01464a, #173d49) ;
  filter: blur(10px);
  -webkit-filter: blur(4px);
  width: 100%;
  height: 20px;
  position: absolute;
  top: -10px;
  }
img{
  width: 100%;
}
.hello{
  color: #fff;
  span{
    color: $secondary-color;
  }
}
p{
  font-size: 18px;
}
a{
  color: #fff;
  transition: .5s;
  &:hover{
    color: $secondary-color;
  }
}
span{
  letter-spacing: 1.1px;
}
}

</style>

