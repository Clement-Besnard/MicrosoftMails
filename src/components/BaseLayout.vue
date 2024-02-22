<template>
  <div>
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
    <main>
      <slot></slot>
    </main>

    <footer>
      <p style="color: #ffffff;"></p>
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
  mounted() {
    console.log('BaseLayout mounted. Username:', this.username);
  },
};
</script>

<style scoped>
.buttons-container {
  display: flex;
  justify-content: flex-start;
  align-items: center; /* Aligner les éléments verticalement au centre */
}

/* Ajout de styles pour le bouton de déconnexion */
.base-button--logout {
  margin-right: 10px;
}
</style>
