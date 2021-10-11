<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Báo cáo thống kê</b>
        </template>
        <template #contentMain>
            <h1>Trang báo cáo thống kê</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "StatisticPage",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '4'
        }
    }
}
</script>

<style scoped>

</style>