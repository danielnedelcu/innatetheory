<template>
  <li v-inview:once.enter="inviewlistEnter" v-bind:style="{ 'animationDelay': `${delay * 150}ms`}" class="process-li">
    <hr class="dash">
    <div class="process__wrapper">
      <div class="row">
        <div class="col-md-6">
          <!-- <span class="counter">
            {{ process.count }}
          </span> -->
          <span class="label-l">
            {{ process.title }}
          </span>
        </div>
        <div class="col-md-6">
          <p>
            {{ process.description }}
          </p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    process: { type: Object, required: true },
    delay: { type: Number, required: true }
  },

  data () {
    return {
      inviewlistEnter: this.$inviewlistEnter
    }
  }
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/_index.scss';
    @import '~/assets/sass/extends/_index.scss';

    li {
      width: 100%;
      margin:0;
      color: $black;
      opacity: 0;
      @include Transition;

      .process__wrapper {
        padding: 20px 0 0;

        @include breakpoint(lg){
          padding: 40px 0;
        }

        .counter {
          font-size: 6rem;
          font-family: $font-graphik-extra-light;
        }

        .label-l {
          font-size: 30px;
          font-family: $font-graphik-extra-light;
          line-height: 1;
          padding-right: 0;
          display: block;
          margin-bottom: 40px;

          @include breakpoint(lg){
            font-size: 60px;
            margin-bottom: 0;
            padding-right: 80px;
          }
        }
      }
    }
</style>
