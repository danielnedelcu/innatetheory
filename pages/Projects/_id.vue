<template>
  <div>
    <CaseStudyHero :data="heroObj" />
    <CaseStudyHeaderParagraphImage :data="caseStudyHeaderParagraphImageObj" />
    <CaseStudyHeaderParagraph :data="caseStudyHeaderParagraphObj" v-if="caseStudyHeaderParagraphObj" />
    <CaseStudySingleImage :data="caseStudySingleImage" v-if="caseStudySingleImage" />
    <CaseStudyFullWidthImage :data="caseStudyFullWidthImageObj" v-if="caseStudyFullWidthImageObj" />
    <BannerLink label="View All Projects" url="/projects" />
    <!-- {{ $route.params.id }} -->
  </div>
</template>

<script>
import { createSEOMeta } from '../../utils/seo'
import Services from '~/services/services.js'
import CaseStudyHero from '~/components/CaseStudyHero.vue'
import CaseStudyHeaderParagraphImage from '~/components/CaseStudyHeaderParagraphImage.vue'
import CaseStudyHeaderParagraph from '~/components/CaseStudyHeaderParagraph.vue'
import CaseStudyFullWidthImage from '~/components/CaseStudyFullWidthImage.vue'
import CaseStudySingleImage from '~/components/CaseStudySingleImage.vue'
import BannerLink from '~/components/BannerLink.vue'

export default {
  components: {
    CaseStudyHero,
    CaseStudyHeaderParagraphImage,
    CaseStudyHeaderParagraph,
    CaseStudyFullWidthImage,
    CaseStudySingleImage,
    BannerLink
  },

  data () {
    return {
      title: ''// this.routerId
    }
  },

  head () {
    return {
      title: `Innate Theory | Case study for ${this.cl}`,
      meta: [
        ...createSEOMeta({
          title: this.title,
          url: this.url,
          description: `Case study for ${this.title}`
        })
      ]
    }
  },

  computed: {
    // richtext () {
    //   return this.$storyapi.richTextResolver.render(this.blogData.content.content)
    // }
  },

  async asyncData (context) {
    const response = await Services.getPost('projects/' + context.params.id)
    const contentArr = response.data.story
    const fullUrl = context.env.baseUrl + context.route.path
    const clientName = contentArr.content.title

    // eslint-disable-next-line no-console
    // console.dir(clientName)
    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      cl: clientName,
      url: fullUrl,
      projectData: contentArr,
      routerId: context.params.id,
      heroObj: convertArrayToObject(contentArr.content.hero.filter(e => e.component === 'case-study-hero')),
      caseStudyHeaderParagraphImageObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-header-paragraph-image')),
      caseStudyHeaderParagraphObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-header-paragraph')),
      caseStudyFullWidthImageObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-full-width-image')),
      caseStudySingleImage: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-single-image'))
    }
  },

  created () {
    this.title = `Innate Theory | Case study for ${this.cl}`
    // eslint-disable-next-line no-console
    // console.log('PROJECT PAGE', this.cl)

    // this.hero = this.convertArrayToObject(this.projectData.content.hero)
    // this.caseStudyPlaceholder = this.convertArrayToObject(this.projectData.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-header-paragraph-image'))
  },

  methods: {
    convertArrayToObject: (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
  }
}
</script>

<style lang="scss" scoped>

</style>
