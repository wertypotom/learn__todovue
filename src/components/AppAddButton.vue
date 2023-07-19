<template>
  <section class="add-todo">
    <form
      v-if="showForm"
      class="add-todo__form"
      @submit.prevent="handleAddTask"
    >
      <button class="close-button" type="button" @click="toggleShowForm">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input v-model="text" class="input" />
      </div>
      <button class="button button--filled">Add task</button>
    </form>
    <button @click="toggleShowForm" v-else class="add-todo__show-form-button">
      <i class="bi bi-plus-lg"></i>
    </button>
  </section>
</template>

<script lang="ts">
import { ITodo, TodoFormState } from '@/types/ITodo';
import { defineComponent } from 'vue';

export default defineComponent({
  data(): TodoFormState {
    return {
      showForm: false,
      text: '',
    };
  },
  methods: {
    toggleShowForm() {
      this.showForm = !this.showForm;
    },
    handleAddTask() {
      this.$emit('addTask', {
        id: Date.now(),
        completed: false,
        text: this.text,
      });

      this.text = '';
    },
  },
  emits: {
    addTask: (todo: ITodo) => true,
  },
});
</script>

<style scoped></style>
