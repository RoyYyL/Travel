<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
              <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="list-item" v-for="city of item" :key="city.id" @click="handleCityClick(city.name)">
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscorll from 'better-scroll'
export default {
  props: {
    hotCities: Array,
    cities: Object,
    changeAlphabet: String
  },
  name: 'CityList',
  methods: {
    handleCityClick (city) {
      // 调用actions,actions调用mutations
      // this.$store.dispatch('changeCity', city)
      // 直接调用mutations
      this.$store.commit('changeCity', city)
      this.$router.push('./')
    }
  },
  mounted () {
    // 因为使用了batter-scroll 使得@click方法不执行，加上{ mouseWheel: true, click: true, tap: true }后生效
    this.scroll = new Bscorll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  },
  watch: {
    changeAlphabet (alph) {
      const element = this.$refs[this.changeAlphabet][0]
      this.scroll.scrollToElement(element)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
   .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .list-item
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
