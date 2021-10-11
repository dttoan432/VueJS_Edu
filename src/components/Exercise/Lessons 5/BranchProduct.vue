<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Hoạt động - Sản phẩm</b>
        </template>
        <template #contentMain>
            <h1>Quản lý sản phẩm của chi nhánh</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "BranchProduct",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '5-1'
        }
    }
}
</script>

<style scoped>

</style>