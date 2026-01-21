<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Tienda Vue. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  margin-top: auto;
}

.footer-content {
  text-align: center;
}
</style>

