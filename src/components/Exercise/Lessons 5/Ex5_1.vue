<template>
    <el-container>
        <el-aside>
            <el-row>
                <el-menu :default-active="active" class="el-menu-vertical" background-color="#001529" text-color="white"
                         active-text-color="#ffd04b">
                    <el-menu-item index="1" @click="pushPage('overview')">
                        <i class="el-icon-menu"></i>
                        <span>Tổng quan</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="pushPage('product')">
                        <i class="el-icon-s-shop"></i>
                        <span>Quản lý sản phẩm</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="pushPage('receipt')">
                        <i class="el-icon-document"></i>
                        <span>Quản lý hóa đơn</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="pushPage('statistic')">
                        <i class="el-icon-s-data"></i>
                        <span>Báo cáo thống kê</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>Quản lý chi nhánh</span>
                        </template>
                        <el-menu-item-group title="Hoạt động">
                            <el-menu-item index="5-1" @click="pushPage('branch-product')">Sản phẩm</el-menu-item>
                            <el-menu-item index="5-2" @click="pushPage('branch-order')">Đơn hàng</el-menu-item>
                            <el-menu-item index="5-3" @click="pushPage('branch-customer')">Khách hàng</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Báo cáo">
                            <el-menu-item index="5-4" @click="pushPage('branch-revenue')">Doanh thu</el-menu-item>
                            <el-menu-item index="5-5" @click="pushPage('branch-inventory')">Tồn kho</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="6" @click="pushPage('system')">
                        <i class="el-icon-s-tools"></i>
                        <span>Cài đặt hệ thống</span>
                    </el-menu-item>
                </el-menu>
            </el-row>
        </el-aside>
        <el-container>
            <el-header>
                <div class="header">
                    <slot name="contentHeader">Slot</slot>
                </div>
                <div class="infoHeader">
                    <el-badge :value="12" class="item">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                </div>
                <div class="dropHeader">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                          <img :src="url" alt="">
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">Thông tin tài khoản</el-dropdown-item>
                            <el-dropdown-item command="b">Đổi mật khẩu</el-dropdown-item>
                            <el-dropdown-item command="c">Cấu hình</el-dropdown-item>
                            <el-dropdown-item><div @click="pushPage('login')">Đăng xuất</div></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
                <slot name="contentMain"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "Ex5_1",
    props: ['active'],
    data() {
        return {
            url: "https://png.pngtree.com/png-clipart/20200722/original/pngtree-banner-design-in-orange-red-blue-and-white-background-png-image_5057269.jpg",
        }
    },
    methods: {
        handleCommand(command) {
            this.$message('click on item ' + command);
        },
        pushPage(value) {
            this.$router.push({
                path: `/${value}`
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/BaseLayout_4_1";
</style>