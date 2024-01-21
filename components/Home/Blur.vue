<template>
       <div class="blur" :style="{ 'width': width ,'height': height ,'top': top,'left': left,'right': right ,'bottom': bottom }" style=""></div>
</template>

<script>

export default {
  name: "Blur",
   props: ['width','height','top','left','right','bottom'],
};
</script>

<style lang="scss" scoped>
    .blur{
  background-image: linear-gradient(#01464a, #173d49) ;
  filter: blur(10px);
  -webkit-filter: blur(4px);
  position: fixed;
  }
</style>

