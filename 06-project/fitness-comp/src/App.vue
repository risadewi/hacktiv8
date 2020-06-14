<template>
  <v-app>
    <router-view name ='a'></router-view>
    <router-view name ='b'></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data: () => ({
    //
  })
};
</script>
