import Vue from 'vue'
import Vuex from 'vuex'
// import tasks from "./modules/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    filter: 'all'
  },

  getters: {
    getTasks(state) {
      return state.tasks.filter(t => t.title);
    },
    getTasksCount(state, getters) {
      return getters.getTasks.length;
    },
  },

  mutations: {
    updateTasks(state, fetchedTasks) {
      state.tasks = fetchedTasks;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    updateFilter (state, filter) {
      state.filter = filter;
    }
  },

  actions: {
    async fetchTasks({commit}, limit = 5) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      const fetchedTasks = await response.json();

      commit('updateTasks', fetchedTasks);
    }
  },
  // modules: {
  //   tasks: tasks
  // }
})
