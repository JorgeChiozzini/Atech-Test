import { createStore } from 'vuex';

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
    addPerson({ commit, dispatch }, person) {
      person.id = Date.now(); 
      commit('ADD_PERSON', person);
      dispatch('savePersons');
    },
    updatePerson({ commit, dispatch }, person) {
      commit('UPDATE_PERSON', person);
      dispatch('savePersons');
    },
    deletePerson({ commit, dispatch }, personId) {
      commit('DELETE_PERSON', personId);
      dispatch('savePersons');
    },
    fetchPersons({ commit }) {
      const persons = JSON.parse(localStorage.getItem('persons') || '[]');
      commit('SET_PERSONS', persons);
    },
    savePersons({ state }) {
      localStorage.setItem('persons', JSON.stringify(state.persons));
    }
  }
});

export default store;
