<template>
  <div>
    <CaseStudyHero :data="heroObj" />
    <CaseStudyHeaderParagraphImage :data="caseStudyHeaderParagraphImageObj" />
    <CaseStudySingleImage :data="caseStudySingleImage" />
    <CaseStudyHeaderParagraph :data="caseStudyHeaderParagraphObj" v-if="caseStudyHeaderParagraphObj" />
    <CaseStudyFullWidthImage :data="caseStudyFullWidthImageObj" />
    <CaseStudyClosingCopy :data="caseStudyClosingCopyObj" />
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
import CaseStudyClosingCopy from '~/components/CaseStudyClosingCopy.vue'
import BannerLink from '~/components/BannerLink.vue'

export default {
  components: {
    CaseStudyHero,
    CaseStudyHeaderParagraphImage,
    CaseStudyFullWidthImage,
    CaseStudyHeaderParagraph,
    CaseStudySingleImage,
    CaseStudyClosingCopy,
    BannerLink
  },

  data () {
    return {
      title: 'Innate Theory | Case study for Global Payments Integrated'// this.routerId
    }
  },

  head () {
    return {
      title: this.title,
      author: this.author,
      meta: [
        ...createSEOMeta({
          title: this.title,
          url: this.url,
          description: 'Case study for Global Payments Integrated'
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
    const response = await Services.getPost('projects/openedge')
    const contentArr = response.data.story
    const fullUrl = context.env.baseUrl + context.route.path

    // eslint-disable-next-line no-console
    // console.dir(contentArr)
    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      url: fullUrl,
      projectData: contentArr,
      routerId: context.params.id,
      heroObj: convertArrayToObject(contentArr.content.hero.filter(e => e.component === 'case-study-hero')),
      caseStudyHeaderParagraphImageObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-header-paragraph-image')),
      caseStudyHeaderParagraphObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-header-paragraph')),
      caseStudyFullWidthImageObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-full-width-image')),
      caseStudySingleImage: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-single-image')),
      caseStudyClosingCopyObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-closing-copy'))
    }
  },

  created () {
    // eslint-disable-next-line no-console
    // console.dir('PROJECT PAGE')

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
