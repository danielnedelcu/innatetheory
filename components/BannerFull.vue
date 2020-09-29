<template>
  <section class="section__banner p-t-b-150">
    <div class="wrapper">
      <div v-inview:once.enter="inviewImageEnter" v-bind:style="{ backgroundImage: `url(${data.image})` }" class="section__banner-wrapper anim-image">
        <div class="section__banner-theme" />

        <div class="hero__content--center table-content">
          <div class="wrapper">
            <div class="table-cell">
              <div class="">
                <div class="">
                  <h5 class="text-white animated__l">
                    {{ data.label }}
                  </h5>
                  <div v-inview:once.enter="inviewEnter" class="animated__h">
                    <h2 class="text-white split__headline">
                      {{ data.title }}
                    </h2>
                  </div>
                  <a v-bind:href="data.url" class="btn--primary" title="PGA Tour Professional, Sam Ryder">
                    <span>{{ data.cta }}e</span>
                  </a>
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
  },

  computed: {}
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/_index.scss';
    @import '~/assets/sass/extends/_index.scss';

    .section__banner {
        &-wrapper{
            background-size: inherit;
            background-repeat: no-repeat;
            background-position: center center;
            -ms-background-size: inherit;
            background-size: cover;
            height: 65vw;
            position: relative;

            @include breakpoint(xs){

            }
            @include breakpoint(sm){

            }
            @include breakpoint(lg){
                height: 36vw;
            }
            @include breakpoint(wide){

            }

            .section__banner-theme {
                // position: absolute;
                // right: 0;
                // top: 0;
                // left: 0;
                // width: 100%;
                // height: 100%;
                // mix-blend-mode: exclusion;
                // filter: brightness(100%) grayscale(23%) contrast(1.2) opacity(100%);
                // -webkit-filter: brightness(100%) grayscale(23%) contrast(1.2) opacity(100%);
                // -moz-filter: brightness(100%) grayscale(23%) contrast(1.2) opacity(100%);
                // -o-filter: brightness(100%) grayscale(23%) contrast(1.2) opacity(100%);
                // -ms-filter: brightness(100%) grayscale(23%) contrast(1.2) opacity(100%);
                // background-color: #204166;
            }
        }
    }
</style>
