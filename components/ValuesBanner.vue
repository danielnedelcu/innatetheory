<template>
  <section class="section__banner p-t-b-150">
    <div class="wrapper--content">
      <SectionHeadline :label="data.label" :title="data.title" />
    </div>
    <div class="wrapper">
      <div class="section__banner-wrapper">
        <div class="section__values">
          <ul class="section__values-ul">
            <Value
              v-for="value in data.placeholder"
              :key="value._uid"
              :value="value"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import Value from '~/components/Value.vue'

export default {
  components: {
    SectionHeadline,
    Value
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

        .section__values {
          margin: 6rem 0;
          height: 100%;
          display: flex;
          background-color: $g;

          ul {
            list-style: none;
            display: flex;
            flex-flow: row;
          }
        }
    }
</style>
