<template>
  <section class="section__blog-grid p-t-b-150">
    <div class="wrapper--full-bleed">
      <div class="wrapper">
        <div class="blogs row-mobile">
          <div class="blogs-blog">
            <Blogpostcard
              v-for="(blog, key) in data"
              :key="key"
              :blog="blog"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Blogpostcard from '~/components/Blogpostcard.vue'

export default {
  components: {
    Blogpostcard
  },

  props: {
    data: { type: Array, required: true }
  },

  data () {
    return {
      title: 'Our Thoughts'
    }
  }
}
</script>

<style lang="scss" scoped>
  .blogs {
    flex-flow: column;
  }
</style>
