<template>
  <v-card-title class="text-center text-h4 text-md-h5 text-lg-h3 mt-16 text">Contact us</v-card-title>
  <v-card-text class="text-center text-h6 text"  >For  feedback ,
    please feel free to reach out to us.
    
  </v-card-text>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" lg="6" md="6" sm="8" xs="12">
          <v-sheet class="mx-auto">
            <v-form ref="form">
              <v-text-field
                v-model.trim="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
                type="email"
              ></v-text-field>
              <v-textarea label="Message" v-model.trim="message"></v-textarea>
  
              <div class="d-flex flex-column">
                <v-btn class="mt-4" color="success" block @click="sendForm"> Send </v-btn>
  
                <v-btn class="mt-4" color="error" block @click="reset"> Reset Form </v-btn>
              </div>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<style scoped>
.text {
color: black;
 
}
</style>

  <script src="./contact.js"></script>