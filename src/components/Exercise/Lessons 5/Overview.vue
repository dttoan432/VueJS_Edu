<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Tổng quan</b>
        </template>
        <template #contentMain>
            <h1>Trang tổng quan</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "OverviewPage",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '1'
        }
    }
}
</script>

<style scoped>

</style>