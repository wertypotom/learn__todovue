<template>
  <ul class="todo-list">
    <app-todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppTodo from './AppTodo.vue';

export default defineComponent({
  components: {
    AppTodo,
  },
  data() {
    return {
      todos: [
        { id: 0, text: 'Study more', completed: true },
        { id: 1, text: 'Learn the basics of Typescript', completed: false },
        { id: 2, text: 'Subscribe to the channel', completed: false },
      ],
    };
  },
});
</script>

<style scoped></style>
