<template>
  <div class="default-layout page-content">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/shared/Header.vue'
import Footer from '~/components/shared/Footer.vue'

export default {

  components: {
    Header,
    Footer
  },

  data () {
    return {

    }
  },

  watch: {
    $route () {
      // eslint-disable-next-line no-console
    }
  }
}
</script>

<style>

</style>
