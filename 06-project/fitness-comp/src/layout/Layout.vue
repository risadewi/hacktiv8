<template>
  <v-app>
    <Header/>
    <Body/>
    <div></div>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';
//import PersonalWorkout from './components/PersonalWorkout.vue';
//import HeroWorkout from './components/HeroWorkout.vue';
export default {
  name: 'Layout',

  components: {
    Header,
    Body,
    //PersonalWorkout,
    //HeroWorkout
  },

  data: () => ({
    //
  }),
};
</script>
