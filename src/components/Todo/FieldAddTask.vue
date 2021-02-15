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

<style>
.v-input.pa-3.v-input--hide-details.v-input--is-focused.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.primary--text {
  color: teal !important;
}

.v-label.v-label--active.theme--light.primary--text {
  color: teal !important;
}

.v-icon.notranslate.v-icon--link.mdi.mdi-plus-circle.theme--light {
  color: grey !important;
}

.v-icon.notranslate.v-icon--link.mdi.mdi-plus-circle.theme--light.primary--text {
  color: #26a69a !important;
}
</style>
