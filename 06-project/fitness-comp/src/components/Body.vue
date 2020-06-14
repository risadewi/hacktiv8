<template>
  <v-content class="wrapper">
    <br />
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-card class="mx-auto" max-width="450" flat>
          <p>Please Select Workout Type:</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row :justify="justify">
      <v-col cols="12" sm="12" md="6">
        <v-card class="mx-auto" max-width="450">
          <v-img class="white--text align-end" height="450px" src="../assets/img-02.png">
            <v-card-title>Personal Workout</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>Your Personal and Customized Workout</div>
            <router-link style="text-decoration: none; color: inherit;" to="/PersonalWorkout">
              <v-btn absolute dark fab top right color="pink" @click="methodPersonal">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card class="mx-auto" max-width="450">
          <v-img class="white--text align-end" height="450px" src="../assets/img-01.png">
            <v-card-title>Heroes Workout</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>Your Precompiled and Ready to Use Workout</div>
            <router-link style="text-decoration: none; color: inherit;" to="/HeroWorkout">
              <v-btn absolute dark fab top right color="pink">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  name: "Body"
};
</script>

<style>
.text--primary {
  position: relative;
  height: 80px;
}
.text-center {
  padding: 15px;
}
</style>