<template>
  <header class="green-header">
    <div class="header-container">
      <span class='username' v-if="username">{{ username }}</span>
      <span v-else>
        <SigninButton @signin-success="onSignInSuccess" />
        <button @click="loginWithGoogle" class="google-login-button">Login with Google</button>
      </span>
    </div>
  </header>
</template>

<script>
import SigninButton from "@/components/SigninButton.vue";

export default {
  name: "HomePage",
  components: {
    SigninButton,
  },
  props: ['username'],
  methods: {
    onSignInSuccess(username) {
      this.$emit('set-username', username);
    },
    loginWithGoogle() {
      // Rediriger vers la page de connexion Google
      window.location.href = "/auth/google"; // À remplacer par l'URL de votre backend pour l'authentification Google
    }
  },
};
</script>
