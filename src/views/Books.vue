<!----------------------------------------------------------------------------------------------------------------
--
#Original Author: Michelle Petit                                 #
#Date Created: 10/27/2020                                        #
#Version: 1                                                      #
#Date Last Modified:10/27/2020                                   #
#Modified by: Michelle Petit                                     #
#Modification log: added flowerbox, template HTML, script, and   #
#                  styles (copied from books.html)               #
 --
------------------------------------------------------------------------------------------------------------------>

<template>

  <div class="books">
        <div class="jumbotron">
      <div class="container text-center">
        <h1 class="small">She read books as one would breathe air, to fill up and live. -Annie Dillard</h1>      
      </div>
    </div>

    <div class="container-fluid bg-3 text-center">    
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-4">
          <img src="../assets/beauty.jpg" class="img-thumbnail" style="text-align: center;" alt="Beauty by Robin McKinley">
          <h3>My Favorite Author</h3>
          <br>
          <p class="text-left">
            Growing up, everyone in my family loved reading. My mom would bring us kids to the library at least once a month to 
            return/check-out books, or to participate in one of their fun enrichment activities. The summer reading program was 
            my favorite, because the final prize was a free book of your choice from their book cart! I earned a lot of great books 
            over the years, including this copy of Robin McKinley’s Beauty.

            Beauty is so well written and immersive that I am continually re-reading it. I don’t want to say anything about the actual 
            story here; it’s a retelling of Beauty and the Beast so you already know the basic story line, and I want to let McKinley’s 
            unique take on the classic fairy tale surprise and delight you as you read. 
          </p>  
        </div>
        <div class="col-sm-4"> 
          <iframe width="550" height="309" src="https://www.youtube.com/embed/HuaYlD9NU4o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>My Favorite Booktuber</h3>
          <p class="text-left">
            I found Read With Cindy completely by accident. I subscribed to her channel because she is authentic, smart, and funny. 
          </p>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>

</template>

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