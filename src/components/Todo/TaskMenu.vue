<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="teal lighten-1" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-edit
      v-if="dialogs.edit"
      :task="task"
      @close="dialogs.edit = false"
    />
    <dialog-due-date
      v-if="dialogs.dueDate"
      :task="task"
      @close="dialogs.dueDate = false"
    />
    <dialog-delete
      v-if="dialogs.delete"
      :task="task"
      @close="dialogs.delete = false"
    />
  </div>
</template>

<script>
export default {
  props: ['task'],
  components: {
    'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue')
      .default,
    'dialog-edit': require('@/components/Todo/Dialogs/DialogEdit.vue').default,
    'dialog-due-date': require('@/components/Todo/Dialogs/DialogDueDate.vue')
      .default,
  },
  data: () => ({
    dialogs: {
      delete: false,
      dueDate: false,
      edit: false,
    },
    items: [
      {
        title: 'Due date',
        icon: 'mdi-calendar',
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: 'Delete',
        icon: 'mdi-delete',
        click() {
          this.dialogs.delete = true;
        },
      },
      {
        title: 'Edit',
        icon: 'mdi-pencil',
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: 'Sort',
        icon: 'mdi-reorder-horizontal',
        click() {
          if (!this.$store.state.searchText) {
            this.$store.commit('toggleSorting');
          } else {
            this.$store.commit('showSnackbar', 'Not sortable while searching!');
          }
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
};
</script>

<style scoped>
.v-list-item__icon {
  margin-right: 1em !important;
}
</style>
