<template>
  <section>
      <LargeHeroWithText :data="heroObj" />
      <BannerGeneric :data="cloudStrategyContentbj" />
      <BannerGenericWithNoImage :data="roadmapObj" />
  </section>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import Services from '~/services/services.js'
import BannerGeneric from '~/components/BannerGeneric.vue'
import BannerGenericWithNoImage from '~/components/BannerGenericWithNoImage.vue'
import LargeHeroWithText from '~/components/LargeHeroWithText.vue'

export default {
  components: {
    LargeHeroWithText,
    BannerGeneric,
    BannerGenericWithNoImage
  },

  data () {
    return {
      title: ''
    }
  },

  head () {
    return {
      title: `Innate Theory | Cloud Infrastructure`,
      author: this.author,
      meta: [
        ...createSEOMeta({
          title: `Innate Theory | Cloud Infrastructure`,
          url: this.url,
          description: `Innate Theory Cloud Infrastructure`
        })
      ]
    }
  },

  async asyncData (context) {
    const response = await Services.getPost('cloud')
    const contentArr = response.data.story.content
    // const fullUrl = context.env.baseUrl + context.route.path
    // const clientName = contentArr.content.title

    // eslint-disable-next-line no-console
    console.dir(contentArr)
    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      // cl: clientName,
      // url: fullUrl,
      // projectData: contentArr,
      // routerId: context.params.id,
      heroObj: convertArrayToObject(contentArr.hero.filter(e => e.component === 'large-hero')),
      cloudStrategyContentbj: convertArrayToObject(contentArr.placeholder.filter(e => e.label === 'sitecore on azure')),
      roadmapObj: convertArrayToObject(contentArr.placeholder.filter(e => e.label === 'migration accelerator'))
      // caseStudyHeaderParagraphImageObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-header-paragraph-image')),
      // caseStudyHeaderParagraphObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-header-paragraph')),
      // caseStudyFullWidthImageObj: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-full-width-image')),
      // caseStudySingleImage: convertArrayToObject(contentArr.content.caseStudyPlaceholder.filter(e => e.component === 'case-study-single-image'))
    }
  },
}
</script>

<style>

</style>