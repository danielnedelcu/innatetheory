<template>
  <li class="col">
    <div class="box-background">
      <h5>{{ block.headline }}</h5>
      <p>
        {{ block.description }}
      </p>
    </div>
  </li>
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

  li {
    flex: 1;
    margin-bottom: 20px;

    .box-background {
      padding: 20px;
      background: $a;
      height: 100%;

      h5 {
        margin-bottom: 30px;
        color: $white;
        font-size: 1rem;
        color: $g;
      }

      p {
        color: $white;
        color: $g;
      }
    }
  }
</style>