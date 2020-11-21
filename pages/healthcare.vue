<template>
  <section>
      <LargeHeroWithText :data="heroObj" />
      <BannerGeneric :data="consultingContentbj" />
      <BannerGenericWithBackground :data="experienceObj" />
      <!-- <BannerGenericWithBackground :data="cloudContentObj" /> -->
      <BannerGenericWithNoImage :data="cloudContentObj" />
      <BannerGeneric :data="marketingContentObj" />
      <BannerLink label="Our Work" url="/projects" />
  </section>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import Services from '~/services/services.js'
import LargeHeroWithText from '~/components/LargeHeroWithText.vue'
import BannerGeneric from '~/components/BannerGeneric.vue'
import BannerGenericWithBackground from '~/components/BannerGenericWithBackground.vue'
import BannerGenericWithNoImage from '~/components/BannerGenericWithNoImage.vue'
import BannerLink from '~/components/BannerLink.vue'

export default {
  components: {
    LargeHeroWithText,
    BannerGeneric,
    BannerGenericWithBackground,
    BannerLink,
    BannerGenericWithNoImage
  },

  data () {
    return {
      title: ''
    }
  },

  head () {
    return {
      title: `Innate Theory | Health`,
      author: this.author,
      meta: [
        ...createSEOMeta({
          title: `Innate Theory | Health`,
          url: this.url,
          description: `Innate Theory Health strategy, digital platforms and cloud computing services`
        })
      ]
    }
  },

  async asyncData (context) {
    const response = await Services.getPost('healthcare')
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
      consultingContentbj: contentArr.placeholder[0],
      experienceObj: convertArrayToObject(contentArr.placeholder.filter(e => e.label === 'digital experience')),
      // cloudContentObj: contentArr.placeholder[2],
      cloudContentObj: convertArrayToObject(contentArr.placeholder.filter(e => e.label === 'cloud infrastructure')),
      marketingContentObj: convertArrayToObject(contentArr.placeholder.filter(e => e.label === 'healthcare marketing'))
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