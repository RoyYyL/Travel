<template>
   <div class="header">
         城市选择
        <router-link to="./">
          <div class="iconfont header-back">&#xe651;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    font-size: .32rem;
    text-align: center;
    color: #fff;
    .header-back
      position: absolute
      width: .64rem
      left: 0
      top: 0
      font-size: .4rem
      text-align: center
      color: #fff
</style>
