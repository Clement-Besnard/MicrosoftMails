<template>
  <BaseLayout :username="username" @set-username="setUsername" >
    <RouterView/>
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

.green-header {
  background-color: #035d03; 
  padding: 15px;
  position: fixed;
  color: #ffffff; 
  width: 100%;
  top: 0;
  z-index: 1; /* Modifier cette valeur pour éviter de masquer le bouton */
}


h1 {
  padding-left: 10px;
  color: #ffffff;
  position: relative;
  z-index: 2;
  max-width: 10%;
  
}


.signinbutton{
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  z-index: 100;
}


.username{
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
  margin:15px;
  z-index: 100;
}

</style>
