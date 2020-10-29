<!----------------------------------------------------------------------------------------------------------------
--
#Original Author: Michelle Petit                                 #
#Date Created: 10/25/2020                                        #
#Version: 1                                                      #
#Date Last Modified:10/27/2020                                   #
#Modified by: Michelle Petit                                     #
#Modification log: added flowerbox, template, script, and style  #
#                     content                                    #
#                  added Header.vue and Footer.vue info          #
#              added router-view info, worked on troubleshooting #
 --
------------------------------------------------------------------------------------------------------------------>

<template>
  <div id="app"> 

     <div class="navbar navbar-inverse">  
      <div class="container-fluid">   
        <div class="navbar-header">
          <img src="assets/crow_logo.png" class="image-responsive">
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

    <router-view/>
    
    <Footer/>

  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
} 
    /* Remove the navbar's default margin-bottom and rounded borders (from Bootstrap)*/ 
      .navbar {
        margin-bottom: 0;
        border-radius: 0;
        background-color: rgb(12, 12, 12)
      }  
    /* Style the navbar */
    img {
      float: left;
      margin: 2px 10px 2px 0;
    } 
    .myNavbar {
      margin-top: 1.2rem;
    }
    #logo_name {
      font-family: 'Artifika', serif;
      font-size: x-large;
      color: white;
    }
    router-link:hover, #logo_name:hover {
        color: darkred;
      }
    /* Add space between logo and nav links */
    li {
      color: white;
      margin: 1.5rem 2rem;
    }
</style>
