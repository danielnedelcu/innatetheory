<template>
   <section class="section__sitecore_columns">
      <div class="sitecore-wrapper d-flex justify-between wrapper">
   
          <div v-inview:once.enter="inviewEnter" class="sitecore-wrapper-content animated__h">
            <hr class="dash" />
            <h2 class="inviews fromLeftOuts split__headline">              
              Sitecore Support
            </h2>

            <div class="sitecore-list bordered row-mobile">
              <div class="wrapper">
                <ul class="row">
                  <SitecoreContentBlockColumnsItem
                    v-for="(item, index) in block.placeholder"
                    :key="item._uid"
                    :block="item"
                    :delay="index"                
                  />
                </ul>
              </div>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
import SitecoreContentBlockColumnsItem from '~/components/SitecoreContentBlockColumnsItem.vue'

export default {
  components: {
    SitecoreContentBlockColumnsItem
  },
  
  props: {
    block: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter
    }
  },

  computed: {
    // richtext () {
    //   return this.$storyapi.richTextResolver.render(this.block.description)
    // }
  },
}
</script>

<style lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .section__sitecore_columns {
    padding: 50px 0 50px;
    height: auto;
    position: relative;

    @include breakpoint(lg){
      padding: 120px 0;
    }

    .sitecore-wrapper { 
      background-color: $g;
      color: $white;

      &-content {
        position: relative;

      .dash {
          position: absolute;
          margin-top: -10px;
          margin-bottom: 0;
          width: 3rem;
          height: 0;
          display: inline-block;
          vertical-align: middle;
          border-top: .2rem solid;
          top: -.1rem;
        }        

        h2 {
          margin-bottom: 50px;
        }

        .sitecore-list {
          ul {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            overflow: hidden;
            flex-flow: column;

            @include breakpoint(lg){
              flex-flow: row;
              flex-wrap: wrap;
            }
          }
        }
      }
    }
  }
</style>