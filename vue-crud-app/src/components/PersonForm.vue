<template>
  <div>
    <h2>{{ isEditMode ? 'Editar Pessoa' : 'Cadastrar Pessoa' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nome Completo</label>
        <input type="text" id="name" v-model="person.name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="person.email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="phone">Telefone</label>
        <input type="tel" id="phone" v-model="person.phone" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">{{ isEditMode ? 'Salvar' : 'Cadastrar' }}</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      person: {
        name: '',
        email: '',
        phone: ''
      },
      isEditMode: false
    };
  },
  computed: {
    ...mapState(['persons'])
  },
  methods: {
    ...mapActions(['addPerson', 'updatePerson', 'savePersons']),
    handleSubmit() {
      if (this.isEditMode) {
        this.updatePerson(this.person);
      } else {
        this.addPerson(this.person);
      }
      this.savePersons();
      this.$router.push('/persons');
    }
  },
  created() {
    const personId = this.$route.params.id;
    if (personId) {
      this.isEditMode = true;
      this.person = this.persons.find(person => person.id === Number(personId)) || this.person;
    }
  }
};
</script>
