<!-- PersonDetails.vue -->
<template>
  <div>
    <h2>Detalhes da Pessoa</h2>
    <p><strong>Nome:</strong> {{ person.name }}</p>
    <p><strong>Email:</strong> {{ person.email }}</p>
    <p><strong>Telefone:</strong> {{ person.phone }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      person: {}
    }
  },
  created() {
    const persons = JSON.parse(localStorage.getItem('persons')) || []
    this.person = persons.find(person => person.id === parseInt(this.id))
  }
}
</script>

<style scoped>
/* seu estilo aqui */
</style>
