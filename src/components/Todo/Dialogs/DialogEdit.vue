<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">
        Edit Task
      </v-card-title>
      <v-card-text
        >Edit the title of the task:
        <v-text-field v-model="taskTitle" @keyup.enter="saveTask()" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="teal darken-1"
          text
          @click="saveTask()"
          :disabled="taskTitleInvalid"
        >
          SAVE
        </v-btn>
        <v-btn color="grey darken-3" text @click="$emit('close')">
          CANCEL
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task'],
  data() {
    return {
      taskTitle: null,
    };
  },
  computed: {
    taskTitleInvalid() {
      return !this.taskTitle || this.taskTitle === this.task.title;
    },
  },
  methods: {
    saveTask() {
      if (!this.taskTitleInvalid) {
        let payload = {
          id: this.task.id,
          title: this.taskTitle,
        };
        this.$store.dispatch('updateTaskTitle', payload);
        this.$emit('close');
      }
    },
  },
  mounted() {
    this.taskTitle = this.task.title;
  },
};
</script>

<style>
.v-input.v-input--is-focused.theme--light.v-text-field.v-text-field--is-booted {
  color: #26a69a !important;
}
</style>
