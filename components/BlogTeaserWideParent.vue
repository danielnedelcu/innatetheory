<template>
  <section class="section__blog-teaser p-t-b-150">
    <div class="wrapper--content">
      <SectionHeadline :label="labelContent" :title="labelTitle" />
    </div>
    <BlogTeaserWide
      v-for="item in data"
      :key="item.id"
      :category="item.content.category"
      :date="item.content.date"
      :title="item.content.title"
      :slug="item.full_slug"
      :background="item.content.image"
      :author="item.content.author"
    />
  </section>
</template>

<script>
import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import BlogTeaserWide from '~/components/BlogTeaserWide.vue'

export default {
  components: {
    SectionHeadline,
    BlogTeaserWide
  },

  props: {
    data: { type: Array, required: true }
  },

  data () {
    return {
      labelContent: 'Blog posts',
      labelTitle: 'Press highlights & our perspectives on the business of technology, marketing, code, & design.'
    }
  }
}
</script>

<style lang="scss">
    @import '~/assets/sass/base/_index.scss';

</style>
