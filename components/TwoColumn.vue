<template>
  <section class="section__twocolumn p-t-b-150">
    <div class="wrapper--full-bleed">
      <div class="col-md-6">
        <div class="row">
          <div v-inview:once.enter="inviewImageEnter" class="image__block anim-image">
            <img v-bind:src="data.image" class="">
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="v-align">
          <div v-inview:once.enter="inviewEnter" class="text__preview-block animated__h">
            <h2 class="split__headline">
              {{ data.headline }}
            </h2>
            <p v-html="data.description" class="split__paragraph" />
          </div>
        </div>
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

<style>

</style>
