<template>
  <v-text-field
    v-model="newTaskTitle"
    class="field-add-task pa-3"
    outlined
    placeholder="Add a new Task"
    @keyup.enter="addTask()"
    clearable
    hide-details
  >
    <template v-slot:append>
      <v-icon @click="addTask" :disabled="newTaskTitleInvalid" color="white"
        >mdi-plus-circle</v-icon
      >
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: '',
    };
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if (!this.newTaskTitleInvalid) {
        this.$store.dispatch('addTask', this.newTaskTitle);
        this.newTaskTitle = '';
      }
    },
  },
};
</script>

<style>
.field-add-task.v-input--is-focused .v-input__control {
  background-color: rgb(255, 255, 255, 0.2);
}
</style>
