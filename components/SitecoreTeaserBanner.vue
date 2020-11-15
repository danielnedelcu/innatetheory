<template>
  <section class="section__sitecore-teaser section__banner p-t-b-150">
    <div class="wrapper--full-bleed">
      <div class="section__sitecore-teaser-wrapper row-mobile">

        <SitecoreTeaserItem
          v-for="item in data.placeholder"
          :key="item._uid"
          :item="item"
        />

      </div>
    </div>
  </section>  
</template>

<script>
import SitecoreTeaserItem from '~/components/SitecoreTeaserItem.vue'

export default {
  components: {
    SitecoreTeaserItem
  },

  props: {
    data: { type: Object, required: true }
  },

}
</script>

<style scoped lang="scss">

</style>