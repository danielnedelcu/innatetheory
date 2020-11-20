<template>
  <section class="section__large-hero section-text">
    <div class="wrapper--full-bleed banner-dimmer">
      <div v-bind:style="{ backgroundImage: `url(${data.image.filename})` }" class="section__large-hero-image anim-image in-view">
        <div class="wrapper">
          <div class="va">
            <div class="col-xs-12">
              <div class="section__large-hero-content copy">
                <div v-inview:once.enter="inviewEnter" class="section__large-hero-content-h animated__h">
                  <h5>{{ data.label }}</h5>
                  <h1 class="inviews split__headline">
                    {{ data.headline }}
                  </h1>
                </div>
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
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/base/_index.scss';

  .section__large-hero {
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    -ms-background-size: inherit;
    background-size: cover;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 50px;

    @include breakpoint(lg) {
      height: 800px;
      margin-bottom: 250px;
    }

    .banner-dimmer {
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
      }
    }    

    &-image {
        background-repeat: no-repeat;
        background-position: center center;
        -ms-background-size: inherit;
        background-size: cover;
        width: 100%;
        height: 500px;

        @include breakpoint(lg) {
          height: 800px;
        }
    }

    &-content {
      position: relative;
      box-pack: center;
      -moz-justify-content: center;
      -ms-justify-content: center;
      -o-justify-content: center;
      justify-content: center;
      -ms-flex-pack: center;
      display: -moz-flex;
      display: flex;
      box-orient: vertical;
      box-direction: normal;
      -moz-flex-direction: column;
      flex-direction: column;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 500px;
      width: 100%;

      @include breakpoint(lg){
        height: 800px;
      }

      &-h {
        margin-top: 100px;

        @include breakpoint(lg){
          margin-top: 0;
        }
        .split__headline {
            margin-top: 0;
        }
      }

      // @include breakpoint(sm){
      //   padding-bottom: percentage(100 / 150);

      //   @media screen and (orientation: portrait){
      //     padding-top: 30vw
      //   }
      //   @media screen and (orientation: landscape){
      //     padding-top: 20vw
      //   }
      // }
      // @include breakpoint(md){
      //   padding-top: 30vw;
      // }
      // @include breakpoint(lg){
      //   padding-top: 9vw;
      //   padding-bottom: 9vw;
      // }

    }
  }

</style>
