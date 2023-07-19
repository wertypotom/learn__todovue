<template>
  <ul class="todo-list">
    <app-todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
    />
  </ul>
</template>

<script lang="ts">
import { ITodo } from '@/types/ITodo';
import { PropType, defineComponent } from 'vue';
import AppTodo from './AppTodo.vue';

export default defineComponent({
  components: {
    AppTodo,
  },
  props: {
    todos: {
      type: Array as PropType<ITodo[]>,
      required: true,
    },
  },
  methods: {
    toggleTodo(id: number) {
      this.$emit('toggleTodo', id);
    },
    removeTodo(id: number) {
      this.$emit('removeTodo', id);
    },
  },
  emits: {
    toggleTodo: (id: number) => true,
    removeTodo: (id: number) => true,
  },
});
</script>

<style scoped></style>
