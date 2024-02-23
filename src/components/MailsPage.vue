<template>
  <div class="page-container">
    <main class="main-content">
      <div>
        <input type="email" v-model="newEmail.destination" placeholder="Entrez une adresse e-mail">
        <input type="text" v-model="newEmail.object" placeholder="Entrez un objet">
        <textarea type="text" v-model="newEmail.message" placeholder="Entrez un message"></textarea>
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
    <footer class="footer">
      <p>&copy; 2024 My App</p>
    </footer>
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
/* Styles pour la page entière */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0; /* Couleur de fond de la page */
}

/* Styles pour le contenu principal */
.main-content {
  max-width: 600px;
  width: 100%;
  margin-top: 20px;
}

/* Styles pour les champs de saisie */
input[type="email"],
input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Styles pour le bouton d'envoi */
.send-email-button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.send-email-button:hover {
  background-color: #45a049;
}

/* Styles pour la liste des e-mails */
ul {
  list-style-type: none;
  padding: 0;
}

/* Styles pour chaque e-mail dans la liste */
/* Styles pour chaque e-mail dans la liste */
li {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff; /* Couleur de fond */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre légère */
  transition: box-shadow 0.3s ease; /* Transition pour une animation fluide */

  /* Position relative pour positionner le bouton de suppression */
  position: relative;
}

/* Style pour chaque e-mail lorsqu'il est survolé */
li:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre plus prononcée au survol */
}

/* Styles pour les boutons de suppression */
.delete-email-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  position: absolute;
  top: 10px; /* Position par rapport au haut de l'élément li */
  right: 10px; /* Position par rapport à la droite de l'élément li */
}

.delete-email-button:hover {
  background-color: #cc0000;
}

/* Styles pour le footer */
.footer {
  background-color: #333;
  color: #fff;
  padding: 15px 0;
  text-align: center;
}
</style>
