<template>
  <div id="app">
    <div class="navbar navbar-inverse">  
      <div class="container-fluid">   
        <div class="navbar-header">
          <img src="./assets/crow_logo.png" class="image-responsive">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>  
          <a class="navbar-brand myNavbar" id="logo_name" href="index.html">Crows Corner Stationery</a>
        </div>
        <div class="collapse navbar-collapse myNavbar">
          <ul class="nav navbar-nav">
            <li ><router-link to="/">Home</router-link></li>
            <li><router-link to="/planners">Planners</router-link></li>
            <li><router-link to="/journals">Journals</router-link></li>
            <li><router-link to="/books">Books</router-link></li>
            <li><router-link to="/recipes">Recipes</router-link></li>
          </ul>
        </div>
      </div>
     </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>

</style>
