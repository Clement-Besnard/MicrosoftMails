<template>
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
};
</script>

<style>
/* Styles pour la page entière */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0; /* Couleur de fond de la page */
}

/* Styles pour l'en-tête */
.green-header {
  background-color: #4CAF50;
  color: #fff;
  padding: 15px 0;
  text-align: center;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-container h1 {
  margin: 0;
  font-size: 24px;
}

.username {
  font-weight: bold;
}

/* Styles pour le contenu principal */
.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

.add-email-button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
}

.add-email-button:hover {
  background-color: #45a049;
}

.delete-email-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}

.delete-email-button:hover {
  background-color: #cc0000;
}

/* Styles pour le pied de page */
.footer {
  background-color: #333;
  color: #fff;
  padding: 15px 0;
  text-align: center;
  margin-top: auto;
}

.footer-text {
  margin: 0;
}

</style>
