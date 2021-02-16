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

.v-input.pa-3.v-input--hide-details.v-input--is-focused.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.primary--text {
  color: #26a69a !important;
}

.v-label.v-label--active.theme--light.primary--text {
  color: #26a69a !important;
}

.v-icon.notranslate.v-icon--link.mdi.mdi-plus-circle.theme--light {
  color: #26a69a !important;
}

.v-icon.notranslate.v-icon--link.mdi.mdi-plus-circle.theme--light.primary--text {
  color: #26a69a !important;
}

.v-icon.notranslate.v-icon--disabled.v-icon--link.mdi.mdi-plus-circle.theme--light {
  color: #26a69a !important;
}

.v-icon.notranslate.v-icon--link.mdi.mdi-close.theme--light.primary--text {
  color: #26a69a !important;
}
</style>
