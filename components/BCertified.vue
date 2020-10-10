<template>
  <div>
    <img src="~assets/img/B-Corp-Logo.png" class="logo">
  </div>
</template>
<style scoped lang="scss">
  @import '~/assets/sass/base/_index.scss';

  .logo {
    width: 60px;
    animation: 1s appear;

    @include breakpoint(lg){
      width: auto;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }         
</style>
