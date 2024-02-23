<template>
  <span class="signinbutton">
    <BaseButton @click="signin" color="danger">Login with Microsoft</BaseButton>
    <BaseButton @click="loginWithGoogle" color="primary">Login with Google</BaseButton>
  </span>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph.js"; // Vous devrez remplacer cela avec votre fonction de connexion Microsoft

export default {
  name: "SigninButton",
  components: { BaseButton },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    async signin() {
      try {
        const user = await signInAndGetUser(); // Remplacez cela avec votre fonction de connexion Microsoft
        this.username = user.account.name;
        this.$root.setUsername(this.username);
        localStorage.setItem('username', this.username);
      } catch (error) {
        console.error(error);
      }
    },
    loginWithGoogle() {
      // Construire l'URL d'authentification Google avec votre clé API
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=email%20profile&redirect_uri=http://localhost:8080/auth/callback&client_id=485993413140-jpvf1sp7nc2ch6engfpbkq3v58e4li60.apps.googleusercontent.com`;
      
      // Rediriger vers l'URL d'authentification Google
      window.location.href = googleAuthUrl;
    }
  },
  created() {
    // Vérifier si l'URL de redirection contient le code d'autorisation
    if (this.$route.query.code) {
      // Gérer la redirection de Google OAuth
      this.handleGoogleCallback();
    }
  }
};
</script>
