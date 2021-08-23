<template>
  <div class="home">
    <section class="logo">
      <svg>
        <use href="@/assets/vue-logo.svg#all"></use>
      </svg>
    </section>
    <router-link to="/bonus">Bonus</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  section.logo {
    width: 400px;
    height: 390px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
