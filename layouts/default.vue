<template>
  <div>
    <Loading/>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loader/loading.vue";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Loading
  },
   head() {
    return {
      title:
        this.$i18n.locale === "ar"
          ? "Portfolio"
          : "Portfolio",
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "ar" ? "rtl" : "ltr",
      },
    };
  },
};
</script>
