<template>
  <section class="section__banner p-t-250-b-30">
    <div class="wrapper--content">
      <div class="section__simple-text">
        <div v-inview:once.enter="inviewEnter" class="animated__h">
          <h2 class="split__headline">
            {{ data.headline }}
          </h2>
        </div>
      </div>
      <div class="section__simple-text col-6">
        <div class="row">
          <div v-inview:once.enter="inviewEnter" class="animated__h">
            <p class="split__paragraph">
              {{ data.description }}
            </p>
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
      inviewEnter: this.$inviewEnter
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/base/_index.scss';
</style>
