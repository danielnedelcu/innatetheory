<template>
  <section class="section__services p-t-b-150">
    <div class="wrapper--content">
      <SectionHeadline :label="service.label" :title="service.title" />
    </div>
    <div class="wrapper">
      <div class="q-container container-inner d-flex">
        <div class="col-md-4">
          <img v-bind:src="service.icon.filename" alt="">
        </div>
        <div class="services-block col-md-8">
          <ServicesBlockItem
            v-for="(block, index) in service.servicePlaceholder"
            :key="block._uid"
            :block="block"
            :delay="index"
            class="columns col-md-6"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import ServicesBlockItem from '~/components/ServicesBlockItem.vue'

export default {
  components: {
    SectionHeadline,
    ServicesBlockItem
  },

  props: {
    service: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter
    }
  },

  methods: {
    convertArrayToObject: (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
  }
}
</script>

<style scoped lang="scss">
  .section__services {
    img {
      width: 70%;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .container-inner {
    margin-top: 50px;
  }

  .services-block {
    display: flex;
    flex-wrap: wrap;
  }
</style>
