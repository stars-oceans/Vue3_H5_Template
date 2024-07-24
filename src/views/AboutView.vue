<template>
  <div class="about">
    <h1 v-for="i in 100">{{ i }}</h1>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
 .about{
  h1{
    color: red;
  }
 }
</style>
