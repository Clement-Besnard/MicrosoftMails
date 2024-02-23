<template>
    <div>
      <h1>Détails du Mail</h1>
      <div>
        <div v-for="email in emails" :key="email.destination">
          <div>À : {{ email.destination }}</div>
          <div>Objet : {{ email.object }}</div>
          <div>{{ email.message }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
    emails() {
      return JSON.parse(localStorage.getItem('emails')) || [];
    }
  }
}
  </script>
  
  <style>
  </style>
  