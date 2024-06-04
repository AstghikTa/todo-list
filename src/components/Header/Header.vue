<template>
<div class="navMenu"> 
      <v-container >
        <v-row align="center">
          <v-col cols="12" sm="4" >
            <RouterLink  to="/">  
              <img alt="to do list picture" src="../images/todo.png" height="40"> 
            </RouterLink> 
          </v-col>
          <v-col cols="auto">
            <router-link v-for="menuItem in menuItems" :key="menuItem.path" :to="menuItem.path" class="navLink"
              :active-class="'active-link'">
              {{ menuItem.title }}
            </router-link>
          </v-col>
        </v-row>
      </v-container>
   </div>
</template>

<style scoped>

.navMenu {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  background-color: #144b21;
}

.navLink {
  text-decoration: none;
  color: white;
  padding: 0 10px;
}

.navLink:hover {
  color: #efa00b;
}
 
</style>

<script src="./header.js"></script>