<template>
  <div>
    <HeroSimple :data="heroSimpleObj" />
    <div class="p-t-b-100">
      <ProjectBanner
        v-for="(project, key) in projectObj"
        :key="key"
        :project="project.content"
      />
    </div>
    <BannerLink label="Say Hello" url="/contact" />
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
import HeroSimple from '~/components/HeroSimple.vue'
import ProjectBanner from '~/components/ProjectBannerWide.vue'
import BannerLink from '~/components/BannerLink.vue'
import Services from '~/services/services.js'

export default {
  components: {
    HeroSimple,
    ProjectBanner,
    BannerLink
  },

  data () {
    return {
      title: 'Innte Theory | Our Work',
      heroSimpleObj: {
        headline: "Here's some work we're really proud of and want to share",
        description: ''
      },
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter
    }
  },

  head () {
    return {
      title: this.title,
      author: this.author,
      meta: [
        ...createSEOMeta({
          url: this.url,
          description: 'We have the opportunity to work with many brands across different industries. Explore some of the work we are proud of',
          title: this.title
        })
      ]
    }
  },

  async asyncData (context) {
    const response = await Services.getData('projects')
    const contentArr = response.data.stories
    const fullUrl = context.env.baseUrl + context.route.path

    // eslint-disable-next-line no-console
    // console.dir(contentArr)

    return {
      url: fullUrl,
      projectObj: contentArr
    }
  },

  mounted () {
    // eslint-disable-next-line no-console
    // console.dir('projects page loaded')
  }
}
</script>

<style scoped lang="scss">

</style>
