<template>
  <div>
    <v-list-item
      @click="$store.dispatch('doneTask', task.id)"
      :class="{ 'teal lighten-5': task.done }"
      class="white"
      :ripple="false"
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
          <v-list-item-action-text class="date-area" v-if="task.dueDate">
            <v-icon small color="grey">
              mdi-calendar
            </v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>

        <v-list-item-action v-if="$store.state.sorting">
          <v-btn color="teal lighten-1" class="handle" icon>
            <v-icon>mdi-reorder-horizontal</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: ['task'],
  filters: {
    niceDate(value) {
      return format(new Date(value), 'MMM dd');
    },
  },
  components: {
    'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue')
      .default,
    'task-menu': require('@/components/Todo/TaskMenu.vue').default,
  },
};
</script>

<style scoped>
.date-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.date-area i {
  margin-right: 0.5vw;
}

.sortable-ghost {
  opacity: 0;
}

.sortable-drag {
  box-shadow: 0 0 8px rgb(38, 166, 154, 0.3);
}
</style>
