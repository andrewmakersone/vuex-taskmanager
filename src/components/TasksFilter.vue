<template>
  <div>
    <select :value='filter' @change='updateFilter'>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <br>
    Computed: {{filter}}
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: "TasksFilter",
    computed: {
      ...mapState('tasks',['tasks', "filter"])
    },
    methods: {
      ...mapMutations(['updateFilter']),
      updateFilter(e) {
          // this.$store.commit('tasks/updateFilter', e.target.value)
        console.log(e.target.value);
        this.updateFilter(e.target.value);
      }
    }
  }
</script>

<style scoped>
  select {
    padding: 0.5rem;
  }
</style>
