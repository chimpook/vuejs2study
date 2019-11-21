<template>
  <div id="app">
    <div class="container">
      
      <div class="form-group">
        <div class="row">
          <div class="col-12">
            <h2>Quotes added</h2>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="2" aria-valuemin="0" aria-valuemax="10">2/10</div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
            <h3>Quote</h3>
            <!--<textarea name="quotearea" id="quotearea" cols="30" rows="10"></textarea>-->
            <textarea class="form-control" name="quotearea" id="quotearea"></textarea>
            <div class="row">
              <div class="col"></div>
              <div class="col">
                <button class="btn btn-primary">Add Quote</button>
              </div>
              <div class="col"></div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-3">
            <div class="quote">
              Just a Quote to start with something
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-12">
            <div class="alert alert-info">Info: Clik on  Quote to delete it</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-top: 20px;
  text-align: center;
}

.quote {
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 1px 2px #ccc;
  border-radius: 4px;
  margin: 12px;
}

.alert {
  text-align: center;
}

.row {
  /* background-color: aquamarine; */
}

</style>
