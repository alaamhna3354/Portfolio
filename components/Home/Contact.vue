<template>
  <main id="Contact" class="mt-5">
    <div v-if="alert" class="alert alert-info " role="alert" @click="alert= false">
      <h4 class="alert-heading">Success Send!</h4>
      <p>
        We are pleased to communicate with you, we will respond within a maximum of 24 hours
      </p>
      <hr />
    </div>
    <Title data-aos="fade-down" :title1="`Contact`" :title2="`Me`" />
    <div class="container">
      <form ref="form" @submit.prevent="sendEmail">
        <div class="row">
          <div class="col-6" data-aos="flip-up">
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              name="user_name"
              class="form-control mb-2"
              required
            />
          </div>
          <div class="col-6" data-aos="flip-up">
            <input
              placeholder="Your Email"
              type="text"
              id="email"
              name="user_email"
              class="form-control mb-2"
              required
            />
          </div>
          <div class="col-12 mt-3" data-aos="flip-up">
            <textarea
              name="message"
              id="message"
              class="form-control mb-3"
              rows="6"
              placeholder="Your Message"
            >
            </textarea>
          </div>
          <div class="d-flex justify-content-center">
            <Button :content="`Send`" />
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
import Title from "../global/Title";
import Button from "../global/Button";
import emailjs from "@emailjs/browser";
export default {
  name: "Contact",
  components: {
    Title,
    Button,
  },
  data() {
    return {
      alert:false
    };
  },
  methods: {
    sendEmail() {
      this.alert = true;
      emailjs
        .sendForm(
          "service_njtpbrh",
          "template_zqjbxb5",
          this.$refs.form,
          "Fd4ET3gbXSfKXhjao"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
        setTimeout(() => {
      this.alert = false;
        }, 5000);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
.alert{
  position: fixed;
  z-index: 1000;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}
</style>


