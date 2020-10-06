<template>
  <li class="section__values-li">
    <div class="section__values-li-wrapper">
      <div v-inview:once.enter="inviewEnter" class="animated__h">
        <h4 class="split__headline">
          {{ value.title }}
        </h4>
        <p class="split__paragraph">
          {{ value.description }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    value: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter
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
      color: $white;
      display: flex;
      align-items: center;
      border-right: 1px solid $h;

      &:last-child {
        border-right: none;
      }

      @include breakpoint(lg){
        margin: 6rem 0;
        width: 33.3339%;
      }

      .section__values-li-wrapper {
        padding: 2.5rem 1rem 1.5rem;

        @include breakpoint(lg) {
          padding: 2.5rem 3.5rem;
        }
      }
    }
</style>
