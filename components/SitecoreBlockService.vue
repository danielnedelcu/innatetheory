<template>
  <li>
    {{ service.label }}
  </li>
</template>

<script>
export default {
  props: {
    service: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';
  
  li {
    padding: 5px 0;
    font-family: $font-graphik-light;
  }
</style>