<template>
    <v-app>
      <v-footer  class="footerMenu">
        <v-container>
          <v-row>

            <v-col cols="12" sm="4" class="columns">
              <RouterLink  to="/">  
                <img alt="to do list picture" src="../images/todo.png" height="40"> 
              </RouterLink> 
            </v-col>
  
            <v-col cols="12" sm="4" class="columns">
              <h3> Company</h3>
              <ul>
                <router-link v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.path">
                  <li>{{ menuItem.title }}</li>
                </router-link>
              </ul>
            </v-col>

  
  
            <v-col cols="12" xs="1" sm="1" md="4" lg="4" xl="4" xxl="4" class="columns">
              <h3>Links</h3>
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"> 
                  <img alt="fb logo image"
                  src="../images/fb.avif" height="50" class="rounded float-start"> </a>
                </li>
  
                <li>  <a href="https://github.com/AstghikTa/todo-list" target="_blank">
                  <img alt="youtube logo image"
                  src="../images/github.jpg" height="55" width="70" class="rounded float-start">
                </a>
                </li>
  
                <li> <a href="https://www.linkedin.com/feed/" target="_blank">
                  <img alt="youtube logo image"
                  src="../images/LinkedIn_icon.svg.png" height="55" width="70" class="rounded float-start">
                </a>
                </li>
              </ul>
            </v-col>



           
            





          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </template>
  
  
  <style scoped>
  .footerMenu {

    background-color: #144b21;
    
    justify-content: space-around;
    padding: 2px 0;
  }
  
  h3 {
    color: white;
  }
  
  .columns {
    flex: 1;
    padding: 0 15px;
    text-align: start
  }
  
  ul li:hover {
    color: #e09c37;
    padding-left: 8px;
  }
  
  a:hover {
    color: #e09c37;
    padding-left: 8px;
  }
  
  ul {
    list-style-type: none;
    color: white;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-size: larger;
  }
  </style>
  
  
  <script src="./footer.js"></script>