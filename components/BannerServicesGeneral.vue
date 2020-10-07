<template>
  <section class="section__banner p-t-b-150">
    <div class="wrapper">
      <div v-bind:style="{ backgroundImage: `url(${data.image.filename})` }" class="section__banner-wrapper row-mobile">
        <div class="section__banner-wrapper-content">
          <div class="col-md-5">
            <div class="p-r-100">
              <h3>{{ data.headline }}</h3>
              <p>
                Take a look at what the Sitecore as a Content Management System (CMS) can do for your business needs.
              </p>
              <n-link :to="ctaData.url.cached_url" class="btn--primary-reverse">
                <span>{{ ctaData.label }}</span>
              </n-link>
            </div>
          </div>
          <div class="col-md-7">
            <div class="content-wrapper">
              <div v-html="richtext" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import SectionHeadline from '~/components/shared/SectionHeadline.vue'
// import Value from '~/components/Value.vue'

export default {
  components: {
  },

  props: {
    data: { type: Object, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      ctaData: this.convertArrayToObject(this.data.ctaPlaceholder)
    }
  },

  computed: {
    richtext () {
      return this.$storyapi.richTextResolver.render(this.data.description)
    }
  },

  created () {
    // eslint-disable-next-line no-console
    console.dir(this.data)
  },

  methods: {
    convertArrayToObject: (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
  }
}
</script>

<style scoped lang="scss">
    @import '~/assets/sass/base/_index.scss';
    @import '~/assets/sass/extends/_index.scss';

    .section__banner {
        &-wrapper{
            background-size: inherit;
            background-repeat: no-repeat;
            background-position: center center;
            -ms-background-size: inherit;
            background-size: cover;
            height: auto;
            position: relative;

            @include breakpoint(xs){

            }
            @include breakpoint(sm){

            }
            @include breakpoint(lg){

            }
            @include breakpoint(wide){

            }

          &-content {
            margin: 1rem 0;
            height: 100%;
            display: flex;
            flex-flow: column;
            color: $white;
            padding: 10px;

            @include breakpoint(lg){
              flex-flow: row;
              padding: 70px;
              margin: 3rem 0;

              h3 {
                font-size: 45px;
                margin-top: 0;
                margin-bottom: 40px;
              }
            }

            h3 {
              // font-family:  $font-graphik-light;
              font-family: $font-avalon-bold;
              font-size: 35px;
              margin-bottom: 30px;
              margin-top: 20px;
            }

            .content-wrapper {
              margin-top: 40px;
              -webkit-column-count: 1;
                  -moz-column-count: 1;
                        column-count: 1;

              @include breakpoint(lg){
                margin-top: 0;
                -webkit-column-count: 2;
                    -moz-column-count: 2;
                          column-count: 2;
              }
            }

            p {
              font-size: 1.1rem;
            }
          }
        }
    }
</style>
