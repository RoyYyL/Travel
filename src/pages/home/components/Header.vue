<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe651;</div>
        </div>
        <div class="header-input"> <span class="iconfont">&#xe819;</span>输入城市/景点/游玩主题</div>
        <div class="header-right">
            城市<span class="iconfont back-icon">&#xe614;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .86rem
    background : #00bcd4
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
</style>
