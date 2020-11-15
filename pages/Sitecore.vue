<template>
  <section>
    <HeroSimple :data="heroSimpleObj" />
    <div class="sitecore__blocks">
      <BannerGenericWithBackground :data="sitecoreDevObj" />
      <SitecoreContentBlock
        v-for="(block, index) in sitecoreServicesObj.sitecoreBlock"
        :key="block._uid"
        :block="block"
        :delay="index"
      />

      <BannerGeneric :data="personalizationContentbj" />

      <SitecoreContentBlockColumns :block="sitecoreServicesColumnsObj" />

    </div>
    <BannerLink label="Lets Talk Sitecore" url="mailto:hello@innatetheory.com" />
  </section>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import HeroSimple from '~/components/HeroSimple.vue'
import BannerLink from '~/components/BannerLink.vue'
import SitecoreContentBlock from '~/components/SitecoreContentBlock.vue'
import SitecoreContentBlockColumns from '~/components/SitecoreContentBlockColumns.vue'
import BannerGeneric from '~/components/BannerGeneric.vue'
import BannerGenericWithBackground from '~/components/BannerGenericWithBackground.vue'
import Services from '~/services/services.js'

export default {
  components: {
    HeroSimple,
    BannerLink,
    SitecoreContentBlock,
    SitecoreContentBlockColumns,
    BannerGeneric,
    BannerGenericWithBackground
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      title: 'Innate Theory | Sitecore Offerings'
    }
  },

  head () {
    return {
      title: this.title,
      author: this.author,
      meta: [
        ...createSEOMeta({
          url: this.url,
          description: "Find out how Sitecore’s customer experience systems enhance business strategies.",
          title: this.title
        })
      ]
    }
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('sitecore')
    const contentArr = response.data.stories[0].content.body
    const fullUrl = context.env.baseUrl + context.route.path

    // eslint-disable-next-line no-console
    console.dir(contentArr)

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      url: fullUrl,
      heroSimpleObj: convertArrayToObject(contentArr.filter(e => e.component === 'hero-simple')),
      personalizationContentbj: convertArrayToObject(contentArr.filter(e => e.component === 'banner-generic')),
      sitecoreDevObj: convertArrayToObject(contentArr.filter(e => e.component === 'banner-generic-image')),
      sitecoreServicesObj: convertArrayToObject(contentArr.filter(e => e.component === 'sitecore-block-container')),
      sitecoreServicesColumnsObj: convertArrayToObject(contentArr.filter(e => e.component === 'sitecore-column-block-container'))
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .sitecore__blocks {
    .section__sitecore {
      background-color: $white;

      &:nth-child(odd) {
        // background-color: $i;
      }
    }
  }
</style>
