<template>
  <Ex5_1 :active="active">
    <template #contentHeader>
      <b>Quản lý sản phẩm</b>
    </template>
    <template #contentMain>
      <el-table :data="products" border style="width: 100%">
        <el-table-column prop="name" label="Tên sản phẩm" width="180"></el-table-column>
        <el-table-column prop="quantity" label="Số lượng" width="180"></el-table-column>
        <el-table-column prop="price" label="Đơn giá"></el-table-column>
        <el-table-column label="Hành động">
          <template slot-scope="scope">
            <el-button
                @click="deleteRow(scope.$index, products)"
                type="danger"
                size="small"
                icon="el-icon-delete">
            </el-button>
          </template>
        </el-table-column>
      </el-table>
<!--      <div class="pagination" style="float: right; margin-top: 40px;">-->
<!--        <el-pagination background :current-page.sync="currentPage" :page-sizes="[100, 200, 300, 400]"-->
<!--                       :page-size="100" layout="total, prev, pager, next, jumper" :total="400">-->
<!--        </el-pagination>-->
<!--      </div>-->
    </template>
  </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";
import {mapMutations, mapState} from "vuex";

export default {
  name: "ProductPage",
  computed: {
    ...mapState('product', [
      'products',
    ]),
  },
  components: {
    Ex5_1
  },
  data() {
    return {
      ...mapMutations('product', [
        'deleteItem'
      ]),
    }
  },
  methods: {
    deleteRow(value) {
      this.deleteItem(value)
    }
  }
}
</script>

<style scoped lang="scss">

</style>