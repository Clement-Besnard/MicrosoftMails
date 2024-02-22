<template>
    <div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'AuthCallback',
  mounted() {
    const params = new URLSearchParams(window.location.search);
    const authorizationCode = params.get('code');

    this.exchangeAuthorizationCode(authorizationCode);
  },
  methods: {
    async exchangeAuthorizationCode(authorizationCode) {
      try {
        const response = await axios.post('https://oauth2.googleapis.com/token', {
          code: authorizationCode,
          client_id: '485993413140-jpvf1sp7nc2ch6engfpbkq3v58e4li60.apps.googleusercontent.com',
          client_secret: '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',
          redirect_uri: 'http://localhost:8080/auth/callback',
          grant_type: 'authorization_code'
        });

        const accessToken = response.data.access_token;

        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const username = userInfoResponse.data.name;

        // Stocker les informations d'identification dans le stockage local
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('username', username);
        
        this.$root.setUsername(username);

        // Rediriger l'utilisateur vers la page principale une fois que les informations sont disponibles
        this.$router.push('/');

      } catch (error) {
        console.error('Error exchanging authorization code:', error);
      }
    }
  }
};
</script>
