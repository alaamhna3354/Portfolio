<template>
  <button  type="submit" >
    {{ content }}
    <span></span><span></span><span></span><span></span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["content"],
};
</script>

<style lang="scss" scoped>
@import "../../public/scss/variables.scss";

button{
    background-color: transparent;
    color: $secondary-color;
    border: 0.2em solid $secondary-color;
    border-radius: 0.5em;
    width: 12em;
    height: 3.5em;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    // margin: 30px auto;
    margin: 30px 0;
    display: block;
}

button span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: $secondary-color;
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
}

button:hover {
    color: #fff;
}

button:hover span {
    transform: translateY(0) scale(2);
}

button span:nth-child(1) {
    --n: 1;
}

button span:nth-child(2) {
    --n: 2;
}

button span:nth-child(3) {
    --n: 3;
}

button span:nth-child(4) {
    --n: 4;
}
</style>

