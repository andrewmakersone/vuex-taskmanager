<template>
  <div>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <br>
    Computed: {{filter}}
  </div>
</template>

<script>
  export default {
    name: "TasksFilter",
    computed: {
      filter: {
        get () {
          return this.$store.state.filter
        },
        set (value) {
          this.$store.commit('updateFilter', value)
        }
      }
    }
  }
</script>

<style scoped>
  select {
    padding: 0.5rem;
  }
</style>
