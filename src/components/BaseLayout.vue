<template>
  <div class="page-container">
    <header class="green-header">
      <div class="header-container">
        <div class="buttons-container">
          <h1>VueJS</h1>
          
          <BaseButton @click="goHome" color="primary">Home</BaseButton>
          <BaseButton @click="goMail" color="primary">Mail</BaseButton>
          <BaseButton @click="logout" color="primary">Déconnexion</BaseButton>
        </div>
        <div>
          <span class='username' v-if="username">{{ username }}</span>
          <span v-else>
            <SigninButton @signin-success="onSignInSuccess" />
          </span>
        </div>
      </div>
    </header>
    <main class="main-content">
      <slot></slot>
    </main>

    <footer class="footer">
      <p class="footer-text">Copyright © 2023 My App</p>
    </footer>
  </div>
</template>

<script>
import SigninButton from "@/components/SigninButton.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "BaseLayout",
  components: {
    SigninButton,
    BaseButton,
  },
  props: ['username'],
  methods: {
    onSignInSuccess(username) {
      this.$emit('set-username', username);
    },
    goHome() {
      // Logic for navigating to the home page
      console.log("Navigating to the home page");
    },
    goMail() {
      // Logic for navigating to the mail page
      console.log("Navigating to the mail page");
    },
    logout() {
      // Logic for user logout
      console.log("User logout");
      // You can add further logic here, such as clearing tokens or redirecting
    },
  },
};
</script>

<style>
/* Styles for the entire page */
.page-container {
  background-color: #f2f2f2; /* Couleur d'arrière-plan */
  min-height: 100vh; /* Hauteur minimale de la page pour remplir l'écran */
}

/* Styles for header */
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

/* Styles for main content */
.main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

/* Styles for footer */
.footer {
  background-color: #333;
  color: #fff;
  padding: 15px 0;
  text-align: center;
}

.footer-text {
  margin: 0;
}

</style>
