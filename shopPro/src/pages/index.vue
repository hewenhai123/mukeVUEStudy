<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}444</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">Hot</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>

      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <div>
          <ul>
            <li v-for="item in newsList">
              <a :href="item.url" class="list-item">{{item.title}}</a>
            </li>
          </ul>

        </div>


      </div>
    </div>
    <div class="index-right">
      <div>轮播图</div>

      <div class="index-board-item" v-for="(item,index) in boardList"
           :class="[{'line-last':index%2!==0},'index-board-'+item.id]">
        <div class="index-board-item-inner">
          <img src="" alt="">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <div>
            <router-link class="button" :to="{path:'detail/'+item.tokey}">点击购买</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default{
    created(){
      this.$http.get('/api/getNewsList')
        .then((rs) => {
          this.newsList = rs.data
        }, (er) => {
          console.log(er)
        })
    }

    ,
    name: 'indexPage',
    data(){
      return {
        productList: {
          pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }

        },
        newsList: [],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
      }
    }
  }


</script>
<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 300px;
    text-align: left;

  }

  .index-right {
    float: left;
    width: 900px;
  }

  .index-left-block {
    margin: 15px;
    background: #ffffff;
    box-shadow: 0 0 1px #ddd;
  }

  .index-left-block .hr, .index-left-block h2 {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #ffffff;
  }

  .index-left-block h2, .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px;
    font-weight: bold;
    color: #222222;
  }

  .index-left-block .hr {
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }

  .index-left-block li {
    padding: 5px;
  }

  .hot-tag {
    color: #ffffff;
    background: red;
    padding: 2px;
  }

  .lastest-news {
    min-height: 512px;
  }

  .index-board-item {
    float: left;
    width: 400px;
    background: #ffffff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin: 0 20px 20px 0
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }

  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }

  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }

  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }

  .line-last {
    margin-right: 0px;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .button {
    margin-top: 20px;
    background: #4fc08d;
    color: #ffffff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;

  }

  .button:hover {
    background: #42916a;
  }

  .lastest-news {

  }

  .list-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>
