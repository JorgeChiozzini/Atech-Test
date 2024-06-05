<template>
  <div>
    <PersonList @delete-person="deletePerson" />
  </div>
</template>

<script>
import PersonList from '../components/PersonList.vue';

export default {
  components: {
    PersonList
  },
  methods: {
    deletePerson(id) {
      this.$store.dispatch('deletePerson', id);
      this.$store.dispatch('savePersons');
    }
  }
};
</script>
