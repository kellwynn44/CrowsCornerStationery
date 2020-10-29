<template>
  <footer class="page-footer">
    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">  
      <!-- Grid row -->
      <hr class="clearfix w-100 d-md-none pb-3"> 
      <div class="row"> 
        <!-- Empty grid column -->
        <div class="col-md-1"></div>
        <!-- Grid column -->
        <div class="col-md-3 mt-md-0 mt-3 text-left">
          <!-- Content -->
          <h5 class="text-uppercase">Follow Me</h5>
          <br>
          <p> <a href="https://www.instagram.com/crowscornerstationery/">
                <i class="fab fa-instagram fa-2x"></i>
              </a></p>
          <p>
            <a href="https://www.facebook.com/michelle.n.petit" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a>
          </p>
          <p>
            <a href="https://www.etsy.com/shop/CrowCornerStationery?ref=ss_profile" target="_blank"></a>
          </p>
        </div>        
        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3 text-left"> 
          <!-- Links -->
          <h5 class="text-uppercase">Contact Me</h5> 
          <br>
          <ul class="list-unstyled">
            <li>
              <i class="far fa-envelope fa-lg"></i>
              <a href="mailto:crowscornerstationery@gmail.com">crowscornerstationery@gmail.com</a>
            </li>
            <br>
            <li>
              <i class="fab fa-etsy fa-lg"></i>
              <a href="https://www.etsy.com/shop/crowcornerstationery" target="_blank">crowcornerstationery.etsy.com</a>
            </li>
          </ul>
        </div>
        <!-- Grid column -->
        <div class="col-md-5 mb-md-0 mb-3"> 
          <!-- NEEDS CONTENT? -->
        </div>    
      </div>
    <!-- Copyright -->
    <hr class="clearfix w-100 d-md-none pb-3"> 
    <div class="footer-copyright text-center">© 2020 Copyright:
      CrowsCornerStationery
    </div>
   </div> 
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      /* Add a gray background color and some padding to the footer */
      footer {
        background-color: rgb(12, 12, 12);
        color: white;
        padding: 15px;
      }
      /* Change icon and link colors */
      a i, footer a {
        color: white;
      }
      a i:hover, footer a:hover {
        color:darkred;
      }
</style>
