<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="serach-content" ref="search" v-show="keyWord">
      <ul>
        <li class="serach-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityChange(item.name)">
          {{item.name}}
        </li>
        <li  class="serach-item border-bottom" v-show="noSearchList">暂无匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityChange (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('./')
    }
  },
  computed: {
    noSearchList () {
      return !this.list.length
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, { mouseWheel: true, click: true, tap: true })
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      border-radius: .06rem
      text-align: center
      color: #666
      padding: 0 .1rem
  .serach-content
    z-index: 1
    overflow: hidden
    position: absolute
    left: 0
    top: 1.58rem
    right: 0
    bottom: 0
    background: #eee
    .serach-item
      background: #fff
      line-height: .62rem
      padding-left: .2rem
      color: #666
</style>
