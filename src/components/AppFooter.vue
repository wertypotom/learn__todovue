<template>
  <footer class="app-footer">
    {{ inProgressTodos }} more to do, {{ completedTodos }} done
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    completedTodos: {
      type: Number,
      required: true,
    },
    inProgressTodos: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped></style>
