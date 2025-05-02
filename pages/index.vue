<template>
  <div class="h-screen" style="height: 100vh; width: 100%;display: flex;justify-content: center;align-items: center;">
    <v-card width="400" height="400">
      <v-card-text>
        <div class="text-center pa-4">Login</div>
        <v-text-field label="Username"></v-text-field><br />
        <v-text-field label="Password"></v-text-field>
        <br />
        <v-btn to="/home" block>Login</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
