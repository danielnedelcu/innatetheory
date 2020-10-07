<template>
  <div class="section__headline section-text">
    <div class="section__hero-content copy">
      <div class="section__headline-category h5 animated__l">
        <hr class="dash">
        {{ label }}
      </div>

      <div v-inview:once.enter="inviewEnter" class="section__hero-content-h animated__h">
        <h2 class="split__headline">
          {{ title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    title: { type: String, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter
    }
  }
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/_index.scss';

    .section__headline {
        &-category {
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

      .section__hero-content {
        margin-bottom: 20px;

        @include breakpoint(lg){
          margin-bottom: 50px;
        }
      }
    }
</style>
