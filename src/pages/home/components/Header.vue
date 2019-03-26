<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe651;</div>
        </div>
        <div class="header-input"> <span class="iconfont">&#xe819;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
        <div class="header-right">
            {{city}}<span class="iconfont back-icon">&#xe614;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
  props: {
    city: String
  },
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background : $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background: #fff
      color: #ccc
      text-align: center
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color:#fff
</style>
