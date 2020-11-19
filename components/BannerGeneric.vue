<template>
  <section class="section__banner p-t-b-250">
    <div class="wrapper--content">
      <SectionHeadline :label="data.label" :title="data.title" />
    </div>

    <div class="wrapper--content">
      <div class="section__simple-text">
        <div v-inview:once.enter="inviewEnter" class="animated__h">
          <!-- <h2 class="text-white split__headline">Healthcare IT Connect Summit</h2> -->
          <p v-html="data.description" class="split__paragraph" />
        </div>
        <div class="services">
          <h5 v-if="data.placeholder.length" class="capabilities-label">Capabilities</h5>
          <client-only>
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
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
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
      textColor: '#fff',
      backgroundColor: '#2b2b2b',
      boxWidth: '80px',
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
        color: $g;

        &-wrapper{
            background-size: inherit;
            background-repeat: no-repeat;
            background-position: center center;
            -ms-background-size: inherit;
            background-size: cover;
            height: 65vw;
            position: relative;

            @include breakpoint(xs){

            }
            @include breakpoint(sm){

            }
            @include breakpoint(lg){
                height: 36vw;
            }
            @include breakpoint(wide){

            }
        }

        .section__simple-text {
          display: flex;
          position: relative;
          flex-flow: column;
          color: inherit;

          @include clearfix;

          @include breakpoint(md){
            max-width: 70rem;
          }
          @include breakpoint(lg){
            width: percentage(.80);
          }
          @include breakpoint(xl){
            width: percentage(.80);
          }

          P {
            color : inherit;
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
              // flex-flow: row;
              flex-wrap: wrap;

              @include breakpoint(lg){
                overflow: unset !important;
              }

              .swiper-scrollbar {
                  display: block;

                  @include breakpoint(lg){
                      display: none;
                  }
              }
            }
          }
        }
    }
</style>
