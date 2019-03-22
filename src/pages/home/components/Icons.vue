<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default{
  data () {
    return {
      swiperOption: {
        loop: true
      },
      iconList: [
        {id: '0001', desc: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        {id: '0002', desc: '一日游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'},
        {id: '0003', desc: '北京必游', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'},
        {id: '0004', desc: '溜娃儿', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
        {id: '0005', desc: '爬长城', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png'},
        {id: '0007', desc: '故宫', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'},
        {id: '0008', desc: '北京欢乐谷', imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png'},
        {id: '0009', desc: '踏青赏花', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'},
        {id: '0010', desc: '城市观光', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'},
        {id: '0011', desc: '东方明珠', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'},
        {id: '0012', desc: '迪士尼', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png'},
        {id: '0013', desc: '上海海昌', imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png'},
        {id: '0014', desc: '野生动物园', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
        {id: '0015', desc: '动植物园', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'}
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
      margin-top: .1rem
      .icon
          position: relative
          overflow: hidden
          width: 25%
          height: 0
          float: left
          padding-bottom: 25%
          .icon-img
              position: absolute
              border-sizing: border-box
              padding: .1rem
              top: 0
              left: 0
              right: 0
              bottom: .44rem
              .icon-img-content
                  display: block
                  margin: 0 auto
                  height: 100%
          .icon-desc
              position: absolute
              left: 0
              right: 0
              bottom: 0
              height: .44rem
              line-height: .44rem
              text-align: center
              color: $darkTextColor
              ellipsis()
</style>
