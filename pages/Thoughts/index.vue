<template>
  <div>
    <HeroSimple :data="heroSimpleObj" />
    <section class="section__hero__blog section-text">
      <div class="wrapper--full-bleed banner-dimmer">
        <n-link :to="firstBlogItem.full_slug" v-bind:style="{ backgroundImage: `url(${firstBlogItem.content.image})` }" class="section__hero__blog-image anim-image in-view">
          <div class="wrapper--content">
            <div class="va">
              <div class="col-xs-12">
                <div class="section__hero__blog-content copy">
                  <div v-inview:once.enter="inviewEnter" class="section__hero__blog-content-h animated__h">
                    <span>/ Featured post</span>
                    <h5>{{ firstBlogItem.content.category }}</h5>
                    <h2 class="inviews split__headline">
                      {{ firstBlogItem.content.title }}
                    </h2>
                    <div class="meta">
                      <!-- <img v-bind:src="authorData.image"> -->

                      <div class="meta-description">
                        <div class="meta-description-label">
                          Posted by {{ authorData.name }}
                        </div>
                        <div class="meta-description-sublabel">
                          {{ firstBlogItem.content.date }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </n-link>
      </div>
    </section>

    <section class="section__blog-grid section-text">
      <div class="wrapper--full-bled p-t-b-50">
        <div class="wrapper">
          <div class="blogs row-mobile">
            <div class="blogs-blog">
              <Blogpostcard
                v-for="(blog, key) in blogData"
                :key="key"
                :blog="blog"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Blogpostcard from '~/components/Blogpostcard.vue'
import HeroSimple from '~/components/HeroSimple.vue'
import Services from '~/services/services.js'

export default {
  components: {
    Blogpostcard,
    HeroSimple
  },

  data () {
    return {
      title: 'Our Thoughts',
      heroSimpleObj: {
        headline: 'Perspectives on the business of technology and all things digital',
        description: ''
      },
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter,
      authorData: {}
      // authorData: this.convertArrayToObject(this.firstBlogItem.content.author)
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Thoughts' }
      ]
    }
  },

  async asyncData (context) {
    const response = await Services.getData('thoughts')
    const contentArrr = response.data.stories

    // eslint-disable-next-line no-console
    console.dir(contentArrr.filter((item, index) => (index !== 0)))

    return {
      blogData: contentArrr.filter((item, index) => (index !== 0)),
      firstBlogItem: contentArrr.filter((item, index) => (index === 0))[0]
    }
  },

  created () {
    // eslint-disable-next-line no-console
    // console.dir(this.blogData.content.content)

    this.authorData = this.convertArrayToObject(this.firstBlogItem.content.author)
  },

  methods: {
    convertArrayToObject: (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj = item), obj), {})
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/base/_index.scss';

  .section__hero__blog {
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;
    -ms-background-size: inherit;
    background-size: cover;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    overflow: hidden;
    margin-top: 0;

    @include breakpoint(lg){
      height: 700px;
    }

    &-image {
        background-repeat: no-repeat;
        background-position: center center;
        -ms-background-size: inherit;
        background-size: cover;
        height: 450px;

        @include breakpoint(lg){
          height: 700px;
        }
    }

    &-content {
      position: relative;
      box-pack: center;
      -moz-justify-content: center;
      -ms-justify-content: center;
      -o-justify-content: center;
      justify-content: center;
      -ms-flex-pack: center;
      display: -moz-flex;
      display: flex;
      box-orient: vertical;
      box-direction: normal;
      -moz-flex-direction: column;
      flex-direction: column;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 450px;
      width: 100%;

      @include breakpoint(lg){
        height: 700px;
      }

      &-h {
        span {
          font-size: 1.4rem;
          display: block;
          margin-bottom: 20px;
          font-family: $font-graphik-extra-light;

          @include breakpoint(lg){
            font-size: 2rem;
            margin-bottom: 50px;

          }
        }

        .split__headline {
            margin-top: 0;
            font-size: 10vw;
            line-height: 1;

            @include breakpoint(lg){
              font-size: 3vw;
              line-height: 1.22222;
            }
        }

        .meta {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 1rem;
            text-align: left;
            padding: 8px 0;
            position: relative;

            img {
                width: 60px!important;
                height: 60px;
                border-radius: 50%;
            }

            &-description {
                margin-left: 0;
                -webkit-box-flex: 1;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                min-width: 0;

                &-sublabel {
                    margin-top: .2rem;
                }

                @include breakpoint(lg){
                }
            }
        }
      }

      @include breakpoint(sm){
        padding-bottom: percentage(100 / 150);

        @media screen and (orientation: portrait){
          padding-top: 30vw
        }
        @media screen and (orientation: landscape){
          padding-top: 20vw
        }
      }
      @include breakpoint(md){
        padding-top: 30vw;
      }
      @include breakpoint(lg){
        padding-top: 9vw;
        padding-bottom: 9vw;
      }

    }

    .banner-dimmer {
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.65);
      }
    }
  }

  .section__blog-grid {

    .blogs {
        margin-top: 150px;
        flex-flow: column;
    }
  }
</style>
