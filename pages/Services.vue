<template>
  <div>
    <HeroSimple :data="heroSimpleObj" />
    <BannerServicesGeneral :data="bannerGeneralObj" />

    <ServicesBlock
      v-for="(service, index) in servicesObj"
      :key="service._uid"
      :service="service"
      :delay="index"
    />

    <!-- <ServicesBlock :data="" /> -->
    <BannerLink label="Sitecore Offerings" url="/sitecore" />
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
// import * as Constants from '../constants/constants'
// import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import HeroSimple from '~/components/HeroSimple.vue'
import BannerServicesGeneral from '~/components/BannerServicesGeneral.vue'
import BannerLink from '~/components/BannerLink.vue'
import ServicesBlock from '~/components/ServicesBlock.vue'
import Services from '~/services/services.js'

export default {
  components: {
    // SectionHeadline,
    HeroSimple,
    BannerServicesGeneral,
    BannerLink,
    ServicesBlock
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      title: 'Innate Theory | What We Do',
      sectionLabel: 'strategy',
      sectionTitle: 'Through strategic solutions rooted in technology we help our clients navigate the digital and competitive landscape to deliver concrete results',
      keywords: "sitecore development, website development, atlanta web development, atlanta sitecore development, digital strategy, market research, user experience, interface design, digital experience platforms, cloud infrasturcture, ecommerce development"
    }
  },

  head () {
    return {
      title: this.title,
      author: this.author,
      meta: [
        ...createSEOMeta({
          url: this.url,
          description: 'We help our clients navigate the digital and competitive landscape to deliver concrete results',
          title: this.title
        })
      ]
    }
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('what-we-do/what-we-do')
    const contentArr = response.data.stories[0].content
    const fullUrl = context.env.baseUrl + context.route.path

    // eslint-disable-next-line no-console
    // console.dir(contentArr)

    const convertArrayToObject = (array, key) =>
    // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      url: fullUrl,
      heroSimpleObj: convertArrayToObject(contentArr.contentPlaceholder.filter(e => e.component === 'hero-simple')),
      bannerGeneralObj: convertArrayToObject(contentArr.contentPlaceholder.filter(e => e.component === 'banner-services-general')),
      servicesObj: contentArr.servicesBlockPlaceholder
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>

<style scoped lang="scss">

</style>
