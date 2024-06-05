import { createStore } from 'vuex';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

const store = createStore({
  state: {
    persons: []
  },
  mutations: {
    ADD_PERSON(state, person) {
      state.persons.push(person);
    },
    UPDATE_PERSON(state, updatedPerson) {
      const index = state.persons.findIndex(person => person.id === updatedPerson.id);
      if (index !== -1) {
        state.persons[index] = updatedPerson;
      }
    },
    DELETE_PERSON(state, personId) {
      state.persons = state.persons.filter(person => person.id !== personId);
    },
    SET_PERSONS(state, persons) {
      state.persons = persons;
    }
  },
  actions: {
    async addPerson({ commit }, person) {
      const response = await api.post('/persons', person);
      person.id = response.data.id;
      commit('ADD_PERSON', person);
    },
    async updatePerson({ commit }, person) {
      await api.put(`/persons/${person.id}`, person);
      commit('UPDATE_PERSON', person);
    },
    async deletePerson({ commit }, personId) {
      await api.delete(`/persons/${personId}`);
      commit('DELETE_PERSON', personId);
    },
    async fetchPersons({ commit }) {
      const response = await api.get('/persons');
      commit('SET_PERSONS', response.data);
    }
  }
});

export default store;
