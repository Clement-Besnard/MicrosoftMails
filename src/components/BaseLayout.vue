<template>
  <div class="page-container">
    <header class="green-header">
      <div class="header-container">
        <h1>VueJS Test Bob</h1>
        <span class='username' v-if="username">{{ username }}</span>
        <span v-else>
          <SigninButton @signin-success="onSignInSuccess" />
        </span>
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

export default {
  name: "BaseLayout",
  components: {
    SigninButton,
  },
  props: ['username'],
  methods: {
    onSignInSuccess(username) {
      this.$emit('set-username', username);
    }
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
