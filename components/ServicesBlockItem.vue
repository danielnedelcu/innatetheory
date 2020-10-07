<template>
  <div>
    <div class="row-mobile">
      <div class="work_caption">
        <span class="client font_caps">{{ block.label }}</span>
        <span class="line_sep" />
      </div>
      <p class="desc">
        {{ block.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';
  
  .columns {
    margin-bottom: 30px;
    float: left;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    @include breakpoint(lg){
      margin-bottom: 60px;
    }

    .lead {
      margin-top: 30px;
      margin-bottom: 30px
    }
  }

  .work_caption {
    display: flex;
    flex: 1;
  }

  .desc {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .font_caps {
    font-size: 11px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .client {
    padding-right: 20px;
    white-space: nowrap;
    opacity: .7;
  }

  .line_sep {
    height: 1px;
    width: 100%;
    margin-top: 7px;
    background: #b3b3b3;
  }
</style>
