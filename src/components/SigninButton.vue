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
      // Rediriger vers la page de connexion Google
      window.location.href = "/auth/google"; // Remplacez cela avec l'URL de votre backend pour l'authentification Google
    },
  },
};
</script>
