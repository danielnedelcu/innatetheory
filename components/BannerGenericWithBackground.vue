<template>
  <section class="section__banner p-t-b-250">
    <div class="wrapper--full-bleed section__banner-wrapper banner-dimmer">
      <div v-inview:once.enter="inviewImageEnter" v-bind:style="{ backgroundImage: `url(${data.image.filename})` }" class="section__banner-wrapper-image anim-image">
        <div class="section__banner-wrapper-center table-content">
          <div class="wrapper">
            <SectionHeadline :label="data.label" :title="data.title" />

            <div class="section__simple-text">
              <div v-inview:once.enter="inviewEnter" class="animated__h">
                <!-- <h2 class="text-white split__headline">Healthcare IT Connect Summit</h2> -->
                <p v-html="data.description" class="split__paragraph" />
              </div>
              <div class="services">
                <h5 v-if="data.placeholder.length" class="capabilities-label">Capabilities</h5>
                <swiper class="swiper ul" :options="swiperOption">
                  <div class="swiper-scrollbar" slot="scrollbar"></div>
                  <Capability
                    v-for="(item, index) in data.placeholder"
                    :key="item._uid"
                    :data="item"
                    :textColor="textColor"
                    :backgroundColor="backgroundColor"
                    :boxWidth="boxWidth"
                    :delay="index"
                  />
                </swiper>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import Capability from '~/components/Capability.vue'

export default {
  components: {
    SectionHeadline,
    Capability,
    Swiper,
    SwiperSlide
  },

  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter,
      textColor: '#2b2b2b',
      backgroundColor: '#fff',
      boxWidth: '100px',
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto',
        loopedSlides: 'auto',
        spaceBetween: 1,
        grabCursor: true,
        centeredSlides: false,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false
        },
        breakpoints: {
          768: {
            slidesPerView: 'auto',
            spaceBetween: 1,
            centeredSlides: false,
            grabCursor: false,
            scrollbar: false
          }
        }
      }
    }
  },

  computed: {

  }
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/_index.scss';
    @import '~/assets/sass/extends/_index.scss';

    .section__banner {
      color: #fff;
      position: relative;

      .banner-dimmer {
        position: relative;

        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.85);
          z-index: 2;
        }
      } 
      &-wrapper{   
        &-image {
          background-size: inherit;
          background-repeat: no-repeat;
          background-position: center center;
          -ms-background-size: inherit;
          background-size: cover;
          height: auto;
          position: relative;
          width: 100vw;
          padding: 50px 0;

          @include breakpoint(xs){

          }
          @include breakpoint(sm){

          }
          @include breakpoint(lg){
              height: 1000px;
              padding: 0;
          }
          @include breakpoint(wide){

          }
        }

        &-center {
          position: relative;
          z-index: 2;

          @include breakpoint(lg){
              position: absolute;
          }
        }
      }

      .section__simple-text {
        display: flex;
        position: relative;
        flex-flow: column;
        color: $white;

        @include clearfix;

        @include breakpoint(md){
          max-width: 70rem;
        }
        @include breakpoint(lg){
          width: percentage(1);
        }

        P {
          color : inherit !important;
          padding: 20px 0;
          color: $d;
          margin: 0;
        }

        .services {
          .capabilities-label {
            margin-top: 40px;
            margin-bottom: 10px;
          }

          .ul {
            display: flex;
            flex-flow: row;

            @include breakpoint(lg){
              overflow: unset !important;
            }

            .swiper-scrollbar {
                display: block;
                background: rgba(255, 255, 255, 0.2);

                .swiper-scrollbar-drag {
                  background: rgba(255, 255, 255, 0.5);
                }                

                @include breakpoint(lg){
                    display: none;
                }
            }

          }
        }
      }
    }
</style>
