<template>

  <div class="not-found"> 
  <h1>404 - Page Not Found</h1>

   <img alt="NotFound" src="../../images/404_.png" height="40"> 
  <p>Sorry, the page you are looking for might have been removed,  or is temporarily
    unavailable. </p>
  </div>

<div class="homePageLink">  
<RouterLink to="/" > <span class="linkPage"> Welcome Todo List page </span></RouterLink></div>

</template>

<script>

export default {
    data() {
        return {        
        }
    }
}
</script> 

  <style scoped>
  .not-found {
      text-align: center;
      color: black;
  }

  h1 {
    margin-top: 50px;
  }

  img {
  width: 200px;
  height: 200px;
  }

  .homePageLink {
text-align: center;
margin-top: 30px;
font-size: 20px;
  }

  .linkPage {
color: blue;
  }
  
  </style>