<template>
  <app-header />
  <app-filter :active-filter="activeFilter" @handle-filter="handleFilter" />

  <main class="app-main">
    <app-todo-list
      :todos="filteredTodos"
      @remove-todo="removeTodo"
      @toggle-todo="toggleTodo"
    />
    <app-add-button @add-task="addTask" />
  </main>

  <app-footer
    :completed-todos="completedTodosLength"
    :in-progress-todos="inProgressTodosLength"
  />
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
import { FilterButtons, ITodo } from './types/ITodo';

type TodoListState = {
  todos: ITodo[];
  activeFilter: FilterButtons;
};

export default defineComponent({
  name: 'App',
  components: {
    AppAddButton,
    AppFilter,
    AppFooter,
    AppHeader,
    AppTodoList,
  },
  data(): TodoListState {
    return {
      todos: [
        { id: 0, text: 'Study more', completed: true },
        { id: 1, text: 'Learn the basics of Typescript', completed: false },
        { id: 2, text: 'Subscribe to the channel', completed: false },
      ],
      activeFilter: 'All',
    };
  },
  computed: {
    completedTodosLength() {
      return this.completedTodos.length;
    },
    inProgressTodosLength() {
      return this.inProgressTodos.length;
    },
    filteredTodos() {
      switch (this.activeFilter) {
        case 'Active':
          return this.inProgressTodos;
        case 'Done':
          return this.completedTodos;
        case 'All':
        default:
          return this.todos;
      }
    },
    completedTodos() {
      return [...this.todos].filter((todo) => todo.completed);
    },
    inProgressTodos() {
      return [...this.todos].filter((todo) => !todo.completed);
    },
  },
  methods: {
    addTask(todo: ITodo) {
      this.todos.push(todo);
    },

    toggleTodo(id: number) {
      this.todos = this.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
    },

    removeTodo(id: number) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },

    handleFilter(filter: FilterButtons) {
      this.activeFilter = filter;
    },
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
