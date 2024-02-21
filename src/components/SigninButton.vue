<template>
  <span class="signinbutton">
    <BaseButton @click="signin" color="danger">Login with Microsoft</BaseButton>
    <BaseButton @click="loginWithGoogle" color="primary">Login with Google</BaseButton>
  </span>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph.js"; // Vous devrez remplacer cela avec votre fonction de connexion Google

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
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=email%20profile&redirect_uri=http://localhost:8080/auth/google/callback&client_id=AIzaSyAcNDU8kdX7FR-34L2AIq7uazwS0a_aeMg`;

    // Rediriger vers l'URL d'authentification Google
    window.location.href = googleAuthUrl;
  },
  },
};
</script>
