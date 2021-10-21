<template>
  <div class="container">
    <div class="content">
      <el-row>
        <el-col :span="6">
          <div class="grid-content navleft">
            <el-row class="tac">
              <el-col :span="24">
                <div class="content-title">
                  <div class="title-menu">Danh mục sản phẩm</div>
                </div>
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen"
                         @close="handleClose">
                  <el-submenu index="1">
                    <template slot="title">
                      <span>Food Care</span>
                    </template>
                    <el-menu-item-group title="Group One">
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                      <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">item four</template>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <span>Body Care</span>
                    </template>
                    <el-menu-item-group title="Group One">
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                      <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">item four</template>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <span>Home Care</span>
                    </template>
                    <el-menu-item-group title="Group One">
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                      <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">item four</template>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <span>Mind Care</span>
                    </template>
                    <el-menu-item-group title="Group One">
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                      <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">item four</template>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content navright">
            <div class="content-title">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
                <el-breadcrumb-item>Danh mục sản phẩm</el-breadcrumb-item>
              </el-breadcrumb>

              <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="100">
              </el-pagination>
            </div>
            <div class="content-main">
              <el-row>
                <el-col :span="8" v-for="(value, index) in products" :key="index">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="value.images" class="image">
                    <div style="padding: 14px;" class="card-info">
                      <span>{{ value.name }}</span>
                      <div class="bottom">
                        <span>{{ value.price }} đ</span>
                        <div>
                          <i class="el-icon-shopping-cart-1"></i>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Baselayout",
  data() {
    return {
      products: [
        {
          name: 'Lá vối 100g',
          images: 'https://homefoodshop.vn/api/media-service/thumbnails/450/250/7c8b925e-72ca-4f9f-945e-9ffce65e21d8.jpg',
          price: '10,000',
        },
        {
          name: 'Sữa yến mạch Pink Lady 800gr',
          images: 'https://homefoodshop.vn/api/media-service/thumbnails/450/250/40c2ad4e-3cc2-415e-968f-c5b4dea39bec.jpg',
          price: '765,000',
        },
        {
          name: 'Đậu lăng xanh hữu cơ Markal 500g',
          images: 'https://homefoodshop.vn/api/media-service/thumbnails/450/250/b6b98a13-cc8a-4ba3-a3bc-51957af16822.jpg',
          price: '176,000',
        },
        {
          name: 'Rong biển nấu canh 100gr',
          images: 'https://homefoodshop.vn/api/media-service/thumbnails/450/250/a86ce624-9b1c-48ec-8fc0-b582464a5b45.jpg',
          price: '76,000',
        },
        {
          name: 'Bơ đậu phộng nguyên chất mịn 240gr',
          images: 'https://homefoodshop.vn/api/media-service/thumbnails/450/250/d6d0a5bf-03aa-4db3-9112-b8dee607250e.jpg',
          price: '100,000',
        },
        {
          name: 'Hạt Methi ấn Độ 500gr',
          images: 'https://homefoodshop.vn/api/media-service/thumbnails/450/250/2bfe7c91-eefb-40c1-b2be-c406f84d64e9.jpg',
          price: '108,000',
        },

      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 75%;
  margin: 0 auto;

  .content {
    text-align: left;

    .el-row {
      .el-col {
        .navleft {
          padding: 10px;
        }

        .navright {
          padding: 10px;

          .content-main {
            padding: 6px;

            .el-card {
              margin: 10px;

              img {
                width: 100%;
                height: 300px;
              }

              .card-info {
                .bottom {
                  margin-top: 20px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;

                  div {
                    background-color: #99a9bf;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                  }
                }
              }
            }
          }
        }

        .title-menu {
          text-align: left;
        }
      }
    }
  }
}

.content-title {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
}

.el-submenu {
  text-align: left;
}

.el-menu-item {
  text-align: left;
}
</style>