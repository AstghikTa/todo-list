<template>
<header>
        <v-layout>
          <v-bottom-navigation >
            <v-btn>
              <v-icon> <RouterLink to="/"> <span>Home </span></RouterLink></v-icon>
            </v-btn>
      
            <v-btn>
              <v-icon><RouterLink to="/contact-us"> <span>Contact us </span></RouterLink></v-icon>
            </v-btn>
      
            <v-btn>
              <v-icon> <RouterLink to="/about"> <span>About us </span></RouterLink></v-icon>
            </v-btn>
      
            <v-btn>
              <v-icon>    <RouterLink to="/notFound"> <span>404 ERROR </span></RouterLink></v-icon>
            </v-btn>
 
          </v-bottom-navigation>
         </v-layout> 
    
</header>
    
</template>

<script src="./header.js"></script>