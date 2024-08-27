<template>
  <div class="about">
    <div style="font-size: 30px; font-weight: 600;">asdads12313</div>
    <h1 v-for="i in 100">{{ i }}</h1>
    asdad
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
