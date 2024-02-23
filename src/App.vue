<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <BaseLayout :username="username" @set-username="setUsername" >
    <RouterView></RouterView>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  name: "App",
  components: {
    BaseLayout
  },
  data() {
    return {
      username: null,
    };
  },
  methods: {
    setUsername(username) {
      this.username = username;
      console.log('Username updated:', this.username);
    },
  },
  mounted() {
    // Vérifier s'il existe des informations d'identification dans le stockage local
    
    const username = localStorage.getItem('username');
    if (username) { 
      // Utiliser les informations d'identification pour authentifier automatiquement l'utilisateur
      this.username = username;
    }
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #2c3e50;
  color: #ffffff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
