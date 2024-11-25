<template>
  <aside class="fixed top-0 left-0 teachers-sidebar">
    <div class="sidebar-header">
      <h2 class="text-lg font-semibold text-black">Teachers</h2>
    </div>
    <ul class="sidebar-menu">
      <li v-for="teacher in teachers" :key="teacher.id" class="menu-item">
        <a href="#" class="menu-link">{{ teacher.name }}</a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TeachersSidebar',
  data() {
    return {
      teachers: [
        { id: 1, name: 'Mr. John Doe' },
        { id: 2, name: 'Ms. Jane Smith' },
        { id: 3, name: 'Dr. Emily Davis' },
      ],
    }
  },
})
</script>

<style scoped>
.teachers-sidebar {
  position: fixed; /* Sidebar stays fixed on the left */
  top: 0;
  left: 0;
  width: 400px; /* Fixed width */
  height: 100vh; /* Full height of the screen */
  @apply bg-primary-gray;
  color: black;
  padding: 1rem;
  overflow-y: auto; /* Scrollable if content overflows */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Add a shadow for depth */
}

.sidebar-header {
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin-bottom: 0.5rem;
}

.menu-link {
  color: black;
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;
}

.menu-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
