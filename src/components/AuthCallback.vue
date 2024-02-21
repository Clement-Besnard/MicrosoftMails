<template>
    <div>
      <h1>Auth Callback Page</h1>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AuthCallback',
    mounted() {
      // Récupérer les paramètres de l'URL
      const params = new URLSearchParams(window.location.search);
      const authorizationCode = params.get('code');
  
      // Échanger le code d'autorisation contre un jeton d'accès
      this.exchangeAuthorizationCode(authorizationCode);
    },
    methods: {
      async exchangeAuthorizationCode(authorizationCode) {
        try {
          // Effectuer une requête HTTP POST pour échanger le code d'autorisation contre un jeton d'accès
          const response = await axios.post('https://oauth2.googleapis.com/token', {
            code: authorizationCode,
            client_id: '485993413140-jpvf1sp7nc2ch6engfpbkq3v58e4li60.apps.googleusercontent.com',
            client_secret: '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',
            redirect_uri: 'http://localhost:8080/auth/callback',
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
  
          // Stocker le nom d'utilisateur localement (par exemple, dans le stockage local ou dans l'état de votre application Vue.js)
          // Par exemple :
          localStorage.setItem('username', username);
  
          // Rediriger l'utilisateur vers la page principale ou toute autre page appropriée
          this.$router.push('/');
        } catch (error) {
          console.error('Error exchanging authorization code:', error);
          // Gérer les erreurs
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Styles spécifiques à la page de retour d'authentification */
  </style>
  