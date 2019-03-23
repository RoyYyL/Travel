<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul v-if="showList">
      <li class="item" v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  },
  computed: {
    showList () {
      return this.list.length
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
