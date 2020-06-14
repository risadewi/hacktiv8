<template>
  <div class="wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-card class="mx-auto" flat>
            <h3>Heroes Workout</h3>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="item in heroes" :key="item.heroId" cols="12" sm="12" md="4">
          <v-card class="mx-auto">
            <v-img class="white--text align-end" src="../assets/img-01.png" :aspect-ratio="4/4"></v-img>
            <div>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn absolute fab right text v-on="on">
                    <v-icon>mdi-view-sequential</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{item.name}}</span>
                  </v-card-title>
                  <v-data-table hide-default-footer :headers="headers" :items="item.training"></v-data-table>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Ok</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-card-title>{{item.name}}</v-card-title>
            </div>

            <v-card-actions>
              <v-btn small>Detail</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HeroWorkout',
  data: () => ({
    dialog: false,
    alignments: ["start", "center", "end"],
    headers: [
      { text: "Exercise", align: "start", sortable: false, value: "exerciseName" },
      { text: "Wram Up", value: "wramUp" },
      { text: "Working Sets", value: "workingSet" },
      { text: "Rest Period", value: "restPeriod" }
    ],
    heroes: [
      {
        heroId: 1,
        name: "Bat Ability",
        detail:
          "Batman often performs the action at night. Because of that, batman must have additional strength at night. Perform the workouts over a seven days period.",
        training: [
          {
            exerciseName: "Incline Barbell Bench Press",
            wramUp: "2 x 10-15",
            workingSet: "3 x 4-8",
            restPeriod: "5 min"
          },
          {
            exerciseName: "Barbell Bench Press",
            wramUp: "2 x 10-15",
            workingSet: "3 x 4-8",
            restPeriod: "4 min"
          },
          {
            exerciseName: "Bent Over Barbell Row",
            wramUp: "5 x 10-15",
            workingSet: "1 x 4-8",
            restPeriod: "10 min"
          }
        ]
      },
      {
        heroId: 2,
        name: "Bat Punch",
        detail:
          "The enemy of batman often has a good body endurance. To damage the opponents defense, the batman must launch a powerful punch to the opponent. Perform the workouts over a three days period.",
        training: [
          {
            exerciseName: "Incline Barbell Bench Press",
            wramUp: "2 x 10-15",
            workingSet: "3 x 4-8",
            restPeriod: "5 min"
          },
          {
            exerciseName: "Barbell Bench Press",
            wramUp: "2 x 10-15",
            workingSet: "3 x 4-8",
            restPeriod: "4 min"
          },
          {
            exerciseName: "Bent Over Barbell Row",
            wramUp: "5 x 10-15",
            workingSet: "1 x 4-8",
            restPeriod: "10 min"
          }
        ]
      },
      {
        heroId: 3,
        name: "Steel Muscle",
        detail:
          "Get ready to ramp up the intensity and really blow out the muscle.",
        training: [
          {
            exerciseName: "Incline Barbell Bench Press",
            wramUp: "2 x 10-15",
            workingSet: "3 x 4-8",
            restPeriod: "5 min"
          },
          {
            exerciseName: "Barbell Bench Press",
            wramUp: "2 x 10-15",
            workingSet: "3 x 4-8",
            restPeriod: "4 min"
          },
          {
            exerciseName: "Bent Over Barbell Row",
            wramUp: "5 x 10-15",
            workingSet: "1 x 4-8",
            restPeriod: "10 min"
          }
        ]
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