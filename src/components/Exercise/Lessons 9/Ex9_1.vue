<template>
   <div class="container">
      <div class="box">
         <div>
            <el-input placeholder="Nhập tên sản phẩm" v-model="search"></el-input>
            <el-button type="primary" plain @click="getListProduct()">Tìm kiếm</el-button>
         </div>
         <el-button type="primary" plain @click="dialogVisible = true">Thêm sản phẩm</el-button>
      </div>
      <template>
         <el-table :data="listProduct.data" style="width: 100%">
            <el-table-column prop="name" label="Tên sản phẩm" width="350"></el-table-column>
            <el-table-column prop="description" label="Mô tả" width="250">
               <template slot-scope="scope">
                  <div v-if="scope.row.description !== null">
                     {{ scope.row.description }}
                  </div>
                  <div v-else>Đang cập nhật</div>
               </template>
            </el-table-column>
            <el-table-column prop="price" label="Đơn giá" width="180"></el-table-column>
            <el-table-column label="Hành động">
               <template slot-scope="scope">
                  <el-button type="text" size="small">Sửa</el-button>
                  <el-button type="text" size="small" @click="deleteProduct(scope.row.id)">Xóa</el-button>
               </template>
            </el-table-column>
         </el-table>
      </template>

      <el-dialog title="Thêm sản phẩm" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
         <el-form label-position="left" label-width="150px" :model="formLabelAlign">
            <el-form-item label="Tên sản phẩm">
               <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="Mô tả">
               <el-input v-model="formLabelAlign.description"></el-input>
            </el-form-item>
            <el-form-item label="Đơn giá">
               <el-input v-model="formLabelAlign.price"></el-input>
            </el-form-item>
         </el-form>
         <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Đóng</el-button>
            <el-button type="primary" @click="addProduct()">Tạo mới</el-button>
         </span>
      </el-dialog>

      <div class="paginationWarp">
         <el-col :span="10">
            <div class="textInfo">
               <p>Số lượng kết quả: {{ page.from }} - {{ page.to }} của {{ page.total }} </p>
            </div>
         </el-col>

         <el-col :span="14">
            <el-pagination
                layout="prev, pager, next"
                :total="page.total"
                :page-size="page.pageSize"
                :current-page="page.currentPage"
                @current-change="handleCurrentChange">
            </el-pagination>
         </el-col>
      </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: "Ex9_1",
   data() {
      return {
         listProduct: [],
         search: '',
         dialogVisible: false,
         formLabelAlign: {
            name: '',
            description: '',
            price: '',
            image: ''
         },
         page: {
            currentPage: 1,
            pageSize: 10,
            total: 0,
            from: 0,
            to: 0
         },
      }
   },
   methods: {
      getListProduct() {
         let data = '';
         (this.search === '') ? data = '/products' : data = `/products?q=${this.search}`
         axios({
            methods: 'get',
            baseURL: 'http://vuecourse.zent.edu.vn/api',
            url: data
         }).then((res) => {
            this.listProduct = res.data.data
            this.page.currentPage = res.data.data.current_page
            this.page.pageSize = res.data.data.per_page
            this.page.total = res.data.data.total
            let from = res.data.data.from
            let to = res.data.data.to
            this.page.from = from ? from : 0
            this.page.to = to ? to : 0
         })
      },
      addProduct() {
         this.dialogVisible = false
         this.search = ''
         axios({
            methods: 'post',
            baseURL: 'http://vuecourse.zent.edu.vn/api',
            url: '/products',
            data: {
               name: this.formLabelAlign.name,
               description: this.formLabelAlign.description,
               price: this.formLabelAlign.price,
               image: this.formLabelAlign.image
            }
         }).then(() => {
            // this.formLabelAlign.name = ''
            // this.formLabelAlign.description = ''
            // this.formLabelAlign.price = ''
            // this.formLabelAlign.image = ''
            this.getListProduct()
            alert('ok')
         })
      },
      deleteProduct(id) {
         this.$confirm('Bạn có chắc chắn muốn xóa sản phẩm này không')
             .then(() => {
                axios({
                   methods: 'delete',
                   baseURL: 'http://vuecourse.zent.edu.vn/api',
                   url: `/products/${id}`,
                }).then(() => {
                   this.getListProduct()
                   alert('ok delete')
                }).catch(() => {
                   alert('fail')
                })
             })
      },
      handleCurrentChange() {
         this.getListProduct()
      }
   },
   watch: {
      search(value) {
         (value === '') ? this.getListProduct() : ''
      }
   },
   mounted() {
      this.getListProduct()
   }
}
</script>

<style scoped lang="scss">
.container {
   width: 50%;
   margin: 0 auto;

   .box {
      display: flex;
      justify-content: space-between;
      margin: 50px 0;

      div {
         width: 50%;
         .el-input {
            margin-right: 15px;
         }
      }
   }
}
</style>