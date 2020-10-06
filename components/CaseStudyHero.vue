<template>
  <section class="section__project-hero section-text">
    <div class="wrapper--full-bleed banner-dimmer">
      <div v-bind:style="{ backgroundImage: `url(${data.image.filename})` }" class="section__project-hero-image anim-image in-view" />
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

  .section__project-hero {
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    -ms-background-size: inherit;
    background-size: cover;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    overflow: hidden;
    margin-top: 0;

    @include breakpoint(lg) {
      height: 800px;
    }

    &-image {
        background-repeat: no-repeat;
        background-position: center center;
        -ms-background-size: inherit;
        background-size: cover;
        width: 100%;
        height: 450px;

        @include breakpoint(lg) {
          height: 800px;
        }
    }
  }

</style>
