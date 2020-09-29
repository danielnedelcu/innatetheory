<template>
  <section class="section__hero__alt section-text">
    <div class="wrapper--full-bled">
      <div :style="{backgroundImage: `url(${ data.image.filename })`}" class="section__hero__alt-image anim-image in-view">
        <div class="wrapper">
          <div class="va">
            <div class="col-xs-12 col-md-6">
              <div class="row">
                <!-- <div class="section__hero__alt-content copy">
                  <div v-inview:once.enter="inviewEnter" class="section__hero__alt-content-h animated__h">
                    <h2 class="inviews split__headline">
                      {{ data.title }}
                    </h2>
                    <p class="inviews split__paragraph">
                      {{ data.subtitle }}
                    </p>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero__box" />
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
      // inviewEnter: this.$inviewEnter
    }
  },

  mounted () {
    // eslint-disable-next-line no-console
    // console.dir(d)
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__hero__alt {
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    -ms-background-size: inherit;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    overflow: hidden;
    margin-top: 100px;

    &-image {
      background-repeat: no-repeat;
      background-position: center center;
      -ms-background-size: inherit;
      background-size: cover;
      height: 850px;
    }

    &-content {
      position: relative;
      box-pack: center;
      -moz-justify-content: center;
      -ms-justify-content: center;
      -o-justify-content: center;
      justify-content: center;
      -ms-flex-pack: center;
      display: -webkit-box;
      display: -moz-box;
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
      height: 80vh;
      width: 100%;

      &-h {
        .split__headline {
          margin-top: 0;
        }
      }

      @include breakpoint(sm){
        padding-bottom: percentage(100 / 150);

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
        padding-top: 9vw;
        padding-bottom: 9vw;
      }

      .lineChild {
        opacity: 0;
      }
    }

    .hero__box {
      position: absolute;
      height: 100px;
      width: 600px;
      background-color: $white;
      bottom: 0;
      right:0;
      display: none;

      &.top {
        top: 0;
        left: 0;
      }
    }
  }
</style>
