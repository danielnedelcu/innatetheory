<template>
  <swiper-slide v-inview:once.enter="inviewgridEnter" v-bind:style="{color: textColor, backgroundColor: backgroundColor, width: boxWidth}" class="client__grid-li li">
    <h5>{{ data.label }}</h5>
  </swiper-slide>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
export default {
  components: {
    Swiper,
    SwiperSlide
  },

  props: {
    data: { type: Object, required: true },
    textColor: { type: String, required: true },
    backgroundColor: { type: String, required: true },
    boxWidth: { type: String, required: true }
  },

  data () {
    return {
      inviewgridEnter: this.$inviewgridEnter
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .li {
    // background-color: $g;
    padding: 50px;
    // color: this.textColor;
    margin-right: 1px;
    // width: 20%; //calc(25% - 2rem);
    flex: 0 0 auto;
    align-items: center;
    display: flex;
    opacity: 0; 
    height: 70px;
    position: relative;
    padding: 50px 50px;

    @include breakpoint(lg){
      height: auto;
      padding: 80px 50px;
    }

    h5 {
      margin: 0;
      font-size: 0.9rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
