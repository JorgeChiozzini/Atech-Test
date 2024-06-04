<!-- PersonList.vue -->
<template>
  <div>
    <h2>Lista de Pessoas</h2>
    <ul class="list-group">
      <li v-for="person in persons" :key="person.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h5>{{ person.name }}</h5>
          <p>{{ person.email }}</p>
        </div>
        <div>
          <button class="btn btn-primary btn-sm" @click="viewPerson(person.id)">Ver</button>
          <button class="btn btn-secondary btn-sm" @click="editPerson(person.id)">Editar</button>
          <button class="btn btn-danger btn-sm" @click="deletePerson(person.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: JSON.parse(localStorage.getItem('persons')) || []
    }
  },
  methods: {
    viewPerson(id) {
      this.$router.push(`/person/${id}`)
    },
    editPerson(id) {
      this.$router.push(`/person/${id}/edit`)
    },
    deletePerson(id) {
      this.persons = this.persons.filter(person => person.id !== id)
      localStorage.setItem('persons', JSON.stringify(this.persons))
    }
  }
}
</script>

<style scoped>
/* seu estilo aqui */
</style>
