<template>
  <section class="banner__link">
    <div class="wrapper">
      <div class="va">
        <div class="banner__link-category h5 animated__l">
          <hr class="dash">
          next section
        </div>

        <nuxt-link :to="url" v-inview:once.enter="inviewEnter" class="btn-banner-large animated__h">
          <span class="split__headline">{{ label }}</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    url: { type: String, required: true }
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

    .banner__link {
        background-color: $primary-color;
        padding: 300px 0;

        &-category {
            margin-top: 0;
            position: relative;
            color: $white;

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

        a {
            position: relative;
            display: inline-block;
            padding: 0 0 15px;
            @include btn-banner-large;
        }
    }
</style>
