<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Type new task here" v-model="title">
    <button type="submit">Add</button>
  </form>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    name: "AddTask",
    data() {
      return {
        title: '',
      }
    },
    methods: {
      ...mapMutations('tasks',{
        addTask: 'addTask'
      }),
      submit() {
        if (this.title) {
          this.addTask({
            id: this.tasksCount + 1,
            title: this.title,
            completed: false
          });
          this.title = '';
        }
      },

    },
    computed: {
      ...mapGetters('tasks',{
        tasksCount: 'getTasksCount'
      }),
    }
  }
</script>

<style scoped lang="scss">
  form {
    input, button {
      padding: 0.5rem;
    }
    button {
      margin-left: -1px;
    }
  }
</style>
