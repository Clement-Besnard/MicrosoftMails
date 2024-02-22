<template>
  <div>
    <header class="green-header">
      <div class="header-container">
        <h1>VueJS test bob</h1>
        <span class='username' v-if="username">{{ username }}</span>
        <span v-else>
          <SigninButton @signin-success="onSignInSuccess" />
        </span>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>

    <footer>
      <p style="color: #ffffff; ">Copyright © 2023 My App</p>
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
  mounted() {
    console.log('HomePage mounted. Username:', this.username);
  },
};
</script>