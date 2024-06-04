<!-- PersonPage.vue -->
<template>
  <div>
    <h1>Detalhes da Pessoa</h1>
    <PersonDetails :id="$route.params.id" />
    <EditPerson :id="$route.params.id" />
  </div>
</template>

<script>
import PersonDetails from '../components/PersonDetails.vue'
import EditPerson from '../components/EditPerson.vue'

export default {
  name: 'PersonPage',
  components: {
    PersonDetails,
    EditPerson
  }
}
</script>

<style scoped>
/* Seu estilo aqui */
</style>
