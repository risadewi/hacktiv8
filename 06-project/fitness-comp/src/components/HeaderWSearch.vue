<template>
  <v-app-bar app color="pink darken-2" dark>
    <v-row no-gutters>
      <v-col cols="1">
        <div class="menu">
          <router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link>
        </div>
      </v-col>
      <v-col cols="1">
        <div class="menu">
          <router-link style="text-decoration: none; color: inherit;" to="/">About</router-link>
        </div>
      </v-col>
      <v-col cols="8">
        <h2 class="text-center">My Fitness Companion</h2>
      </v-col>
      <v-col cols="2">
          <v-text-field class="mx-2" flat label="Search" dense solo-inverted rounded></v-text-field>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
.menu {
  padding: 15px;
}
</style>
