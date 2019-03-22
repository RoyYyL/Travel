<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_200x200_8606cb4d.jpg', title: '大连圣亚海洋世界', desc: '辽宁省大连市沙河口区中山路608-6-8号（星海广场西500米，星海公园内）'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_200x200_8606cb4d.jpg', title: '海昌发现王国', desc: '辽宁省大连市金州区金石路36号金石滩国家旅游度假区'},
        {id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/89/8965f21723d9da86a3.water.jpg_200x200_90a1a827.jpg', title: '大连森林动物园', desc: '大连市西岗区迎春路60号（圈养区）、大连市西岗区滨海西路79号（散养区）'},
        {id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/f2/f2b803bcf9a4a6a990.water.jpg_200x200_188907c7.jpg', title: '大连铭湖旅游渡假区', desc: '辽宁大连市瓦房店炮台镇沈大高速公路出口处'},
        {id: '0005', imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/d4/e31eb1014435ca09e5f7d7d4a3feac58.water.jpg_200x200_b5242f8f.jpg', title: '大连香洲旅游度假区', desc: '辽宁省大连市瓦房店市谢屯镇'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
</style>
