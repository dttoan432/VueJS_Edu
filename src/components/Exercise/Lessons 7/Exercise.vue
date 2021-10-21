<template>
    <div class="container">
        <div class="form-data">
            <ProductForm/>
        </div>
        <div class="list-data">
            <ProductList/>
        </div>
    </div>
</template>

<script>
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

export default {
    name: "Exercise",
    components: {
        ProductList,
        ProductForm
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: flex-start;
    justify-content: start;

    .form-data {
        width: 30%;
        margin-right: 30px;
    }
}
</style>