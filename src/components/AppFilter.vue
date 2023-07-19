<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="button in buttons"
        :key="button"
        class="button"
        :class="{ 'button--primary': activeFilter === button }"
        @click="handleFilter(button)"
      >
        {{ button }}
      </button>
    </section>
  </aside>
</template>

<script lang="ts">
import { FilterButtons } from '@/types/ITodo';
import { PropType, defineComponent } from 'vue';

type FilterState = {
  buttons: FilterButtons[];
};

export default defineComponent({
  data(): FilterState {
    return {
      buttons: ['Active', 'All', 'Done'],
    };
  },
  methods: {
    handleFilter(filter: FilterButtons) {
      this.$emit('handleFilter', filter);
    },
  },
  props: {
    activeFilter: {
      type: String as PropType<FilterButtons>,
      required: true,
    },
  },
  emits: {
    handleFilter: (filter: FilterButtons) => true,
  },
});
</script>

<style scoped></style>
