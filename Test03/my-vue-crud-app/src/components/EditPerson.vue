<!-- EditPerson.vue -->
<template>
  <div>
    <h2>Editar Pessoa</h2>
    <form @submit.prevent="editPerson">
      <div class="form-group">
        <label>Nome Completo</label>
        <input type="text" class="form-control" v-model="person.name" required />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="person.email" required />
      </div>
      <div class="form-group">
        <label>Telefone</label>
        <input type="text" class="form-control" v-model="person.phone" />
      </div>
      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
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
  },
  methods: {
    editPerson() {
      const persons = JSON.parse(localStorage.getItem('persons')) || []
      const index = persons.findIndex(person => person.id === this.person.id)
      persons[index] = this.person
      localStorage.setItem('persons', JSON.stringify(persons))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* seu estilo aqui */
</style>
