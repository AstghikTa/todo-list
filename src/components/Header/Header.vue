<template>
 
    <v-app    class="nav-menu">

      <v-container>
        <v-row align="center">
          
          <v-col cols="12" sm="4" class="columns">
            <RouterLink  to="/">  
              <img alt="to do list picture" src="../images/todo.png" height="40"> 
            </RouterLink> 
          </v-col>

          <v-col cols="auto">
            <router-link v-for="menuItem in menuItems" :key="menuItem.path" :to="menuItem.path" class="nav-link"
              :active-class="'active-link'">
              {{ menuItem.title }}
            </router-link>
          </v-col>
        </v-row>
      </v-container>

    </v-app>
   
</template>


<style scoped>
  
  
 
.nav-menu {
 max-width: 1920;
padding-bottom: -210;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  background-color: #144b21;
padding-top: 50px;
margin-bottom: 100px;

}

.nav-link {
  text-decoration: none;
  color: white;
  padding: 0 10px;
}

.nav-link:hover {
  color: #efa00b;
}

  
</style>

<script src="./header.js"></script>