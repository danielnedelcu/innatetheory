<template>
  <div>
    <img src="~assets/img/logo.svg" class="logo">
  </div>
</template>
<style scoped>
.logo {
  animation: 1s appear;
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
