<template>
  <div class="page-container">
    <header class="green-header">
      <div class="header-container">
        <h1>VueJS Test Bob</h1>
        <span class='username' v-if="loggedInUsername">{{ loggedInUsername }}</span>
        <span v-else>
          <SigninButton @signin-success="onSignInSuccess" />
        </span>
      </div>
    </header>
    <main class="main-content">
      <div>
        <input type="text" v-model="newEmail" placeholder="Entrez un email">
        <button @click="ajouterEmail" class="add-email-button">Ajouter Email</button>
        <ul>
          <li v-for="email in emails" :key="email">
            {{ email }}
            <button @click="supprimerEmail(email)" class="delete-email-button">Supprimer</button>
          </li>
        </ul>
      </div>
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
  data() {
    return {
      newEmail: '',
      emails: [],
      loggedInUsername: null, // Nouvelle variable locale pour stocker le nom d'utilisateur connecté
    };
  },
  methods: {
    setUsername(username) {
      this.loggedInUsername = username; // Utiliser la variable locale pour stocker le nom d'utilisateur
      console.log('Username updated:', this.loggedInUsername);
    },
    ajouterEmail() {
      if (this.newEmail.includes('@') && this.newEmail.includes('.')) {
        this.emails.push(this.newEmail);
        this.newEmail = '';
      } else {
        alert('Email non valide');
      }
    },
    supprimerEmail(email) {
      const index = this.emails.indexOf(email);
      if (index !== -1) {
        this.emails.splice(index, 1);
      }
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
