<template>
  <div class="col">
    <div class="section__sitecore-teaser-wrapper-item">
      <div class="section__headline-category h5 animated__l"><hr class="dash">
        {{ item.label }}
      </div>
      <div v-inview:once.enter="inviewEnter" class="headline-container animated__h">
        <h4 class="split__headline">
          {{ item.headline }}
        </h4>
        <p class="split__paragraph">
          {{ item.description }}
        </p>
      </div>
      
      <n-link :to="item.placeholder[0].url.cached_url" class="btn--primary">
        <span>{{ item.placeholder[0].label }}</span>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter
    }
  },
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__sitecore-teaser-wrapper-item {
    .section__headline-category {
      margin-top: 0;
      position: relative;

      @include breakpoint(md){
        margin-bottom: 3.90625vw;
      }
      @include breakpoint(lg){
        margin-bottom: 3.33333vw;
      }
      @include breakpoint(xl){
        margin-bottom: 3.39847vw;
      }

      .dash {
        position: absolute;
        margin-top: -10px;
        margin-bottom: 0;
        width: 3rem;
        height: 0;
        display: inline-block;
        vertical-align: middle;
        border-top: .2rem solid;
        top: -.1rem;
      }
    }
    .headline-container {
      h4 {
        line-height: 1.3;
        margin: 30px 0;
      }
    }
  }
</style>