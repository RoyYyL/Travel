<template>
  <div>
    <ul class="list">
      <li class="item"
        v-for = "(item,index) of alphabet"
        :key = "index"
        :ref="item"
        @click = "handleClick(item)"
        @touchstart = "handleTouchstart"
        @touchmove = "handleTouchmove"
        @touchend = "handleTouchend"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    alphabet: Array
  },
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: 0
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick (alph) {
      this.$emit('change', alph)
    },
    handleTouchstart () {
      this.touchStatus = true
    },
    handleTouchmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.alphabet.length) {
            this.$emit('change', this.alphabet[index])
          }
        }, 16)
      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  }

}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.4rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
