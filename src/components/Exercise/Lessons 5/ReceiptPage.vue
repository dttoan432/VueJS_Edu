<template>
  <Ex5_1 :active="active">
    <template #contentHeader>
      <b>Quản lý hóa đơn</b>
    </template>
    <template #contentMain>
      <el-table :data="bill" border style="width: 100%">
        <el-table-column prop="name" label="Tên khách hàng" width="180"></el-table-column>
        <el-table-column prop="product" label="Tên sản phẩm" width="180"></el-table-column>
        <el-table-column prop="total" label="Tổng tiền"></el-table-column>
        <el-table-column label="Hành động">
          <template slot-scope="scope">
            <el-button
                @click="deleteRow(scope.$index, bill)"
                type="danger"
                size="small"
                icon="el-icon-delete">
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";
import {mapMutations, mapState} from "vuex";

export default {
  name: "ReceiptPage",
  components: {
    Ex5_1
  },
  computed: {
    ...mapState('receipt', [
      'bill',
    ]),
  },
  data() {
    return {
      ...mapMutations('receipt', [
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

<style scoped>

</style>