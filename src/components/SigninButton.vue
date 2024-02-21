<template>
  <span class="signinbutton">
  <BaseButton @click="signin" color="danger">Sign In</BaseButton></span>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import { signInAndGetUser } from "../lib/microsoftGraph.js";

export default {
  name: "SigninButton",
  components: { BaseButton },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    async signin() {
      try {
        const user = await signInAndGetUser();
        this.username = user.account.name;
        this.$emit("signin-success", this.username);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
