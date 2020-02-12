<template>
  <div class="tasks_view">
    <h2>Here you can manage your tasks:</h2>
    <div class="control-section">
      <TasksFilter></TasksFilter>
      <AddTask></AddTask>
    </div>
    <TasksList></TasksList>
  </div>
</template>

<script>
  import TasksFilter from "../components/TasksFilter";
  import AddTask from "../components/AddTask";
  import TasksList from "../components/TasksList";
  export default {
    name: 'Tasks',
    components: {
      TasksFilter, AddTask, TasksList
    }
  }
</script>

<style scoped lang="scss">
  .tasks_view {
    .control-section {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
    }
  }
</style>
