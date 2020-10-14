<template>
  <section>
    <HeroSimple :data="heroSimpleObj" />
    <div class="sitecore__blocks">
      <SitecoreContentBlock
        v-for="(block, index) in sitecoreServicesObj.sitecoreBlock"
        :key="block._uid"
        :block="block"
        :delay="index"
      />
    </div>
    <BannerLink label="Lets Talk Sitecore" url="mailto:hello@innatetheory.com" />
  </section>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import HeroSimple from '~/components/HeroSimple.vue'
import BannerLink from '~/components/BannerLink.vue'
import SitecoreContentBlock from '~/components/SitecoreContentBlock.vue'
import Services from '~/services/services.js'

export default {
  components: {
    HeroSimple,
    BannerLink,
    SitecoreContentBlock
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
    const contentArrr = response.data.stories[0].content.body
    const fullUrl = context.env.baseUrl + context.route.path

    // eslint-disable-next-line no-console
    console.dir(contentArrr)

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      url: fullUrl,
      heroSimpleObj: convertArrayToObject(contentArrr.filter(e => e.component === 'hero-simple')),
      sitecoreServicesObj: convertArrayToObject(contentArrr.filter(e => e.component === 'sitecore-block-container'))
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
