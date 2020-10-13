<template>
  <div>
    <HeroSimple :data="heroSimpleObj" />

    <div class="wrapper">
      <section class="rich-text p-t-b-150">
        <div v-html="richtext" />
      </section>
    </div>
    
    <BannerLink label="About Us" url="/about" />
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
import HeroSimple from '~/components/HeroSimple.vue'
import BannerLink from '~/components/BannerLink.vue'
import Services from '~/services/services.js'

export default {
  components: {
    HeroSimple,
    BannerLink
  },

  data () {
    return {
      title: 'Innate Theory | Terms and Conditions',
      heroSimpleObj: {
        headline: "Innate Theory",
        description: 'Website Terms & Conditions'
      }
    }
  },

  head () {
    return {
      title: this.title,
      author: this.author,
      meta: [
        ...createSEOMeta({
          description: "A boutique digital consultancy that provides personalized attention and strategic solutions, rooted in technology, to some of the most innovative clients. We aim to help brands and businesses navigate the waves of today's digital landscape to deliver tangible business results",
          title: this.title,
          url: this.url
        })
      ]
    }
  },

  computed: {
    richtext () {
      return this.$storyapi.richTextResolver.render(this.richTextObj.content)
    }
  },

  async asyncData (context) {
      /**
       * Rtrieves all homepage data from Storyblok
       */
      const response = await Services.getData('terms-and-conditions')
      const contentArr = response.data.stories[0].content
      const fullUrl = context.env.baseUrl + context.route.path

      // eslint-disable-next-line no-console
      // console.dir(contentArr)

      const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
        array.reduce((obj, item) => ((obj = item), obj), {})
      return {
        url: fullUrl,
        richTextObj: convertArrayToObject(contentArr.body.filter(e => e.component === 'rich-text')),
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .rich-text {
    
    @include breakpoint(lg){
      width: 50%;
    }
  }
</style>