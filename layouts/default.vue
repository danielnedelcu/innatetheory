<template>
  <div class="default-layout page-content">
    <!-- <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-4JWJ500DKK');
    </script> -->
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
