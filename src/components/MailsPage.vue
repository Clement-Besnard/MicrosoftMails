<template>
    <h1>HELLO</h1>
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
</template>

<script>


export default {
  data() {
    return {
      newEmail: '',
      emails: [],
      loggedInUsername: null, // Nouvelle variable locale pour stocker le nom d'utilisateur connecté
    };
  },
  methods: {
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