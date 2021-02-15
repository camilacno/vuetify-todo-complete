import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchText: null,
    tasks: [
      {
        id: 1,
        title: 'Feed the dogs',
        done: false,
        dueDate: '2021-02-14',
      },
      {
        id: 2,
        title: 'Play with the dogs',
        done: false,
        dueDate: '2021-02-13',
      },
      {
        id: 3,
        title: 'Dinner',
        done: false,
        dueDate: null,
      },
    ],
    snackbar: {
      show: false,
      text: '',
    },
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null,
      };
      state.tasks.push(newTask);
    },

    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },

    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },

    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },

    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },

    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },

    hideSnackbar(state) {
      state.snackbar.show = false;
    },

    setSearchText(state, value) {
      state.searchText = value;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showSnackbar', 'Task Added!');
    },

    deleteTask({ commit }, id) {
      commit('deleteTask', id);
      commit('showSnackbar', 'Task Deleted!');
    },

    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload);
      commit('showSnackbar', 'Task Title Updated!');
    },

    updateTaskDueDate({ commit }, payload) {
      commit('updateTaskDueDate', payload);
      commit('showSnackbar', 'Due Date Updated!');
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.searchText) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
  },
});
