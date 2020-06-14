<template>
  <div class="wrapper">
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-card class="mx-auto" max-width="450" flat>
          <h3>Please Select Workout Type:</h3>
          <p>{{ selected }}</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-for="item in personals.slice().reverse()" :key="item" >
      <v-col cols="12" sm="12" md="6">
        <v-card class="mx-auto" max-width="450" flat>
          <v-checkbox v-model="selected" selected-color="cyan" :label="item.name" :value="item.name"></v-checkbox>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    personals: [
      {
        personalId: 1,
        name: "Bent Over Barbell Row"
      },
      {
        personalId: 2,
        name: "Barbell Bench Press"
      },
      {
        personalId: 3,
        name: "Incline Barbell Bench Press"
      }
    ]
  })
};
</script>

<style>
.wrapper{
  padding-top: 100px;
}
</style>