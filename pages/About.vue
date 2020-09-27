<template>
  <div>
    <HeroSimple :data="heroSimpleObj" />
    <Hero :data="heroObj" />

    <BannerWithVLine :data="bannerWithVline" />
    <ValuesBanner :data="valuesBanner" />
    <ProcessBanner :data="processBanner" />
    <BannerCulture :data="cultureBannerObj" />

    <!-- How We Work | Component 11 -->
    <!-- <section class="section__slideshow">
      <div class="wrapper--content ">
        <div class="" />
        <div class="">
          <div class="row">
            <div class="case__slider">
              <div class="overflow-content">
                <div class="slider__image swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="cover-slider" data-bg="/dist/assets/img/ab2.jpg" style="background-image: url('/dist/assets/img/ab2.jpg');">
                        <a class="swiper-slide__link" href="#" />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="cover-slider" data-bg="/dist/assets/img/1234.jpg" style="background-image: url('/dist/assets/img/1234.jpg');">
                        <a class="swiper-slide__link" href="#" />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="cover-slider" data-bg="/dist/assets/img/slide3.jpg" style="background-image: url('/dist/assets/img/slide3.jpg');">
                        <a class="swiper-slide__link" href="#" />
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination" />
                  <div class="swiper-button-prev" />
                  <div class="swiper-button-next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <BlogTeaserGrid :data="post" />
    <BannerLink label="What We Do" url="/services" />
  </div>
</template>

<script>
import { createSEOMeta } from '../utils/seo'
import * as Constants from '../constants/constants'
import HeroSimple from '~/components/HeroSimple.vue'
import Hero from '~/components/HeroAlt.vue'
import BannerWithVLine from '~/components/BannerWithVLine.vue'
import ValuesBanner from '~/components/ValuesBanner.vue'
import ProcessBanner from '~/components/ProcessBanner.vue'
import BannerCulture from '~/components/BannerCulture.vue'
import BannerLink from '~/components/BannerLink.vue'
import BlogTeaserGrid from '~/components/BlogTeaserGrid.vue'
import Services from '~/services/services.js'

export default {
  components: {
    Hero,
    HeroSimple,
    BannerWithVLine,
    ValuesBanner,
    BannerCulture,
    ProcessBanner,
    BannerLink,
    BlogTeaserGrid
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      title: 'Innate Theory | Who We Are'
    }
  },

  head () {
    return {
      title: this.title,
      author: this.author,
      meta: [
        ...createSEOMeta({
          description: "A boutique digital consultancy that provides personalized attention and strategic solutions, rooted in technology, to some of the most innovative clients. We aim to help brands and businesses navigate the waves of today's digital landscape to deliver tangible business results",
          title: this.title
        })
      ]
    }
  },

  async asyncData (context) {
    /**
     * Rtrieves all homepage data from Storyblok
     */
    const response = await Services.getData('who-we-are')
    const contentArrr = response.data.stories[0].content.body

    // eslint-disable-next-line no-console
    console.dir(contentArrr)
    // /**
    //  * Blog data is another request which is unrelated from the
    //  * homepage data
    //  */
    const blogData = await Services.getData('thoughts')
    const blogResponse = blogData.data.stories

    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
    return {
      heroSimpleObj: convertArrayToObject(contentArrr.filter(e => e.component === 'hero-simple')),
      heroObj: convertArrayToObject(contentArrr.filter(e => e.component === 'hero-alt')),
      // twoColumnObj: convertArrayToObject(contentArrr.filter(e => e.component === 'two-column')),
      // eventBannerObj: convertArrayToObject(contentArrr.filter(e => e.component === 'event-banner')),
      processBanner: convertArrayToObject(contentArrr.filter(e => e.component === 'process-steps')),
      cultureBannerObj: convertArrayToObject(contentArrr.filter(e => e.component === 'banner-culture')),
      valuesBanner: convertArrayToObject(contentArrr.filter(e => e.component === 'values-banner')),
      bannerWithVline: convertArrayToObject(contentArrr.filter(e => e.component === 'banner-v-line')),
      post: blogResponse.filter((item, index) => (index < Constants.HOMEPAGE_BLOG_MAX))
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
