<template>
  <header class="green-header">
    <div class="header-container">
      <span class='username' v-if="username">{{ username }}</span>
      <span v-else>
        <SigninButton @signin-success="onSignInSuccess" />
      </span>
    </div>
  </header>
</template>

<script>
import SigninButton from "@/components/SigninButton.vue";

export default {
  name: "HomePage",
  components: {
    SigninButton,
  },
  props: ['username'],
  methods: {
    onSignInSuccess(username) {
      this.$emit('set-username', username);
    }
  },
  mounted() {
    console.log('HomePage mounted. Username:', this.username);
  },
};
</script>
