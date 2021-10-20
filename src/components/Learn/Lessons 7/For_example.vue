<template>
    <div class="container">
        <Display_1/>
        <Display_2/>
    </div>
</template>

<script>
import Display_1 from './Display_1.vue'
import Display_2 from './Display_2.vue'

export default {
    name: 'For_example',
    props: {
        msg: String
    },
    components: {
        Display_1,
        Display_2,
    },
    data() {
        return {
            password: ''
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
}
</style>
