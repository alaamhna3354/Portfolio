<template>
  <div id="Resume">
    <Title data-aos="fade-down" :title1="`My`" :title2="`Resume`" />
    <div class="slider">
      <div class="swiper-container swiper-container2">
        <div class="swiper-wrapper">
          <!-- ************************ item slide 1 ************************ -->
          <div class="swiper-slide swiper-slide-active">
            <div class="container">
              <div class="row">
                <div class="col-md-5">
                  <h5>EXPERIENCE</h5>
                  <br />
                  <H3
                    >More than <span style="font-weight: bold">{{ YearsExperience }}</span> years
                    experience as a <span>Developer</span></H3
                  >
                  <br />
                  <img
                    class="img1"
                    src="../../public/img/EXPERIENCE.jpg"
                    alt=""
                  />
                </div>
                <div class="col-md-7">
                  <ul>
                    <li class="mb-5">
                      <h4 class="text-white op">
                        Frontend Web Developer
                      </h4>
                      <H5 class="text-white op"
                        >Al-Balael · Full-timeAl-Balael</H5
                      >
                      <H6 class="text-white op"
                        >Jan 2019 - Feb 2022 · 3 yrs 2 mos</H6
                      >
                      <p class="text-white" :class="p1 ? 'truncate' : ''">
                        I worked for Al-Badael Company to develop and build a
                        number of commercial projects and platforms, and I had a
                        very good ability to design, create, and convert figma
                        designs and others into clean and consistent code on all
                        devices and mobile sizes, and the ability to communicate
                        well with co-workers, according to the evaluation of
                        work managers.
                        <br />
                        I developed many websites for clients using html,
                        css,scss, js, jquery, bootstap, vue.js framwork .
                      </p>
                      <span
                        v-if="p1"
                        class="text-white see-more"
                        @click="p1 = false"
                        >See More</span
                      >
                      <span
                        v-else
                        class="text-white see-more"
                        @click="p1 = true"
                        >See Less</span
                      >
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white op">
                        Frontend Web Developer
                      </h4>
                      <H6 class="text-white op">
                        Feb 2022 - May 2023 · 1 yr 4 mos</H6
                      >
                      <p class="text-white" :class="p2 ? 'truncate' : ''">
                        I worked with freelancer developers,  to build and
                        modify a number of large and small projects and add
                        creative touches to produce clean projects in terms of
                        code and add creative touches in terms of work and were
                        admired by investors.
                      </p>
                      <span
                        v-if="p2"
                        class="text-white see-more"
                        @click="p2 = false"
                        >See More</span
                      >
                      <span
                        v-else
                        class="text-white see-more"
                        @click="p2 = true"
                        >See Less</span
                      >
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white op">
                        Frontend Web Developer
                      </h4>
                      <H5 class="text-white op">FSIT · Full-time</H5>
                      <H6 class="text-white op">Apr 2023 - Jul 2024 · 1 yr 4 mos</H6>
                      <p class="text-white" :class="p3 ? 'truncate' : ''">
                        I worked for Al-Badael Company to develop and build a
                        number of commercial projects and platforms, and I had a
                        very good ability to design, create, and convert figma
                        designs and others into clean and consistent code on all
                        devices and mobile sizes, and the ability to communicate
                        well with co-workers, according to the evaluation of
                        work managers.
                        <br />
                        I developed many websites for clients using html,
                        css,scss, js, jquery, bootstap, Nuxt.js framwork .
                      </p>
                      <span
                        v-if="p3"
                        class="text-white see-more"
                        @click="p3 = false"
                        >See More</span
                      >
                      <span
                        v-else
                        class="text-white see-more"
                        @click="p3 = true"
                        >See Less</span
                      >
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white op">
                        Frontend Web Developer
                      </h4>
                      <H5 class="text-white op">Etmaam · Full-time</H5>
                      <H6 class="text-white op"> Apr 2024 - Present </H6>
                      <p class="text-white" :class="p3 ? 'truncate' : ''">
                        I worked on improving the performance and design of several websites ( php scripts ) And also building a new platform for the company that provides all its services by vue.js,That's where I built Spa project ,provide the platform with new features in terms of design and performance
                      </p>
                      <span
                        v-if="p3"
                        class="text-white see-more"
                        @click="p3 = false"
                        >See More</span
                      >
                      <span
                        v-else
                        class="text-white see-more"
                        @click="p3 = true"
                        >See Less</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- ************************ item slide 2 ************************ -->
          <div class="swiper-slide swiper-slide-active">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h5>SHILLS</h5>
                  <br />
                  <H3
                    >Creativity is thinking <span>outside</span> the
                    <span>box</span></H3
                  >
                  <br />
                  <img
                    class="img2"
                    src="../../public/img/skill.jpg"
                    alt=""
                  />
                </div>
                <div class="col-md-6">
                  <ul>
                    <li class="mb-5">
                      <h4 class="text-white">Responsive Web Design</h4>
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white">Html</h4>
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white">CSS & Scss</h4>
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white">Bootstrap</h4>
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white">JavaScript & jQuery</h4>
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white">Vue.js & Nuxt.js</h4>
                    </li>
                    <li class="mb-5">
                      <h4 class="text-white">GitHub</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      p1: true,
      p2: true,
      p3: true,
      YearsExperience :5,
    };
  },
  mounted() {
  const startDate = new Date('2020-01-01');
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
  const yearsDiff = Math.ceil(timeDiff / (1000 * 3600 * 24 * 365.25));
  this.YearsExperience = yearsDiff;
  
    const swiper = new Swiper(".swiper-container2", {
      effect: 'flip', // cube coverflow cards creative flip
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true
    });
  },
  methods: {},
  computed: {},
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
#Resume {
  overflow: hidden;
  ul {
    border-left: 1px solid #fff;
    padding-left: 20px;
    li {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        left: -25px;
        top: 10px;
      }
      .truncate {
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
      .op {
        opacity: 0.7;
      }
      .see-more {
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          letter-spacing: 1px;
        }
      }
    }
  }
  .swiper-slide {
    h3 {
      color: #fff;
      span {
        color: $secondary-color;
      }
    }
    h5 {
      color: $secondary-color;
    }
    .img1{
      width: 80%;
      @media (max-width: 768.98px) {
    width: 100%;
    margin-bottom: 25px;
    }
    }
    .img2{
      width: 60%;
      @media (max-width: 768.98px) {
    width: 100%;
    margin-bottom: 25px;
    }
    }
  }
}
</style>
