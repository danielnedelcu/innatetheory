<template>
  <section class="section__banner p-t-250-b-30">
    <div class="wrapper">
      <div v-inview:once.enter="inviewImageEnter" class="image__block">
        <img v-bind:src="data.image.filename" class="">
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
      inviewImageEnter: this.$inviewImageEnter
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
