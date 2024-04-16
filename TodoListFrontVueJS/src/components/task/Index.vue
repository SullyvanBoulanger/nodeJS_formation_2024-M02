<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { dateToString } from "../../utils/date";

const tasks = ref({});

onMounted(() => {
  axios
    .get("http://localhost:3000/tasks")
    .then((res) => (tasks.value = res.data));
});

const deleteTask = (id) => {
  axios.delete(`http://localhost:3000/task/${id}`).then((res) => {
    tasks.value = tasks.value.filter((task) => task._id !== id);
  });
};
</script>

<template>
  <h1>Tasks</h1>
  <table>
    <thead>
      <th>Name</th>
      <th>Description</th>
      <th>Start date</th>
      <th>End date</th>
      <th>Done</th>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task._id">
        <td>{{ task.title }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.date_debut }}</td>
        <td>{{ task.date_fin }}</td>
        <td>{{ task.done }}</td>
        <td>
          <router-link :to="'/update/' + task._id">Edit</router-link>
          <button @click="deleteTask(task._id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
