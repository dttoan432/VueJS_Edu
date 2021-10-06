<template>
    <BaseLayout>
        <template #header>
            <h1>header page 1</h1>
        </template>

        <p>default page 1</p>

        <template #footer>
            <p>footer page 1</p>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";

export default {
    name: "Page1",
    components: {
        BaseLayout
    },
}
</script>

<style scoped>

</style>