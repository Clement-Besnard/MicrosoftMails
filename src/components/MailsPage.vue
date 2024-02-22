<template>
  <div>
    <h1>HELLO</h1>
    <main class="main-content">
      <div>
        <input type="email" v-model="newEmail.destination" placeholder="Entrez une adresse e-mail">
        <input type="text" v-model="newEmail.object" placeholder="Entrez un objet">
        <input type="text" v-model="newEmail.message" placeholder="Entrez un message">
        <button @click="envoyerEmail" class="send-email-button">Envoyer Email</button>
        <ul>
          <li v-for="email in emails" :key="email.destination">
            <div>À : {{ email.destination }}</div>
            <div>Objet : {{ email.object }}</div>
            <div>{{ email.message }}</div>
            <button @click="supprimerEmail(email)" class="delete-email-button">Supprimer</button>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newEmail: {
        destination: '',
        object: '',
        message: '',
      },
      emails: [],
      loggedInUsername: null,
    };
  },
  methods: {
    envoyerEmail() {
      // Vérifier que le message, l'adresse e-mail de destination et l'objet ne sont pas vides
      if (this.newEmail.message.trim() === '' || this.newEmail.destination.trim() === '' || this.newEmail.object.trim() === '') {
        alert('Veuillez saisir un message, une adresse e-mail et un objet.');
        return;
      }

      // Créer un nouvel e-mail avec les données saisies
      const email = {
        destination: this.newEmail.destination,
        object: this.newEmail.object,
        message: this.newEmail.message,
      };

      // Ajouter l'e-mail à la liste
      this.emails.push(email);

      // Réinitialiser les champs du nouvel e-mail
      this.newEmail.destination = '';
      this.newEmail.object = '';
      this.newEmail.message = '';
    },
    supprimerEmail(email) {
      // Trouver l'index de l'e-mail dans la liste
      const index = this.emails.findIndex(e => e === email);
      if (index !== -1) {
        // Supprimer l'e-mail de la liste
        this.emails.splice(index, 1);
      }
    },
  },
};
</script>

<style>
/* Ajoutez vos styles CSS personnalisés ici */
</style>
