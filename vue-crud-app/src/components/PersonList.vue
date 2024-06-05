<template>
  <div>
    <h1 class="title">Lista de Pessoas</h1>
    <button class="btn btn-primary mb-3" @click="$router.push('/persons/new')">Adicionar Pessoa</button>
    <ul class="list-group">
      <li v-for="person in persons" :key="person.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h5>{{ person.name }}</h5>
          <p>{{ person.email }}</p>
        </div>
        <div>
          <button class="btn btn-secondary btn-sm" @click="$router.push(`/persons/${person.id}`)">Ver Detalhes</button>
          <button class="btn btn-info btn-sm" @click="$router.push(`/persons/${person.id}/edit`)">Editar</button>
          <button class="btn btn-danger btn-sm" @click="deletePerson(person.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PersonList',
  computed: {
    ...mapState(['persons'])
  },
  methods: {
    ...mapActions(['deletePerson']),
  },
  created() {
    this.$store.dispatch('fetchPersons');
  }
};
</script>

<style>
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.list-group-item {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.list-group-item h5 {
  margin: 0;
  font-size: 1.25rem;
}

.list-group-item p {
  margin: 0;
  color: #6c757d;
}

.btn {
  margin-left: 0.5rem;
}
</style>
