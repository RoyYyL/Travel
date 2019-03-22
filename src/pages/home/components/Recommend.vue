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
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item-week" v-for="item of weekList" :key="item.id">
        <div class="item-week-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="item-week-info">
          <p class="item-week-info-name">{{item.name}}</p>
          <p class="item-week-info-desc">{{item.desc}}</p>
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
        {id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_200x200_4ab5da75.jpg', title: '大连圣亚海洋世界', desc: '辽宁省大连市沙河口区中山路608-6-8号（星海广场西500米，星海公园内）'},
        {id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/p0/1808/d8/d89ec1b26e92573ea3.water.jpg_200x200_8606cb4d.jpg', title: '海昌发现王国', desc: '辽宁省大连市金州区金石路36号金石滩国家旅游度假区'},
        {id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/89/8965f21723d9da86a3.water.jpg_200x200_90a1a827.jpg', title: '大连森林动物园', desc: '大连市西岗区迎春路60号（圈养区）、大连市西岗区滨海西路79号（散养区）'},
        {id: '0004', imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/f2/f2b803bcf9a4a6a990.water.jpg_200x200_188907c7.jpg', title: '大连铭湖旅游渡假区', desc: '辽宁大连市瓦房店炮台镇沈大高速公路出口处'},
        {id: '0005', imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/d4/e31eb1014435ca09e5f7d7d4a3feac58.water.jpg_200x200_b5242f8f.jpg', title: '大连香洲旅游度假区', desc: '辽宁省大连市瓦房店市谢屯镇'}
      ],
      weekList: [
        {id: '001', imgUrl: 'http://img1.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg', name: '大连泡汤圣地', desc: '享受生活，放松自己，来一段轻松的旅程'},
        {id: '002', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg', name: '大连必打卡', desc: '爱上北方的碧海蓝天'},
        {id: '003', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg', name: '亲子游乐', desc: '来生机勃勃的森林野生动物园留下你们珍贵的足迹，这里是儿童的天堂，大人最美好的回忆'},
        {id: '004', imgUrl: 'http://img1.qunarzz.com/sight/source/1507/6b/70d17d828d87e1.jpg_r_640x214_6a995270.jpg', name: '周末游首选', desc: '泡温泉，戏冰雪，和宝贝尽情嗨玩整个冬日吧！抚顺给你和孩子一个不一样的冬日体验'},
        {id: '005', imgUrl: 'http://img1.qunarzz.com/sight/source/1811/57/79828dd5cf1d3.jpg_r_640x214_300f397d.jpg', name: '趣游大连展馆', desc: '邂逅大连的展馆，感受展馆中的文化。'}
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
  .item-week
    overflow: hidden
    height: 4.4rem
    border-bottom: .05rem solid #eaeaea
    .item-week-img
      overflow: hidden;
      width: 100%
      height: 0;
      padding-bottom: 37.4375%;
    .item-week-info
      position: relative;
      padding: .14rem .2rem .2rem .2rem;
      .item-week-info-name
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        ellipsis()
      .item-week-info-desc
        overflow: hidden;
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        ellipsis()
</style>
