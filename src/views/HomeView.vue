<template>
  <div class="home">
    <MainBlock />
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainBlock from '@/components/MainBlock.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MainBlock,
    TodoList
  }
}
</script>

<style lang="scss">
  .home {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>