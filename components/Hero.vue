<template>
  <section class="section__hero section-text">
    <div class="wrapper">
      <div class="va">
        <div class="col-xs-12 col-md-8">
          <div class="row">
            <div class="section__hero-content copy">
              <div v-inview:once.enter="inviewEnter" class="section__hero-content-h animated__h">
                <h1 class="inviews fromLeftOuts split__headline">
                  {{ data.title }}
                </h1>
                <p class="inviews fromRightOuts split__paragraph">
                  {{ data.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/mixins/THEORY.breakpoints.scss';
  @import '~/assets/sass/base/mixins/THEORY.transitions.scss';
  @import '~/assets/sass/base/mixins/THEORY.animations.scss';
  @import '~/assets/sass/base/THEORY.fonts.scss';

  .section__hero {
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    -ms-background-size: inherit;
    background-size: cover;
    display: flex;
    justify-content: center;
    justify-content: flex-start;

    @include breakpoint(lg){
      height: 100vh;
      align-items: flex-end;
    }

    &-content {
      position: relative;
      // padding-bottom: 6%;
      // padding-top: 50vw;
      padding-top: 200px;
      padding-bottom: 0;

      @include breakpoint(lg){
        padding-top: 5.5vw;
        padding-bottom: 9vw;
      }

      .lineChild {
        opacity: 0;
      }

    }
  }
</style>
