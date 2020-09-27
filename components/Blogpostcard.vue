<template>
  <article class="blogs-blog-article">
    <div class="blog-card">
      <n-link :to="blog.full_slug" class="btn-blog-headline">
        <div v-inview:once.enter="inviewImageEnter" v-bind:style="{ backgroundImage: `url(${blog.content.preview_image})` }" class="blog__image anim-image" />
      </n-link>
      <div v-inview:once.enter="inviewEnter" class="animated__h">
        <div class="blog__description">
          <div class="meta-categories">
            <ul class="post-categories">
              <li><a href="http://clapat.ro/themes/nerduck-wordpress/category/inspiration/" rel="category tag" class="btn-blog-category button-animated">{{ blog.content.category }}</a></li>
            </ul>
          </div>

          <n-link :to="blog.full_slug" class="btn-blog-headline">
            <h2 class="post-title split__headline">
              {{ blog.content.title }}
            </h2>
          </n-link>

          <ul class="entry-meta">
            <li class="entry-date">
              <span class="btn-meta">{{ blog.content.date }}</span>
            </li>
            <li class="entry-author">
              <n-link :to="blog.full_slug" class="btn-meta button-animated" rel="author">
                {{ authorData.name }}
              </n-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    blog: { type: Object, required: true }
  },

  data () {
    return {
      authorData: this.convertArrayToObject(this.blog.content.author),
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter
    }
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

.blogs-blog-article {
  float: left;
  width: 50%;

  .blog-card {
    // margin: 0 3.26305%;
    margin-bottom: 13.26305%;

    .blog__description {
      padding-right: 50px;
    }
  }

  .blog__image {
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: center center;
    -ms-background-size: inherit;
    background-size: cover;
    height: 500px;
    position: relative;
    margin-bottom: 30px;
  }

  .meta-categories {
    padding-left: 5.5rem;
    color: $black;

    .post-categories {
      margin: 0;

      li {
        display: inline-block;
        margin-right: 5px;
        max-width: 30em;

        &:after {
          content: '/';
          font-size: 16px;
          margin-left: 10px;
          color: $c;
        }

        &:last-child {
          &:after {
            content: '';
          }
        }
      }
    }
  }

  .post-title {
    // font-family: $font-avalon-medium;
    font-size: 2.2rem;
    padding-left: 5.5rem;
  }

  .entry-meta {
    display: block;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 5.5rem;

    li {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      font-size: 12px;
    }
  }
}
</style>
