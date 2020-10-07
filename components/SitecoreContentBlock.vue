<template>
  <section class="section__sitecore">
    <div class="sitecore-wrapper d-flex justify-between wrapper">
      <div class="row">
        <div class="col-md-6">
          <h2>{{ block.title }}</h2>

          <div v-if="block.servicesPlaceholder.length" class="sitecore-list bordered row-mobile">
            <ul>
              <SitecoreBlockService
                v-for="(service, index) in block.servicesPlaceholder"
                :key="service._uid"
                :service="service"
                :delay="index"
              />
            </ul>
          </div>
        </div>
        <div class="col-md-6 sitecore-list bulleted" v-html="richtext" />
      </div>
    </div>
  </section>
</template>

<script>
import SitecoreBlockService from '~/components/SitecoreBlockService.vue'

export default {
  components: {
    SitecoreBlockService
  },
  
  props: {
    block: { type: Object, required: true }
  },

  computed: {
    richtext () {
      return this.$storyapi.richTextResolver.render(this.block.description)
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__sitecore {
    padding: 70px 0 50px;

    @include breakpoint(lg){
      padding: 220px 0;
    }

    .sitecore-wrapper { 
      .bordered {
        background-color: $primary-color;
        padding: 30px 40px;
        margin-bottom: 20px;
        color: $white;

        @include breakpoint(lg){
          background-color: transparent;
          padding: 0;
          margin-bottom: 0;
          color: $black;

        }
      }
      
      .bulleted {
        ul {
          list-style: disc;
          margin-left: 20px;

          p {
            font-size: 16px;
          }
        }
      }
    }
  }
</style>