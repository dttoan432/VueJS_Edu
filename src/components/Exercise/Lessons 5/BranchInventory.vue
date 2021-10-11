<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Hoạt động - Tồn kho</b>
        </template>
        <template #contentMain>
            <h1>Quản lý hàng tồn kho của chi nhánh</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "BranchInventory",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '5-5'
        }
    }
}
</script>

<style scoped>

</style>