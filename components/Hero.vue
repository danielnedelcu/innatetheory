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
    align-items: flex-end;

    @include breakpoint(lg){
      height: 100vh;
    }

    &-content {
      position: relative;
      padding-bottom: 66.66668%;

      @include breakpoint(sm){
        padding-bottom: 6%;

        @media screen and (orientation: portrait){
          padding-top: 30vw
        }
        @media screen and (orientation: landscape){
          padding-top: 20vw
        }
      }
      @include breakpoint(md){
        padding-top: 30vw;
      }
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
