<template>
  <div>
    <h2>Lista de Pessoas</h2>
    <ul class="list-group">
      <li v-for="person in persons" :key="person.id" class="list-group-item">
        <span>{{ person.name }} - {{ person.email }}</span>
        <button @click="viewPerson(person.id)" class="btn btn-info btn-sm">Detalhes</button>
        <button @click="editPerson(person.id)" class="btn btn-warning btn-sm">Editar</button>
        <button @click="deletePerson(person.id)" class="btn btn-danger btn-sm">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['persons'])
  },
  methods: {
    ...mapActions(['deletePerson', 'savePersons']),
    viewPerson(id) {
      this.$router.push(`/persons/${id}`);
    },
    editPerson(id) {
      this.$router.push(`/persons/${id}/edit`);
    },
    deletePerson(id) {
      this.deletePerson(id);
      this.savePersons();
    }
  },
  created() {
    this.$store.dispatch('fetchPersons');
  }
};
</script>
