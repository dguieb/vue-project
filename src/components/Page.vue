<template>
  <div class="hello">
  <div class="ui menu">
    <div class="header item">
      Our Company
    </div>
    <a class="item">
      About Us
    </a>
    <a class="item">
      Jobs
    </a>
    <a class="item">
      Locations
    </a>
  </div>
    <h1>{{ msg }}</h1>
    <div class="ui container">
      <div class="ui segment red">
        <i class="american sign language interpreting icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      msg: 'Page View'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
