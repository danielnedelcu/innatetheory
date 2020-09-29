<template>
  <section class="section__banner p-t-b-250">
    <div class="wrapper--content">
      <SectionHeadline :label="data.label" :title="data.title" />
    </div>

    <div class="wrapper--content">
      <div class="section__simple-text">
        <div v-inview:once.enter="inviewEnter" class="animated__h">
          <!-- <h2 class="text-white split__headline">Healthcare IT Connect Summit</h2> -->
          <p v-html="data.description" class="split__paragraph" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadline from '~/components/shared/SectionHeadline.vue'

export default {
  components: {
    SectionHeadline
  },

  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter
    }
  },

  computed: {

  }
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
        }

        .section__simple-text {
          display: flex;
          position: relative;
          background-color: white;

          @include clearfix;

          @include breakpoint(md){
            max-width: 70rem;
          }
          @include breakpoint(lg){
            width: percentage(.80);
          }
          @include breakpoint(xl){
            width: percentage(.80);
          }

          P {
            color : $white;
            padding: 20px 0;
            color: $d;
            margin: 0;
          }
        }
    }
</style>
