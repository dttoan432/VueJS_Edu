<template>
    <BaseLayout_4_1>
        <template #contentHeader>
            <b>Quản lý sản phẩm</b>
        </template>
        <template #contentMain>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="180"></el-table-column>
                <el-table-column prop="name" label="Name" width="180"></el-table-column>
                <el-table-column prop="address" label="Address"></el-table-column>
            </el-table>
            <div class="pagination" style="float: right; margin-top: 40px;">
                <el-pagination background :current-page.sync="currentPage" :page-sizes="[100, 200, 300, 400]"
                    :page-size="100" layout="total, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </template>
    </BaseLayout_4_1>
</template>

<script>
import BaseLayout_4_1 from "./BaseLayout_4_1";

export default {
    name: "ProductPage",
    components: {
        BaseLayout_4_1
    },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }, {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles'
                }
            ],
            currentPage: 1
        }
    },
}
</script>

<style scoped lang="scss">

</style>