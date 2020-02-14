<template>
  <div>
    <select v-model="selectedFilter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "TasksFilter",
    computed: {
      selectedFilter: {
        get() {
          return this.$store.state.tasks.filter
        },
        set(value) {
          this.$store.commit('tasks/setFilter', value)
        }

      }
    },
  }
</script>

<style scoped>
  select {
    padding: 0.5rem;
  }
</style>
