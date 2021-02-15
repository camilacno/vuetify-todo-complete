<template>
  <div class="home">
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

    <v-list v-if="$store.state.tasks.length" flat class="pt-0">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="$store.commit('doneTask', task.id)"
          :class="{ 'teal lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="teal"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="$store.commit('deleteTask', task.id)">
                <v-icon color="teal lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>

    <div v-else class="no-tasks">
      <v-icon color="teal lighten-1" size="100">
        mdi-check
      </v-icon>
      <div class="text-h4 teal--text">Up to date!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      newTaskTitle: '',
    };
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', this.newTaskTitle);
      this.newTaskTitle = '';
    },
  },
};
</script>

<style>
.theme--light.v-icon {
  color: #26a69a;
}

.no-tasks {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
}

.no-tasks i {
  width: 100%;
  align-self: center;
}

.v-application.primary--text {
  color: teal;
}
</style>
