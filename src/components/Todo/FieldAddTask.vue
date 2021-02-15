<template>
  <v-text-field
    v-model="newTaskTitle"
    class="pa-3"
    outlined
    label="Add a new Task"
    append-icon="mdi-plus-circle"
    @click:append="addTask()"
    @keyup.enter="addTask()"
    clearable
    hide-details
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    addTask() {
      this.$store.dispatch('addTask', this.newTaskTitle);
      this.newTaskTitle = '';
    },
  },
};
</script>
