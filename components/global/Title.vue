<template>
  <main class="mt-5">
     <div class="title"> 
       <h1 class="first-word">{{title1}}</h1>
       <h1 class="sec-word">{{title2}}</h1>
     </div>
  </main>
</template>

<script>
export default {
  name: "Title",
  props:["title1","title2"]
  
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";
.title{
  display: flex;
  justify-content: center;
  .first-word{
    color: $secondary-color;
    letter-spacing: 1px;
  }
  .sec-word{
    color: #fff;
    margin-inline-start: 10px;
    letter-spacing: 1px;
  }
}
</style>

