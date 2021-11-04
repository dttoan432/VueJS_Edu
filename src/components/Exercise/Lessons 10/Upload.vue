<template>
   <div id="app">
      <input type="file" @change="onFileChange" ref="upload" />
      <span>Hình ảnh</span>
      <div id="preview">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rzqy_zFZLz9xuX1qg-9Dw9B52LtM0pU2rB50PrnntyAbeaDaUM4-EgRoBd_avNqB0ac&usqp=CAU"
              @click="show()" v-if="baseUrl.length === 0" />
         <img :src="url" @click="show()" v-else-if="url !== ''" />
         <img :src="`http://vuecourse.zent.edu.vn/storage/${baseUrl}`" @click="show()" v-else-if="baseUrl.length > 0" />

         <span @click="reset">x</span>
      </div>
   </div>
</template>

<script>
export default {
   name: "Upload",
   props: ['rop'],
   data() {
      return {
         url: '',
         baseUrl: ''
      }
   },
   methods: {
      onFileChange(e) {
         if (e.target.files.length) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            this.baseUrl = 'a'
            this.$emit('fileImage', file);
         }
      },
      show() {
         this.$refs.upload.click()
      },
      reset() {
         this.url = ''
         this.baseUrl = ''
      }
   },
   watch: {
      rop(val) {
         this.url = ''
         this.baseUrl = '';
         setTimeout(() => {
            if(val.length > 0){
               this.baseUrl = val
            }
         }, 100)
      },
   },
   mounted() {
      this.url = ''
      this.baseUrl = '';
      setTimeout(() => {
         if(this.rop.length > 0){
            this.baseUrl = this.rop
         }
      }, 100)
   }
}
</script>

<style scoped lang="scss">
#app {
   margin-right: 20px;

   input {
      width: 0;
      height: 0;
   }

   #preview {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      position: relative;

      img {
         width: 100%;
         height: 100%;
         border: 1px solid black;
      }

      span {
         position: absolute;
         top: 10px;
         color: #e9eaec;
         right: 20px;
         font-size: 18px;
         display: none;
         cursor: pointer;
      }

      &:hover span {
         display: block;
      }
   }
}
</style>