<template>
<div class="Footer">
  <h5>© {{ date }} <span class="first-name">Alaa</span> Mhna</h5>
</div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date:'',
    };
  },
  computed: {
  
  },
  methods: {
 
  },
  created() {
    var Newdate = new Date().getFullYear();
    this.date = Newdate;
  },
};
</script>
<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
.Footer{
  background-color: #000f13;
  padding: 10px;
  h5{
    color: #fff;
    text-align: center;
    font-size: 1rem;
  }
  .first-name{
    color: $secondary-color;
  }
}
</style>
