<template>
  <div>
    <h1 class="title">Lista de Pessoas</h1>
    <div class="mb-3">
      <input type="text" v-model="searchQuery" placeholder="Buscar pessoa..." class="form-control" @input="searchPersons">
    </div>
    <ul class="list-group">
      <li
        v-for="person in filteredPersons"
        :key="person.id"
        :class="{'selected': selectedPersonId === person.id}"
        class="list-group-item d-flex justify-content-between align-items-center"
        @click="toggleSelected(person.id)"
      >
        <div>
          <h5>{{ person.name }}</h5>
          <p>{{ person.email }}</p>
        </div>
        <div v-if="selectedPersonId === person.id" class="button-group">
          <button class="btn btn-secondary btn-sm" @click.stop="$router.push(`/persons/${person.id}`)">
            <i class="fas fa-eye"></i> Ver Detalhes
          </button>
          <button class="btn btn-info btn-sm" @click.stop="$router.push(`/persons/${person.id}/edit`)">
            <i class="fas fa-edit"></i> Editar
          </button>
          <button class="btn btn-danger btn-sm" @click.stop="handleDelete(person.id)">
            <i class="fas fa-trash-alt"></i> Excluir
          </button>
        </div>
      </li>
    </ul>
    <button class="btn btn-primary mt-3" @click="$router.push('/persons/new')">
      <i class="fas fa-plus"></i> Adicionar Pessoa
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'PersonList',
  data() {
    return {
      searchQuery: '',
      selectedPersonId: null // Track the selected person
    };
  },
  computed: {
    ...mapState(['persons']),
    filteredPersons() {
      return this.persons.filter(person =>
        person.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        person.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(['deletePerson']),
    handleDelete(personId) {
      if (confirm('Tem certeza de que deseja excluir esta pessoa?')) {
        this.deletePerson(personId);
        if (this.selectedPersonId === personId) {
          this.selectedPersonId = null;
        }
      }
    },
    searchPersons() {
      // Você pode adicionar uma ação para buscar pessoas aqui, ou apenas filtrar localmente como está sendo feito
      // this.$store.dispatch('searchPersons', this.searchQuery);
    },
    toggleSelected(personId) {
      if (this.selectedPersonId === personId) {
        this.selectedPersonId = null;
      } else {
        this.selectedPersonId = personId;
      }
    }
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
  cursor: pointer;
}

.list-group-item.selected {
  background-color: #e2e6ea;
  border-color: #adb5bd;
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

.button-group {
  display: flex;
  gap: 0.5rem;
}

.person-details {
  width: 100%;
}
</style>
