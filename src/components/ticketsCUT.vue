<v-dialog
v-model="showEditModal"
max-width="500px"
>
<v-card>
    <v-container>
    <h2>Ticket Raised By Dixit</h2>
    <v-divider class="py-1"></v-divider>

      <form class="form" @submit.prevent="updateStatus">
          <div class="inputDiv">
            <input type="text" :value="ticketData.category" disabled>
          </div>

          <div class="inputDiv">
            <input type="text" :value="ticketData.title" disabled>
          </div>

          <div class="inputDiv">
            <input type="text" :value="ticketData.createdOn" disabled>
          </div>

          <div class="inputDiv">
            <textarea type="text" :value="ticketData.description" disabled> </textarea>
          </div>

          <div class="inputDiv">
            <input type="text" :value="ticketData.priority" disabled>
          </div>

          <div class="inputDiv">
            <select 
              type="text" 
              v-model="ticketData.status"
              name="status" 
              >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

      <small>*indicates required field</small>

      <v-spacer></v-spacer>
      <div class="d-flex justify-end">
        <v-btn type="reset" @click="showEditModal = false">Cancel</v-btn>
        <v-btn class="me-4 text-white ml-2 btn-submit" type="submit" color="#115173"> Update Status </v-btn>
      </div>
    </form>

    </v-container>

</v-card>
</v-dialog>


<template v-slot:item.actions="{ item }">
    <v-icon
      size="small"
      class="me-2"
      @click="editItem(item.raw)"
    >
      mdi-pencil
    </v-icon>
  </template>