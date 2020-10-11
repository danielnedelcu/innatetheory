<template>
  <div class="">
    <Hero :data="heroObj" />
    <TwoColumn :data="twoColumnObj" />
    <EventBannerFull :data="eventBannerObj" />
    <ClientGrid :data="clientsGridObj" />
    <CaseStudies :data="caseStudyPreview" />
    <BannerFull :data="bannerFullObj" />
    <BlogTeaserWideParent :data="post" />
    <BannerLink label="Who We Are" url="/about" />
  </div>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import * as Constants from '../constants/constants'
import Hero from '~/components/Hero.vue'
import TwoColumn from '~/components/TwoColumn.vue'
import EventBannerFull from '~/components/EventBannerFull.vue'
import ClientGrid from '~/components/ClientGrid.vue'
import CaseStudies from '~/components/CaseStudies.vue'
import BannerFull from '~/components/BannerFull.vue'
import BlogTeaserWideParent from '~/components/BlogTeaserWideParent.vue'
import BannerLink from '~/components/BannerLink.vue'
import Services from '~/services/services.js'

export default {
  components: {
    Hero,
    TwoColumn,
    EventBannerFull,
    ClientGrid,
    CaseStudies,
    BannerFull,
    BlogTeaserWideParent,
    BannerLink
  },

  data () {
    return {
      title: 'Innate Theory'
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        ...createSEOMeta({
          title: this.title,
          url: this.url,
          description: "A boutique digital consultancy that provides personalized attention and strategic solutions, rooted in technology, to some of the most innovative clients. We aim to help brands and businesses navigate the waves of today's digital landscape to deliver tangible business results"
        })
      ]
    }
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('homepage')
    const contentArrr = response.data.stories[0].content.body
    const fullUrl = context.env.baseUrl + context.route.path

    // eslint-disable-next-line no-console
    // console.log(context.env.baseUrl)

    /**
     * Blog data is another request which is unrelated from the
     * homepage data
     */
    const blogData = await Services.getData('thoughts')
    const blogResponse = blogData.data.stories

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      url: fullUrl,
      heroObj: convertArrayToObject(contentArrr.filter(e => e.component === 'hero')),
      twoColumnObj: convertArrayToObject(contentArrr.filter(e => e.component === 'two-column')),
      eventBannerObj: convertArrayToObject(contentArrr.filter(e => e.component === 'event-banner')),
      clientsGridObj: convertArrayToObject(contentArrr.filter(e => e.component === 'client-grid')),
      caseStudyPreview: convertArrayToObject(contentArrr.filter(e => e.component === 'case-study-preview')),
      bannerFullObj: convertArrayToObject(contentArrr.filter(e => e.component === 'banner-full')),
      post: blogResponse.filter((item, index) => (index < Constants.HOMEPAGE_BLOG_MAX))
    }
  },

  mounted () {
    // eslint-disable-next-line no-console
    // console.log(this.baseUrl)
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>

<style scoped lang="scss">
</style>
