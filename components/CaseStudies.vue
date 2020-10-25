<template>
  <section class="section__casestudies p-t-b-150">
    <div class="wrapper--content">
      <SectionHeadline :label="data.label" :title="data.title" />
    </div>

    <div class="wrapper--full-bleed">
      <CaseStudy
        v-for="project in data.placeholder"
        :key="project._uid"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import CaseStudy from '~/components/CaseStudy.vue'

export default {
  components: {
    SectionHeadline,
    CaseStudy
  },

  props: {
    data: { type: Object, required: true }
  },

  // props: {
  //   data: { type: Object, required: true }
  // },

  data () {
    return {
      labelContent: 'case studies',
      labelTitle: 'Challenging the market, driving innovation and accelerating business performance.'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
