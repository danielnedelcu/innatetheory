<template>
  <section class="section__casestudies p-t-b-150">
    <div class="wrapper--content">
      <SectionHeadline :label="data.label" :title="data.title" />
    </div>

    <div class="wrapper--full-bleed">
      <CaseStudy
        v-for="project in data.placeholder"
        :key="project._uid"
        :project="project"
      />
    </div>

    <!-- <div class="wrapper--full-bleed">
      <div class="project-item">
        <div class="project-item-wrapper anim-image in-view">
          <div class="bg" style="background-image: url(https://www.agence-me.com/AgenceMeV4/img/pages/home/pr-orangelabs/orangelabs-cover.jpg)" />
        </div>

        <div class="device-wrapper">
          <div class="device-container">
            <div class="device in-device ">
              <img class="iphone" src="~assets/img/shapes/iPhoneX.svg" alt="">
              <div class="container-screen">
                <img src="~assets/img/project1screen.jpg" alt="">
              </div>
            </div>

            <div class="device in-device ">
              <img class="iphone" src="~assets/img/shapes/iPhoneX.svg" alt="">
              <div class="container-screen">
                <img src="~assets/img/project1screen.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="project-description">
          <div class="text__preview animated__h">
            <h2 class="split__headline">
              Roundpoint
            </h2>
            <p>
              We designed a clean and simple
              interface that intuitively integrated Orange’s
              extensive feature offerings. Our project scope
              covered the entire product, spanning from web
              design, to both front-end and back-end
              development.
            </p>
          </div>

          <a href="/en/about/golf-sponsorship" class="btn--primary" title="">
            <span>View case study</span>
          </a>
        </div>
      </div>

      <div class="project-item">
        <div class="project-item-wrapper anim-image in-view">
          <div class="bg" style="background-image: url(https://www.agence-me.com/AgenceMeV4/img/pages/home/pr-orangelabs/orangelabs-cover.jpg)" />
        </div>

        <div class="device-wrapper">
          <div class="device-container">
            <div class="device in-device ">
              <img class="iphone" src="~assets/img/shapes/iPhoneX.svg" alt="">
              <div class="container-screen">
                <img src="~assets/img/project1screen.jpg" alt="">
              </div>
            </div>

            <div class="device in-device ">
              <img class="iphone" src="~assets/img/shapes/iPhoneX.svg" alt="">
              <div class="container-screen">
                <img src="~assets/img/project1screen.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="project-description">
          <div class="text__preview animated__h">
            <h2 class="split__headline">
              Atrium Health
            </h2>
            <p>
              We designed a clean and simple
              interface that intuitively integrated Orange’s
              extensive feature offerings. Our project scope
              covered the entire product, spanning from web
              design, to both front-end and back-end
              development.
            </p>
          </div>
          <a href="/en/about/golf-sponsorship" class="btn--primary" title="">
            <span>View case study</span>
          </a>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import SectionHeadline from '~/components/shared/SectionHeadline.vue'
import CaseStudy from '~/components/CaseStudy.vue'

export default {
  components: {
    SectionHeadline,
    CaseStudy
  },

  props: {
    data: { type: Object, required: true }
  },

  // props: {
  //   data: { type: Object, required: true }
  // },

  data () {
    return {
      labelContent: 'case studies',
      labelTitle: 'Challenging the market, driving innovation and accelerating business performance.'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
