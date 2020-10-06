<template>
  <section class="section__blog-grid p-t-b-150">
    <div class="wrapper--full-bled">
      <div class="wrapper">
        <div class="">
          <div class="blogs">
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

</style>
