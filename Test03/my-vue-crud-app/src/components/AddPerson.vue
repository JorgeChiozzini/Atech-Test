<!-- AddPerson.vue -->
<template>
  <div>
    <h2>Adicionar Pessoa</h2>
    <form @submit.prevent="addPerson">
      <div class="form-group">
        <label>Nome Completo</label>
        <input type="text" class="form-control" v-model="name" required />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" v-model="email" required />
      </div>
      <div class="form-group">
        <label>Telefone</label>
        <input type="text" class="form-control" v-model="phone" />
      </div>
      <button type="submit" class="btn btn-primary">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    addPerson() {
      const newPerson = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        phone: this.phone
      }
      const persons = JSON.parse(localStorage.getItem('persons')) || []
      persons.push(newPerson)
      localStorage.setItem('persons', JSON.stringify(persons))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* seu estilo aqui */
</style>
