<template>
  <main>
    <div class="center">
      <h4>Vue 3 boilerplate</h4>
      <p>
        With <strong>Webpack 5</strong>, Vue-Router, Typescript, Babel and Sass
      </p>
    </div>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .center {
    align-self: center;

    h4 {
      margin-top: 0.8rem;
      text-align: center;
    }
  }
}
</style>
