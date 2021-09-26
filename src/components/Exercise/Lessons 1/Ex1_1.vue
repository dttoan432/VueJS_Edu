<template>
    <div class="container">
        <div class="wrap">
            <div class="boxData">
                <div class="boxInput">
                    <h3 class="inputLabel">Nhập tiêu đề</h3>
                    <input type="text" v-model="title">
                </div>
                <div class="boxInput">
                    <h3 class="inputLabel">Nhập nội dung</h3>
                    <textarea v-model="content"></textarea>
                </div>
            </div>
            <div class="boxContent">
                <h3 class="inputLabel">{{ title }}</h3>
                <div v-html="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ex1_1",
    data() {
        return {
            title: 'Zent Coding School',
            content: 'Happy class'
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;

        .boxData {
            border: 1px solid black;
            border-radius: 10px;
            width: 400px;
            height: 70%;
            text-align: left;
            padding: 30px 30px 60px 25px;
            margin: 0 40px;

            .boxInput {
                input, textarea {
                    width: 100%;
                }

                input {
                    padding: 20px 5px;
                }

                textarea {
                    height: 200px;
                    padding: 5px;
                }
            }
        }

        .boxContent {
            border: 1px dotted black;
            width: 600px;
            height: 70%;
            padding: 30px 30px 60px 25px;
            border-radius: 10px;
            margin: 0 40px;
            text-align: left;

            div {
                margin: 30px 0px;
            }
        }
    }
}

.inputLabel {
    margin: 10px 0;
}
</style>