<!----------------------------------------------------------------------------------------------------------------
--
#Original Author: Michelle Petit                                 #
#Date Created: 10/27/2020                                        #
#Version: 1                                                      #
#Date Last Modified:10/27/2020                                   #
#Modified by: Michelle Petit                                     #
#Modification log: added flowerbox, template HTML, script, and   #
#                  styles (pasted from journals.html)            #
 --
------------------------------------------------------------------------------------------------------------------>

<template>
    <main>
        <div class="jumbotron">
      <div class="container text-center">
        <h1 class="small">How I Decorate And Use My Journals</h1>      
      </div>
    </div>

    <div class="container-fluid bg-3 text-center">    
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <img src="assets/my_bujo.jpg" class="img-thumbnail" style="text-align: center;" alt="decorated to-do list">
          <h3>My Bujo</h3>
          <br>
          <p class="text-left">
              2020 was the first year I decided to keep a bullet journal. I wish I could say
              it's going great, but I haven't been very motivated to use it. I do love decorating it, 
              though! This collage monthly layout was inspired by tristartist.nl on Instagram. Her bujo
              layouts are always super cute, yet simple enough that I'm not too intimidated to try them
              myself. 

          </p>  
        </div>
        <div class="col-sm-4"> 
          <img src="assets/homeschool_bujo.jpg" class="img-thumbnail" style="text-align: center;" alt="mini Happy Planner with sticker book">
          <h3>
            My Homeschool Bujo
          </h3>
          <p class="text-left">
              My husband and I decided to homeshool our son when he was in first grade.
              To make a long story very short, his teacher had isolated him from the rest 
              of the class by moving his desk to the side and turning it around. He was a good 
              child, but he is autistic and had a very hard time sitting still for long periods
              of time when he was little (he loved kindergarten and his K teacher). 
         </p>
         <p class="text-left">
            Originally we enrolled him in a virtual online school so I would have help choosing 
            his curriculum, grading assignments; basically it was a great way to ease into homeschooling
            him completely on my own. He's in High School now, so I needed to up my game as far as 
            scheduling and recording his assignments go. Using a bujo for his classes makes lesson planning
            and tracking assignments fun and easy(ish)!
         </p>
        </div>
      </div>
    </div>
  <br>
  <br>
    </main>
</template>

<script>
export default {
    name: 'Journals'
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
</style>