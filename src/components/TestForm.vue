<template>
  <v-row justify="end">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
    <template v-slot:activator="{ props }">
      <v-btn
          variant="outlined" 
          color="blue-darken-3"
          class="btn"
          v-bind="props"
      >
      <span id="plus">+ </span> New Ticket
      </v-btn>
    </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <VForm class="form">
                  <div class="inputDiv">
                  <input
                      name="email"
                      placeholder="Email*"
                      type="email"
                      class="input"
                  />
                  <ErrorMessage name="email" class="error_message" />
                  </div>

                  <div class="inputDiv">
                  <input
                      name="password"
                      placeholder="Password*"
                      type="password"
                      class="input"
                  />
                  <ErrorMessage name="password" class="error_message" />
                  </div>

                  <v-btn type="reset" @click="dialog = false">Cancel</v-btn>
                  <v-btn class="me-4 btn-submit" type="submit" @click="dialog = false"> Submit </v-btn>
              </VForm>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">  
  import { ref } from 'vue'
  const dialog = ref(false);
</script>


<style>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

#plus {
  font-size: 2rem;
  font-weight: 300;
  margin-top: -4px;
  padding-right: 2px;
}


.form-heading { 
  font-weight: 900;
}

.form-heading::after {
  content: "";
  width: 50%;
  height: 2px;
  background: #0000008d;
  display: block;
  margin: auto;
}


.form .inputDiv {
  margin: 15px 0;
}


.form .inputDiv input,
.inputDiv select {
  padding: 10px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid #0000003d;
}


.error_message {
  color: #f44b4b;
}

</style>