<script setup>
import TicketTable from './components/TicketTable.vue';
import LineChart from './components/LineChart.vue';
import DonutChart from './components/DonutChart.vue';
import TestForm from './components/TestForm.vue';
import DataTable from './components/DataTable.vue';
</script>

<template>
  <main>
    <div class="d-flex justify-space-between">
      <h2>My Tickets</h2>
      <v-btn variant="outlined" prepend-icon="fa-solid fa-plus" color>New Ticket
      </v-btn>
    </div>
    <DataTable />
    <TicketTable />
    <!-- <section class="w-100 d-flex justify-space-between">
      <div class="line-wrapper w-100 rounded-sm">
        <LineChart />
      </div>
      <div class="doughnut-wrapper w-50 rounded-sm">
        <DonutChart />
      </div>
    </section> -->
    <TestForm />
    
  </main>
</template>

<style scoped>
main {
  width: 95%;
  height: 100vh;
  max-width: 1000px;
  margin: auto;
}


section {
  margin-top: 2rem;
  width: 100%;
  gap: 0.8rem;
}

.line-wrapper {
  border: 1px solid #dadce2;
  padding: 1rem;
}

.doughnut-wrapper {
  border: 1px solid #dadce2;
  padding: 1rem;
}

</style>
