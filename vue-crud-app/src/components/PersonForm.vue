<template>
  <div>
    <h1 class="title">{{ isEdit ? 'Editar Pessoa' : 'Adicionar Pessoa' }}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nome Completo</label>
        <input type="text" class="form-control" v-model="person.name" required>
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="person.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input type="tel" class="form-control" v-model="person.phone" pattern="[0-9]*">
      </div>
      <button type="submit" class="btn btn-success mt-3">Salvar</button>
      <button type="button" class="btn btn-secondary mt-3" @click="$router.push('/persons')">Cancelar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PersonForm',
  data() {
    return {
      person: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!this.$route.params.id;
    },
    ...mapState(['persons'])
  },
  methods: {
    ...mapActions(['addPerson', 'updatePerson']),
    handleSubmit() {
      // Verifica se o número de telefone contém apenas números, se o campo não estiver vazio
      if (this.person.phone && !/^\d+$/.test(this.person.phone)) {
        alert("Por favor, insira somente números no campo de telefone.");
        return;
      }

      if (this.isEdit) {
        this.updatePerson(this.person);
      } else {
        this.addPerson(this.person);
      }
      this.$router.push('/persons');
    }
  },
  created() {
    if (this.isEdit) {
      const person = this.persons.find(p => p.id === parseInt(this.$route.params.id));
      if (person) {
        this.person = { ...person };
      }
    }
  }
};
</script>

<style>
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.btn {
  margin-right: 0.5rem;
}
</style>
