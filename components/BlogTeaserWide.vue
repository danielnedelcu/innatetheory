<template>
  <div class="wrapper--full-bleed">
    <div class="blog__teaser">
      <div class="blog__teaser-blog">
        <article class="blog__teaser-article">
          <div v-inview:once.enter="inviewImageEnter" v-bind:style="{ backgroundImage: `url(${background})` }" class="blog__image anim-image" />
          <div v-inview:once.enter="inviewEnter" class="wrapper--bloglist animated__h">
            <div class="meta-categories">
              <ul class="post-categories">
                <li>
                  <div rel="category tag" class="btn-blog-category">{{ category }}</div>
                </li>
              </ul>
            </div>

            <n-link :to="slug" class="post-title h4 btn-blog-headline split__headline">
              {{ title }}
            </n-link>

            <ul class="entry-meta">
              <li class="entry-date">
                <span class="btn-meta">{{ date }}</span>
              </li>
              <li class="entry-author">
                <div class="btn-meta">
                  by {{ authorData.name }}
                </div>

                <!-- <a class="btn-meta button-animated" href="#" rel="author">
                  {{ authorData.name }}
                </a> -->
              </li>
            </ul>

            <!-- <p>Nullam ornare, sem in malesuada sagittis, quam sapien ornare massa, id pulvinar quam augue vel orci. Praesent leo orci cursus ac malesuada Lorem ipsum dolor sit amet, consec adipiscing elit. Aliquam nisi lorem, pulvinar id, commodo feugiat, vehicula et, mauris. Praesent quis mauris ligula. Sed et vestibulum risus. Etiam non sollicitudin turpis, at venenatis sem.</p>                     -->
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },

  props: {
    background: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: String, required: true },
    author: { type: Array, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true }
  },

  data () {
    return {
      inviewEnter: this.$inviewEnter,
      inviewImageEnter: this.$inviewImageEnter,
      authorData: ''
    }
  },

  created () {
    this.authorData = this.convertArrayToObject(this.author)
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

</style>
