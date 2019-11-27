<template>
    <div class="container">
      
      <app-progress></app-progress>

      <app-form></app-form>

      <app-list></app-list>

      <app-info></app-info>

    </div>
</template>

<script>
import Progress from './components/Progress.vue';
import Form from './components/Form.vue';
import List from './components/List.vue';
import Info from './components/Info.vue';



export default {
  name: 'app',
  components: {
    appProgress: Progress,
    appForm: Form,
    appList: List,
    appInfo: Info
  }
}
</script>

<style>

.container {
  margin-top: 60px;
}

</style>
