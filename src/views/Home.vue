<!----------------------------------------------------------------------------------------------------------------
--
#Original Author: Michelle Petit                                 #
#Date Created: 10/27/2020                                        #
#Version: 1                                                      #
#Date Last Modified:10/27/2020                                   #
#Modified by: Michelle Petit                                     #
#Modification log: added flowerbox, template HTML, script, and   #
#                  styles (copied from index.html)               #
 --
------------------------------------------------------------------------------------------------------------------>

<template>
  <div class="home">
    <div class="jumbotron">
      <div class="container text-center">
        <h1 class="small">Welcome to my corner of the Internet!</h1>      
        <p>I hope you'll enjoy peeking inside my planners, discovering new recipes, or perhaps finding a new favorite author.</p>
      </div>
    </div>
      
    <div class="container-fluid bg-3 text-center">    
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <img src="../assets/me.png" class="img-thumbnail" style="text-align: center;" alt="a portrait of me">
          <h3>Hi, I'm Michelle!</h3><br>
          <p class="text-left">I love making my planners and bullet journals look cute, reading and collecting books, eating yummy food, watching movies and fun animated 
            series like Gravity Falls and The Last Airbender, playing Animal Crossing, and of course hanging out with my family!

            I hope you’ll find something here that you like! Feel free to contact me with any suggestions or comments. 
            I’d love to hear from you!
          </p>  
        </div>
        <div class="col-sm-4"> 
          <img src="../assets/bookmark.jpg" class="img-thumbnail" style="text-align: center;" alt="an illustrated book page with a velvet bookmark">
          <h3>Join Me for Fun Tutorials, Yummy Recipes & Planner Inspo</h3>
          <p class="text-left">
            I’ll be sharing all of the fun things I’ve learned about making and decorating planners, including how I make the accessories I sell in my 
            Etsy shop and where you can buy supplies to make your own! I’ll be documenting my new adventures in bullet journaling. 
            I’ll share family recipes, and let you know when I find a new recipe that’s easy to make and delicious to eat. 
            Fellow booklovers can pop over to my Book page to see what books I love, and I hope you’ll share your favorites with me. 
            I intend to gather all sorts of fun odds and ends to decorate my little corner with, and I hope you’ll be a part of it!
          </p>
        </div>
      </div>
    </div>
    <br><br>
    <div class="container-fluid bg-3 text-center">    
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <img src="../assets/crow_clips.jpg" class="img-thumbnail" style="text-align: center;" alt="three crow paperclips">
          <h3>How CrowsCornerStationery Started</h3>
          <p class="text-left">
            I discovered, and quickly fell in love with, Instagram’s planning community in 2015. I learned how to decorate my own planners by 
            following tutorials from Happie Scrappie, The Planner Society (I highly recommend her Creative Planner Workshop!), and The Reset Girl. 
            I enjoyed making accessories for my planners so much that I decided to open up a little Etsy shop to share my creations. 
            My shop was originally called PocketsFullOfJoy, and I designed all sorts of paperclip bookmarks and planner charms to sell. 
            For 2020 I decided to re-brand so my shop and social media could evolve alongside my personal aesthetic and life.
          </p>
        </div>
        <div class="col-sm-4"> 
          <img src="../assets/devo.jpg" class="img-thumbnail" style="text-align: center;" alt="my whippet named Devo">
          <h3>Meet The Fam</h3>
          <p class="text-left">
            I’m a lucky girl, because I have two teenagers and four furbabies who call me Mom! My son Leo is 17 and definitely a child of the digital era. 
            My daughter Anna is 18 and an aspiring writer. The cute face above belongs to Devo, our whippet puppy. 
            We adopted him last year from our local shelter. Then there are Izzy and Ella, our mother-daughter Rottweiler duo. We found JiJi, 
            our little black cat, at Petco. (Our Petco works with a local shelter to help find their cats/kittens forever homes.) 
            And last, but certainly not least, there’s Skippy, our brown mackerel tabby who’s the oldest of my four-legged babies.
          </p>
        </div>
      </div>
    </div>
    <br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'Home' 
}
</script>

<style scoped>
     /* Change page header defaults */
       h3 {
        font-family: 'Artifika', serif;
        color:darkred;
      }
      h1.small {
        font-family: 'Artifika', serif;
        font-size: 5rem;
      }
      img {
        margin-bottom: 2rem;
      }
</style>