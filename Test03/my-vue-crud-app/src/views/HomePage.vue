<!-- HomePage.vue -->
<template>
  <div>
    <h1>Home</h1>
    <AddPerson />
    <PersonList />
  </div>
</template>

<script>
import AddPerson from '../components/AddPerson.vue'
import PersonList from '../components/PersonList.vue'

export default {
  name: 'HomePage',
  components: {
    AddPerson,
    PersonList
  }
}
</script>

<style scoped>
/* Seu estilo aqui */
</style>
