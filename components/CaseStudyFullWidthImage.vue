<template>
  <section class="section__banner p-t-250-b-30">
    <div class="wrapper--full-bleed">
      <div class="image__block">
        <!-- <img v-bind:src="data.image.filename" class=""> -->
        <picture>
          <source v-bind:srcset="data.image.filename" media="(max-width: 768px)">
          <source v-bind:srcset="data.image.filename" media="(min-width: 769px)">
          <img v-bind:src="data.image.filename" alt="Roundpoint images collage">
        </picture>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/base/_index.scss';

  .image__block {
    margin-top: 5%;
    margin-bottom: 5%;
  }
</style>
