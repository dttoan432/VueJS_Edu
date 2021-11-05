<template>
   <div class="container">
      <div class="box">
         <div>
            <el-input placeholder="Nhập tên sản phẩm" v-model="search" clearable></el-input>
            <el-button type="primary" plain @click="getListProduct()">Tìm kiếm</el-button>
         </div>
         <el-button type="primary" plain @click="resetData(true)">Thêm sản phẩm</el-button>
      </div>
      <template>
         <el-table :data="listProduct.data" style="width: 100%">
            <el-table-column prop="image" label="Ảnh" width="100">
               <template slot-scope="scope">
                  <img style="width: 40px; height: 40px;" class="el-upload-list__item-thumbnail" :src="`http://vuecourse.zent.edu.vn/storage/${scope.row.image}`" alt="Ảnh">
               </template>
            </el-table-column>
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
                  <el-button type="text" size="small" @click="getData(scope.row)">Sửa</el-button>
                  <el-button type="text" size="small" @click="deleteProduct(scope.row.id)">Xóa</el-button>
               </template>
            </el-table-column>
         </el-table>
      </template>

      <el-dialog title="Thêm sản phẩm" :visible.sync="dialogVisible" width="40%">
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
            <el-form-item label="Ảnh">
               <div class="upload-box">
                  <input type="file" @change="onFileChange" ref="upload" />
                  <img :src="dialogImageUrl" alt="" class="img-upload" @click="show()">
               </div>
            </el-form-item>
         </el-form>
         <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Đóng</el-button>
            <el-button type="primary" v-if="!check" @click="updateProduct()">Thay đổi</el-button>
            <el-button type="primary" v-else @click="addProduct()">Tạo mới</el-button>
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
   name: "Ex10_1",
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
         id: '',
         check: false,

         dialogImageUrl: '',
         dialogVisible1: false,
         disabled: false
      }
   },
   methods: {
      resetData(value) {
         this.formLabelAlign.name = ''
         this.formLabelAlign.description = ''
         this.formLabelAlign.price = ''
         this.formLabelAlign.image = ''
         this.dialogImageUrl = ''
         this.id = ''
         if (value) {
            this.check = true;
            this.dialogVisible = true
         } else {
            this.check = false;
         }
      },
      getListProduct(page = 1) {
         let data = '';
         let paramPage = {
            page: page
         };
         (this.search === '') ? data = '/products' : data = `/products?q=${this.search}`
         axios({
            method: 'get',
            baseURL: 'http://vuecourse.zent.edu.vn/api',
            url: data,
            params: paramPage
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
         let bodyFormData = new FormData();
         bodyFormData.append('name', this.formLabelAlign.name);
         bodyFormData.append('description', this.formLabelAlign.description);
         bodyFormData.append('price', this.formLabelAlign.price);
         if (typeof this.formLabelAlign.image === "object") {
            bodyFormData.append('image', this.formLabelAlign.image);
         }
         axios({
            method: 'post',
            url: 'http://vuecourse.zent.edu.vn/api/products',
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
         }).then(() => {
            this.resetData(false)
            this.getListProduct()
            this.search = ''
            this.$message({
               message: 'Tạo sản phẩm thành công.',
               type: 'success'
            });
         }).catch(() => {
            this.$message.error({
               message: 'Tạo sản phẩm thất bại.',
            });
         })
      },
      getData(value) {
         this.id = value.id
         this.check = false
         this.formLabelAlign.name = value.name
         this.formLabelAlign.description = value.description
         this.formLabelAlign.price = value.price
         this.formLabelAlign.image = value.image
         this.dialogVisible = true
      },
      updateProduct() {
         this.dialogVisible = false
         let bodyFormData = new FormData();
         bodyFormData.append('name', this.formLabelAlign.name);
         bodyFormData.append('description', this.formLabelAlign.description);
         bodyFormData.append('price', this.formLabelAlign.price);
         if (typeof this.formLabelAlign.image !== 'string') {
            bodyFormData.append('image', this.formLabelAlign.image);
         }

         axios({
            method: 'post',
            url: `http://vuecourse.zent.edu.vn/api/products/${this.id}`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
         }).then(() => {
            this.resetData(false)
            this.getListProduct()
            this.search = ''
            this.$message({
               message: 'Sửa sản phẩm thành công.',
               type: 'success'
            });
         }).catch(() => {
            this.$message.error({
               message: 'Sửa sản phẩm thất bại.',
            });
         })
      },
      deleteProduct(id) {
         this.$confirm('Bạn có chắc chắn muốn xóa sản phẩm này không')
             .then(() => {
                axios({
                   method: 'delete',
                   url: `http://vuecourse.zent.edu.vn/api/products/${id}`,
                }).then(() => {
                   this.getListProduct()
                   this.$message({
                      message: 'Xóa sản phẩm thành công.',
                      type: 'success'
                   });
                }).catch(() => {
                   this.$message.error({
                      message: 'Xóa sản phẩm thất bại.',
                   });
                })
             })
      },
      handleCurrentChange(value) {
         this.getListProduct(value)
      },

      handleRemove(file) {
         console.log(file);
      },
      show() {
         this.$refs.upload.click()
      },
      onFileChange(e) {
         if (e.target.files.length) {
            const file = e.target.files[0];
            this.dialogImageUrl = URL.createObjectURL(file);
            this.formLabelAlign.image = file

            if (typeof file === "object") {
               console.log('aaaaaaaaaaaaaaa')
            }
            console.log(file)
         }
      },
      getUrl(e) {
         const file = e.target.files[0];
         let data = URL.createObjectURL(file);

         console.log(data)
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

   .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
   }

   .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
   }

   .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
   }

   .avatar {
      width: 178px;
      height: 178px;
      display: block;
   }

   .upload-box {
      position: relative;

      input {
         position: absolute;
         width: 0;
      }
      .img-upload {
         width: 100px;
         height: 100px;
         border: 1px dotted lightgray;
      }
   }

}
</style>