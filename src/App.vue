<template>
  <app-header />
  <app-filter />

  <main class="app-main">
    <app-todo-list />
    <app-add-button />
  </main>

  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  AppAddButton,
  AppFilter,
  AppFooter,
  AppHeader,
  AppTodoList,
} from '@/components';

export default defineComponent({
  name: 'App',
  components: {
    AppAddButton,
    AppFilter,
    AppFooter,
    AppHeader,
    AppTodoList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
