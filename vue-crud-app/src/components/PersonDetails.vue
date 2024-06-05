<template>
  <div>
    <h2>Detalhes da Pessoa</h2>
    <p><strong>Nome:</strong> {{ person.name }}</p>
    <p><strong>Email:</strong> {{ person.email }}</p>
    <p><strong>Telefone:</strong> {{ person.phone }}</p>
    <button @click="editPerson" class="btn btn-warning">Editar</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['persons']),
    person() {
      return this.persons.find(person => person.id === Number(this.$route.params.id)) || {};
    }
  },
  methods: {
    editPerson() {
      this.$router.push(`/persons/${this.$route.params.id}/edit`);
    }
  },
  created() {
    this.$store.dispatch('fetchPersons');
  }
};
</script>
