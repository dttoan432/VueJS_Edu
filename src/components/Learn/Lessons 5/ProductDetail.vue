<template>
  <div class="container">
    <div class="box">
      <el-row>
        <el-col :span="12">
          <div class="grid-content navleft">
            <el-carousel height="500px">
              <el-carousel-item v-for="item in 4" :key="item">
                <el-image :src="product.images"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content navright">
            <h2>Lá vối 100g</h2>
            <p>020020051</p>
            <h3>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
            </h3>
            <h3>{{ product.price }}</h3>
            <br>
            <br>
            <p>Nguồn gốc sản phẩm: Homefood <br>Nhà phân phối: Homefood</p>
            <br>
            <b>Lá vối tươi, lá chè tươi rừng Ba Vì</b>

            <div class="bug">
              <div class="like">
                <i class="el-icon-star-on"></i>
              </div>
              <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
              <el-button type="success">Đặt mua</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="content-wrap">
      <div class="content">
        <h3>Thông tin sản phẩm</h3>
        <p>Nếu cần 1 loại nước uống dễ nấu, dễ uống và tiện sử dụng trong những ngày nắng nóng, bạn có thể lựa chọn lá
          vối
          tươi Đại Ngàn.</p>
        <br>
        <p>Cây vối thuộc loại thân gỗ, cao trên 10m, lá vối có mùi thơm dễ chịu, đun nước có vị đậm đà. Cây vối mọc tự
          nhiên trên đất rừng quốc gia Ba Vì, tích tụ đủ nắng gió, đủ dưỡng chất từ mạch nước khoáng đầu nguồn, nên
          hương
          vị nước vối tươi Đại Ngàn luôn có sự khác biệt.</p>
        <br>
        <p>Cách dùng : lấy 3-5 lá vối rửa sạch, đun sôi với nước trong 5 phút, ngâm lá ủ trong ấm 1 h rồi dùng uống cả
          ngày. Có thể để nguội và giữ mát trong tủ lạnh.</p>
        <br>
        <p>Lá vối tươi nhiều công dụng, có nhiều vitamin, khoáng chất có khả năng diệt vi khuẩn gây bệnh, thanh nhiệt,
          tiêu đờm, giảm mỡ máu, hỗ trợ giảm đường huyết, giảm cân.... Không dùng nước lá vối khi bụng đói, không pha
          nước
          quá đặc...
        </p>
        <br>
        <p>Lá vối tươi, lá chè xanh tươi Đại Ngàn được cung cấp hàng ngày tại Homefood.</p>
        <br>
        <p><b>Đóng gói là vối ( 100g ) - lá chè xanh ( 60g )</b></p>
        <br>
        <p><b>Giá bán : 10.000 đ / gói</b></p>
        <br>
        <p>Bảo quản tủ mát dùng trong 2- 3 ngày.</p>
      </div>
    </div>

    <div class="footer-wrap">
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="value in products" :key="value">
          <div class="content-main">
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
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ['index'],
  data() {
    return {
      product: {
        name: 'Lá vối 100g',
        images: 'https://homefoodshop.vn/api/media-service/thumbnails/450/250/7c8b925e-72ca-4f9f-945e-9ffce65e21d8.jpg',
        price: '10,000',
      },
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

      ],
      num: 1
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .box {
    width: 75%;
    margin: 0 auto;

    .navright {
      padding: 0 30px;
      text-align: left;

      .bug {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;

        .like {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f5f7fa;
          border-radius: 50%;
        }
      }
    }
  }

  .content-wrap {
    text-align: left;
    background-color: #f8f4ed;

    .content {
      padding: 50px 0;
      width: 75%;
      margin: 50px auto;
    }
  }

  .footer-wrap {
    width: 75%;
    margin: 0 auto;
  }
}

.el-image {
  width: 100%;
}

.el-carousel__container {
  height: 300px !important;
}

.content-main {
  padding: 6px;
  width: 50%;
  margin: 0 auto;

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
</style>