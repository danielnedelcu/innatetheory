<template>
  <div>
    <img src="~assets/img/logowhite.svg" class="logo">
  </div>
</template>
<style scoped>
.logo {
  width: 120px;
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
