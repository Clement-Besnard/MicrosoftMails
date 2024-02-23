<template>
  <div class="page-container">
    <header class="green-header">
      <div class="header-container">
        <div class="buttons-container">
          <BaseButton @click="goHome" color="primary">Home</BaseButton>
          <BaseButton @click="goMail" color="primary">Mail</BaseButton>
        </div>
        <h1>MicrosoftMails</h1>
        <div>
          <span class='username' v-if="username" style="font-size: 20px;">{{ username }}<a @click="logout" style="padding-left: 15px;"><span class="glyphicon glyphicon-log-out"></span></a>
          </span>
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
      this.$router.push('/');
      console.log("Navigating to the home page");
    },
    
    logout() {
      this.$emit('set-username', null);
      console.log("User logout");
      localStorage.removeItem('accessToken');
      localStorage.removeItem('username');
      window.location.reload();
      // You can add further logic here, such as clearing tokens or redirecting
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
