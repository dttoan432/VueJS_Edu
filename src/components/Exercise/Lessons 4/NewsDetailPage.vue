<template>
    <BaseLayout_4_2>
        <template #banner>
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in banner" :key="index">
                    <el-image :src="item.image" class="image-carousel"></el-image>
                </el-carousel-item>
            </el-carousel>
        </template>
        <template #content>
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">Bóng đá</a></el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="blog-content">
                <h1><strong>Bóng đá trong nước</strong></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem iure quam quos ratione. A
                    asperiores consequuntur deleniti illo iste magni nesciunt optio qui quibusdam tenetur. Accusamus
                    corporis cum eaque et eum exercitationem minus natus, nihil nobis nostrum numquam quae quidem rem
                    soluta totam vel vitae voluptas voluptatem voluptates voluptatibus! Aliquam aperiam dolorem illo
                    perferendis vero! Ab ad atque, delectus deleniti dignissimos doloremque error est modi neque
                    nesciunt, non officia quae quas quisquam rem sed suscipit voluptate? Cupiditate, dolorem doloremque
                    ea expedita ipsa itaque nam porro quaerat quam quidem quod ratione, repudiandae sequi unde
                    voluptatem? Accusamus accusantium debitis doloremque in iusto.</p>
                <p>
                    <img class="imgTocchien loaded"
                         src="https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat_800x450.jpg"
                         alt="">
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio earum eius eveniet ipsam
                    magni ut vero. A architecto beatae consectetur debitis dicta eligendi est et, explicabo iure iusto
                    labore laudantium nobis non nulla odio quam qui reiciendis sequi, soluta tempore tenetur vero vitae.
                    Ad aliquid animi, asperiores beatae ex, impedit in molestiae nam neque quae repudiandae totam
                    voluptas voluptatum. Ad alias aliquid aut autem consectetur consequuntur cum debitis deserunt dolor
                    dolorem dolores ea earum eligendi enim et illum iste itaque iusto, minima minus natus nobis optio
                    quam quis quisquam quod quos rem reprehenderit sapiente similique sunt tempora, vero vitae.</p>
            </div>
        </template>
        <template #left-content>
            <el-image :src="imageL"></el-image>
        </template>
        <template #right-content>
            <el-image :src="imageR"></el-image>
        </template>
    </BaseLayout_4_2>
</template>

<script>
import BaseLayout_4_2 from "./BaseLayout_4_2";

export default {
    name: 'NewsDetailPage',
    components: {
        BaseLayout_4_2
    },
    data() {
        return {
            imageL: 'https://youthvietnam.vn/wp-content/uploads/2020/12/Thiet-ke-banner.jpg',
            imageR: 'https://png.pngtree.com/png-clipart/20200722/original/pngtree-banner-design-in-orange-red-blue-and-white-background-png-image_5057269.jpg',
            banner: [
                {image: 'https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg'},
                {image: 'https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(4).jpg'},
                {image: 'https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(3).jpg'}
            ]
        }
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/NewsDetailPage";
</style>