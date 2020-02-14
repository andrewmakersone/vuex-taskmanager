<template>
  <ul>
    <span class="task-counter">Now you have: <strong>{{this.tasksCount}} tasks</strong></span>
    <li v-for="task in tasks" :key="task.id">
      <span>
        <input type="checkbox" class="checkbox" @change="isCompleted(task.id)">
        <strong>{{task.id}}.</strong>
        <span :class="{completed: task.completed}">{{task.title}}</span>
      </span>
      <button @click="removeTask(task.id)">&times;</button>
    </li>
  </ul>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: "TasksList",
    computed: {
      ...mapGetters('tasks',{
        tasks: 'getFilteredTasks',
        tasksCount: 'getFilteredTasksCount'
      })
    },
    methods: {
      ...mapActions('tasks',{
        fetchTasks: 'fetchTasks'
      }),
      ...mapMutations('tasks',{
        deleteTask: 'deleteTask',
        changeCompleteStatus: 'changeCompleteStatus'
      }),
      isCompleted(taskId) {
        this.changeCompleteStatus(taskId);
      },
      removeTask(taskId) {
        this.deleteTask(taskId);
      }
    },
    async mounted() {
      await this.fetchTasks();
    }
  }
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    .task-counter {
      margin: 0 1rem;
      display: block;
      text-align: right;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      padding: 1rem;
      margin: 1rem;
      border: 1px solid lightgrey;
      &:hover {
        background-color: #f5f5f5;
      }
      span {
        input[type="checkbox"], strong {
          margin-right: 0.5rem;
        }
      }
      button {
        width: 25px;
        height: 25px;
      }
      .completed {
        text-decoration: line-through;
      }
    }
  }
</style>
