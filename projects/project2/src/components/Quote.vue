<template>
    <div class="quote">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.quote {
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 1px 2px #ccc;
  border-radius: 4px;
  margin: 12px;
  /*font-family: 'Lobster', cursive;*/
  font-family: 'Marck Script', cursive;
  font-size: 16pt;
  width: 22%; min-height: 24px;
}

</style>