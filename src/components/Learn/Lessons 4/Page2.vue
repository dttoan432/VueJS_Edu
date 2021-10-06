<template>
    <BaseLayout>
        <template #header>
            <h1>header page 2</h1>
        </template>

        <p>default page 2</p>

        <template #footer>
            <p>footer page 2</p>
        </template>
    </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";

export default {
    name: "Page2",
    components: {
        BaseLayout
    },
}
</script>

<style scoped>

</style>