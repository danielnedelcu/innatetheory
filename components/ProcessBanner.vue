<template>
  <section class="section__banner p-t-b-250">
    <div class="wrapper--content">
      <SectionHeadline :label="data.label" :title="data.title" />
    </div>
    <div class="wrapper--content">
      <div class="section__banner-wrapper">
        <div class="section__process">
          <ul class="section__process-ul">
            <Process
              v-for="(process, index) in data.placeholder"
              :key="process._uid"
              :process="process"
              :delay="index"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import Process from '~/components/Process.vue'

export default {
  components: {
    SectionHeadline,
    Process
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
            position: relative;

            @include breakpoint(xs){

            }
            @include breakpoint(sm){

            }
            @include breakpoint(lg){
                // height: 36vw;
            }
            @include breakpoint(wide){

            }
        }

        .section__process {
          margin: 0;
          height: 100%;
          display: flex;

          @include breakpoint(lg){
            margin: 6rem 0;
          }

          ul {
            list-style: none;
            display: flex;
            flex-flow: column;
          }
        }
    }
</style>
