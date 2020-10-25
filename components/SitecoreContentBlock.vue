<template>
  <div v-if="block.image.filename">
    <section class="section__sitecore with-background anim-image in-view" v-bind:style="{ backgroundImage: `url(${block.image.filename})` }">
      <div class="sitecore-wrapper d-flex justify-between wrapper">
        <div class="row">
          <div v-inview:once.enter="inviewEnter" class="col-md-6 animated__h">
            <h2 class="inviews fromLeftOuts split__headline">{{ block.title }}</h2>

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
          <div class="col-md-4 sitecore-list bulleted" v-html="richtext" />
        </div>
      </div>
    </section>
  </div>
  <div v-else>
   <section class="section__sitecore">
      <div class="sitecore-wrapper d-flex justify-between wrapper--content">
   
          <div v-inview:once.enter="inviewEnter" class="sitecore-wrapper-content animated__h">
            <hr class="dash" />
            <h2 class="inviews fromLeftOuts split__headline">
              {{ block.title }}
            </h2>
            <div class="sitecore-list bulleted inviews fromRightOuts split__paragraph" v-html="richtext" />

            <div v-if="block.servicesPlaceholder.length" class="sitecore-list bordered row-mobile">
              <h5>Service Features</h5>
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
      </div>
    </section>
  </div>
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

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter
    }
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
    padding: 50px 0 50px;
    height: auto;
    position: relative;

    @include breakpoint(lg){
      padding: 120px 0;
    }

    &.with-background {
      padding: 0 0 0;
      background-size: inherit;
      background-repeat: no-repeat;
      background-position: center center;
      -ms-background-size: inherit;
      background-size: cover;
      height: auto;
      position: relative;

      @include breakpoint(lg){
        padding: 80px 0;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .9;
        background: #104082;
        background: -webkit-gradient(linear,left top,left bottom,from(#104082),to(#65318f));
        background: linear-gradient(to bottom,#000 0%,#52071c 100%);
      }

      .sitecore-wrapper { 
        h2 {
          color: $white;
          margin-top: 50px;

          @include breakpoint(lg){
            margin-top: 100px;
          }
        }

        .bulleted {
          background-color: $white;
          padding: 50px 15px;

          @include breakpoint(lg){
            padding: 50px;
          }
        }
      }
    }

    .sitecore-wrapper { 
      &-content {
        position: relative;
      }

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

      .bordered {
        background-color: $black;
        padding: 30px 15px;
        margin-bottom: 20px;
        color: $white;
        flex-flow: column;
        margin-top: 70px;

        @include breakpoint(lg){
          background-color: transparent;
          padding: 0;
          margin-bottom: 0;
          color: $black;
        }
      }

      h2 {
        margin-bottom: 50px;
      }
      
      .bulleted {
        background-color: $white;
        padding: 0;

        @include breakpoint(lg){
          width: 80%;
        }

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