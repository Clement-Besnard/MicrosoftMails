<template>
  <span class="signinbutton">
    <BaseButton @click="signin" color="danger">Login with Microsoft</BaseButton>
    <BaseButton @click="loginWithGoogle" color="primary">Login with Google</BaseButton>
  </span>
</template>

<script>
import axios from 'axios';
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
        this.$emit("signin-success", this.username);
      } catch (error) {
        console.error(error);
      }
    },
    loginWithGoogle() {
      // Construire l'URL d'authentification Google avec votre clé API
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=email%20profile&redirect_uri=http://localhost:8080&client_id=485993413140-jpvf1sp7nc2ch6engfpbkq3v58e4li60.apps.googleusercontent.com`;
      
      // Rediriger vers l'URL d'authentification Google
      window.location.href = googleAuthUrl;

    },
    async handleGoogleCallback() {
      try {
        console.log("it works!");
        // Récupérer le code d'autorisation de l'URL de redirection
        const authorizationCode = this.$route.query.code;

        // Échanger le code d'autorisation contre un jeton d'accès auprès de Google
        const response = await axios.post('https://oauth2.googleapis.com/token', {
          code: authorizationCode,
          client_id: '485993413140-jpvf1sp7nc2ch6engfpbkq3v58e4li60.apps.googleusercontent.com',
          client_secret: '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',
          redirect_uri: 'http://localhost:8080/auth/google/callback',
          grant_type: 'authorization_code'
        });

        // Extraire le jeton d'accès de la réponse
        const accessToken = response.data.access_token;

        // Utiliser le jeton d'accès pour récupérer les informations de l'utilisateur depuis Google
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        // Récupérer le nom d'utilisateur depuis les informations de l'utilisateur
        const username = userInfoResponse.data.name;

        // Mettre à jour le nom d'utilisateur dans le composant
        console.log(username)
        this.username = username;
      } catch (error) {
        console.log("does not work")
        console.error(error);
      }
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
