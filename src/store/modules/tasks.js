export default {
  namespaced: true,
  state: {
    tasks: [],
    filter: 'all',
    message: 'kek'
  },

  getters: {
    getTasks(state) {
      return state.tasks.filter(t => t.title);
    },
    getTasksCount(state, getters) {
      return getters.getTasks.length;
    },
    getFilter(state) {
      return state.filter;
    }
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
  }
}
