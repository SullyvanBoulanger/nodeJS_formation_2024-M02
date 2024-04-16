<script setup></script>

<template>
  <nav>
    <router-link to="/">Tasks</router-link>
    <router-link to="/create">Create</router-link>
  </nav>

  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
