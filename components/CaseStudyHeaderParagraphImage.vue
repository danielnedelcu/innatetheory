<template>
  <section v-if="data" class="section__banner p-t-250-b-30">
    <div class="wrapper--content">
      <div class="section__simple-text">
        <div v-inview:once.enter="inviewEnter" class="animated__h">
          <h2 class="split__headline">
            {{ data.headline }}
          </h2>
        </div>
      </div>
      <div class="section__simple-text col-lg-6 col-xs-12">
        <div class="row">
          <div v-inview:once.enter="inviewEnter" class="animated__h">
            <p class="split__paragraph">
              {{ data.description }}
            </p>
          </div>
        </div>
      </div>
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
      inviewEnter: this.$inviewEnter,
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
