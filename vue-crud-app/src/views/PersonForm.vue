<template>
  <div>
    <PersonForm @add-person="addPerson" @update-person="updatePerson" />
  </div>
</template>

<script>
import PersonForm from '../components/PersonForm.vue';

export default {
  components: {
    PersonForm
  },
  methods: {
    addPerson(person) {
      this.$store.dispatch('addPerson', person);
      this.$store.dispatch('savePersons');
    },
    updatePerson(person) {
      this.$store.dispatch('updatePerson', person);
      this.$store.dispatch('savePersons');
    }
  }
};
</script>
