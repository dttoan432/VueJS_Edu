<template>
  <div class="container">
    <Ex7_1_products/>

    <Ex7_1_cart/>
  </div>
</template>

<script>
import Ex7_1_products from "./Ex7_1_products";
import Ex7_1_cart from "./Ex7_1_cart";

export default {
  name: "Ex7_1",
  components: {
    Ex7_1_products,
    Ex7_1_cart
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
@import "src/assets/scss/Ex2_2";
</style>