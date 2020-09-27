<template>
  <section class="section__view-all-projects">
    <div class="wrapper--full-bleed">
      <div class="wrapper--bloglist">
        <a href="">
          <h4>
            View project list
          </h4>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';
  @import '~/assets/sass/extends/_index.scss';

  .section__view-all-projects {
    background-color: $primary-color;
    padding: 120px 0;
    color: $white;
  }

</style>
