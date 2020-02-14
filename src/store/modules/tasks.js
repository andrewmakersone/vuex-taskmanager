export default {
  namespaced: true,
  state: {
    tasks: [],
    filter: 'all',
  },

  getters: {
    getTasks(state) {
      return state.tasks.filter(t => t.title);
    },
    getTasksCount(state, getters) {
      return getters.getTasks.length;
    },
    getFilteredTasks(state) {
      // let inputs = document.getElementsByClassName('checkbox');
      // for (let i = 0; i < inputs.length; i++) {
      //   if (inputs[i].classList.contains('check'))
      //   inputs[i].checked = !inputs[i].checked;
      // }

      return state.tasks.filter(t => {
        if (state.filter === 'all') {
          return t
        } else if (state.filter === 'completed') {
          return t.completed
        } else if (state.filter === 'not-completed') {
          return !t.completed
        }
      });
    },
    getFilteredTasksCount(state, getters) {
      return getters.getFilteredTasks.length;
    },
  },

  mutations: {
    updateTasks(state, fetchedTasks) {
      state.tasks = fetchedTasks;
    },
    setFilter(state, selectedFilter) {
      state.filter = selectedFilter;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => {
        return task.id !== taskId;
      });
    },
    changeCompleteStatus(state, taskId) {
      let taskIndex = state.tasks.findIndex((task) => {
        return task.id === taskId;
      });
      let status = state.tasks[taskIndex].completed;
      state.tasks[taskIndex].completed = !status;
    }
  },

  actions: {
    async fetchTasks({commit}, limit = 5) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      const fetchedTasks = await response.json();

      commit('updateTasks', fetchedTasks);
    },
  }
}
