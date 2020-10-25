<template>
  <div>
    <section class="section__hero__blog section-text">
      <div class="wrapper--full-bleed banner-dimmer">
        <div v-bind:style="{ backgroundImage: `url(${blogData.content.image})` }" class="section__hero__blog-image anim-image in-view">
          <div class="wrapper">
            <div class="va">
              <div class="col-xs-12">
                <div class="section__hero__blog-content copy">
                  <div v-inview:once.enter="inviewEnter" class="section__hero__blog-content-h animated__h">
                    <h5>{{ blogData.content.category }}</h5>
                    <h2 class="inviews split__headline">
                      {{ blogData.content.title }}
                    </h2>
                    <div class="meta">
                      <img v-bind:src="authorData.image">

                      <div class="meta-description">
                        <div class="meta-description-label">
                          Posted by {{ authorData.name }}
                        </div>
                        <div class="meta-description-sublabel">
                          {{ blogData.content.date }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section__blog-article wrapper">
      <article class="">
        <div class="entry-container">
          <div class="entry entry-content-wrap">
            <div class="entry-content wrapper--bloglist">
              <div v-html="richtext" />

              <!-- <div class="has-background-dim alignwide" style="">
                <h2 class="wp-block-cover-text">
                  Just because it isn’t <br>happening right now<br>doesn’t mean it never will
                </h2>
              </div> -->

              <!-- <figure class="has-background-dim alignfull">
                <img src="http://yungthemes.com/raha/wp-content/uploads/2019/02/photo-1681382-2-e1550581277387.jpg" alt="" class="wp-image-503" srcset="http://yungthemes.com/raha/wp-content/uploads/2019/02/photo-1681382-2-e1550581277387.jpg 1500w, http://yungthemes.com/raha/wp-content/uploads/2019/02/photo-1681382-2-e1550581277387-600x390.jpg 600w" sizes="(max-width: 1500px) 100vw, 1500px">
              </figure> -->

              <div class="blog-footer">
                <p>Innate Theory, LLC is a boutique digital consultancy that provides personalized attention and strategic solutions, rooted in technology, to some of the most innovative clients. We aim to help brands and businesses navigate the waves of today's digital landscape to deliver tangible business results.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- <section class="section__blog-previews">
      <div class="wrapper--full-bleed">
        <div class="wrapper--bloglist">
          <ul class="blog__list-ul">
            <li class="blog__list-li">
              <a href="/journal/the-power-of-blogging" class="hover-target">
                <div class="label">
                  <h4>The Power of Blogging</h4>
                  <p>
                    Bloggers have such an exponential impact on sales and marketing strategies of companies. Here's why.
                    <span class="category font_caps">/ Insight — Marketing</span>
                  </p>
                </div>
              </a>
            </li>

            <li class="blog__list-li">
              <a href="/journal/the-power-of-blogging" class="hover-target">
                <div class="label">
                  <h4>The Power of Blogging</h4>
                  <p>
                    Bloggers have such an exponential impact on sales and marketing strategies of companies. Here's why.
                    <span class="category font_caps">/ Insight — Marketing</span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section> -->
    <BannerLink label="All Posts" url="/thoughts" />
  </div>
</template>

<script>
import { createSEOMeta } from '~/utils/seo'
import BannerLink from '~/components/BannerLink.vue'
import Services from '~/services/services.js'

export default {
  components: {
    BannerLink
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      title: '',
      authorData: {}
    }
  },

  head () {
    return {
      title: `Innate Theory | ${this.bn}`,
      meta: [
        ...createSEOMeta({
          title: this.title,
          url: this.url,
          description: `${this.title}`
        })
      ]
    }
  },

  computed: {
    richtext () {
      return this.$storyapi.richTextResolver.render(this.blogData.content.content)
    }
  },

  async asyncData (context) {
    const response = await Services.getPost('thoughts/' + context.params.id)
    const contentArr = response.data.story
    const fullUrl = context.env.baseUrl + context.route.path
    const blogName = contentArr.content.title

    return {
      bn: blogName,
      url: fullUrl,
      blogData: contentArr
    }
  },

  created () {
    this.title = `${this.bn}`
    // eslint-disable-next-line no-console
    // console.dir(this.blogData)

    this.authorData = this.convertArrayToObject(this.blogData.content.author)
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
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    overflow: hidden;
    margin-top: 0;

    @include breakpoint(lg){
      height: 80vh;
    }

    &-image {
        background-repeat: no-repeat;
        background-position: center center;
        -ms-background-size: inherit;
        background-size: cover;
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
      height: 500px;
      width: 100%;

      @include breakpoint(lg){
        height: 80vh;
      }

      &-h {
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
                margin-left: 10px;
                -webkit-box-flex: 1;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                min-width: 0;

                &-label {

                }

                &-sublabel {
                    margin-top: .2rem;
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
        background-color: rgba(0, 0, 0, 0.55);
      }
    }

    .hero__box {
        position: absolute;
        height: 100px;
        width: 600px;
        background-color: $white;
        bottom: 0;
        right:0;

        &.top {
            top: 0;
            left: 0;
        }
    }
  }

  .section__blog-article {
    .entry-container {
      .entry-content-wrap {
        .entry-content {
          padding: 100px 0;

          p {
              margin: 34px 0;
              a {
                  font-family: $font-gilroy-regular;
                  font-size: inherit;
                  color: $primary-color;
                  text-decoration: underline;

                  &:before {
                      background-color: $c;
                      color: $b;
                  }

              }
          }

          h4 {
              margin-bottom: 0;
              margin-top: 60px;
          }

          .box-offset {
              width: 100% !important;
          }

          .wp-block-cover-text {
              text-align: center;
              color: $white;
          }

          .has-background-dim {
              position: relative;
              background-color: #000;
              background-size: cover;
              background-position: center center;
              min-height: 430px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
          }

          .alignwide {
              margin: 100px 0;
              margin-left: calc(-25vw + 25%);
              margin-right: calc(-25vw + 25%);
              width: auto;
              max-width: 100vw;
              @include clearfix;
          }

          .alignfull {
              margin: 100px 0;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;

              margin-left: calc(-50vw + 50%);
              margin-right: calc(-50vw + 50%);
              max-width: 100vw;
              width: 100vw;
              @include clearfix;

              img {
                  width: 100%;
              }
          }

          .blog-footer {
            margin-top: 100px;
            border-top: 1px solid $g;

            p {
              font-size: 1.1rem;
            }
          }
        }
      }
    }
  }

  .section__blog-previews {
    background: $primary-color;
    padding: 120px 0;

    ul {
      &.blog__list-ul {
        li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);

          a {
            display: block;
            padding: 40px 0;
            color: $white;

            .label {
              position: relative;
              display: flex;
              align-items: flex-start;
              justify-content: space-between;

              h4 {
                padding-left: 0;
                width: 50%;
                padding-right: 40px;
                font-family: $font-graphik-light;
              }

              p {
                width: 50%;
                padding-left: 0;
                margin-top: 0;
                color: #fff;

                .category {
                  display: block;
                  margin-top: 20px;
                  opacity: .5;
                  font-size: 11px;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                  font-weight: 400;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
