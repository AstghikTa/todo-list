<template>

  <div class="not-found"> 
  <h1>404 - Page Not Found</h1>
   <img :src="notFoundImage" alt="404 Error Image">
   <img alt="NotFound" src="../../images/404_.png" height="40"> 
  <p>Sorry, the page you are looking for might have been removed,  or is temporarily
    unavailable. </p>
  </div>

<div>  
<RouterLink to="/" > <span class="red-lighten-3"> Go to Home </span></RouterLink></div>

</template>

<script>

export default {
    data() {
        return {
             NotFaund
        }
    }
}
</script> 

  <style scoped>
  .not-found {
      text-align: center;
  }
  </style>