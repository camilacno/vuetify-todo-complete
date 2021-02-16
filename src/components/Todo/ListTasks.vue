<template>
  <v-list flat class="pa-3">
    <draggable v-model="tasks" handle=".handle">
      <task v-for="task in tasks" :key="task.id" :task="task" />
    </draggable>
  </v-list>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    task: require('@/components/Todo/Task.vue').default,
    draggable,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        this.$store.dispatch('setTasks', value);
      },
    },
  },
};
</script>
