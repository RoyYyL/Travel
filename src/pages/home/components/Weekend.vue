<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekList" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-info-name">{{item.name}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
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
    border-bottom: .05rem solid #eaeaea
    .item-img
      overflow: hidden;
      width: 100%
      height: 0;
      padding-bottom: 37.4375%;
    .item-img img
      width: 100%
      padding-bottom: 37.4375%;
    .item-info
      position: relative;
      padding: .14rem .2rem .2rem .2rem;
      .item-info-name
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        ellipsis()
      .item-info-desc
        overflow: hidden;
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        ellipsis()
</style>
