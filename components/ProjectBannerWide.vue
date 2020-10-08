<template>
  <section class="section__hero-project row-mobile">
    <div class="wrapper banner-dimmer">
      <div class="project__teaser">
        <div class="project__teaser-wrapper">
          <div v-inview:once.enter="inviewImageEnter" v-bind:style="{ backgroundImage: `url(${project.image})` }" class="section__hero-project-image anim-image" />
          <div class="pos-abs">
            <div class="mobile-position-bottom va">
              <div class="wrapper--bloglist">
                <div v-inview:once.enter="inviewEnter" class="project__teaser-content animated__h">
                  <a :href="project.external_link.cached_url" target="_blank" class="button-animated-white">
                    <h2 class="post-title split__headline">
                      {{ project.title }}
                    </h2>
                  </a>
                  <div class="">
                    <n-link :to="project.url.cached_url" v-if="project.url.cached_url" class="btn--primary-reverse">
                      <span>view case study</span>
                    </n-link>
                  </div>
                  <!-- <p>
                    {{ project.description }}
                  </p> -->
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
  components: {

  },

  props: {
    project: { type: String, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter
    }
  },

  methods: {
    convertArrayToObject: (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__hero-project {
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

    &-image {
      background-repeat: no-repeat;
      background-position: center center;
      -ms-background-size: inherit;
      background-size: cover;
      height: 450px;
      @include Transition(5s);

      @include breakpoint(lg){
        height: 700px;
      }
    }

    &:hover {
      .section__hero-project-image {
        transform: scale(1.03);
      }
        .banner-dimmer {
          &:before {
            background-color: rgba(0, 0, 0, 0.25);
          }
        }
    }

    .banner-dimmer {
      &:before {
        content: '';
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
        @include Transition;
      }
    }

    .project__teaser {
      width: 100%;

      &-wrapper {
        position: relative;
        overflow: hidden;

        .pos-abs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          // padding-right: 15px;
          // padding-left: 15px;

          // @include breakpoint(lg){
          //   padding-right: 0;
          //   padding-left: 0;
          // }

          .va {
            display: table;
            table-layout: fixed;
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none;
            border-spacing: 0;
            border-collapse: collapse;
            box-sizing: border-box;
            z-index: 10;
            display: flex;
            align-items: center;

            // .project__teaser-content {

            // }
          }
        }
      }

      &-content {
        a {
          position: relative;
          display: inline-block;
        }
      }
    }
  }

</style>
