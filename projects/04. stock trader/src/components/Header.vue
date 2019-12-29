<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <router-link to="/" class="navbar-brand">Stock Trader</router-link>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" class="nav-item" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
        <router-link to="/stocks" class="nav-item" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
    </ul>
    <strong class="navbar-text navbar-right">Funds: {{ funds }}</strong>
    <ul class="navbar-nav navbar-right">
        <li class="nav-item"><a href="#" class="nav-link">End Day</a></li>
        <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> 
                Save & Load <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
                <li class="nav-item"><a href="#" class="nav-link">Save</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Load</a></li>
            </ul>
        </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>