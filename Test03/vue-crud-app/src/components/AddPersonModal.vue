<template>
  <div class="modal fade" id="addPersonModal" tabindex="-1" aria-labelledby="addPersonModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addPersonModalLabel">Adicionar Pessoa</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Formulário para adicionar pessoa -->
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Nome Completo</label>
              <input type="text" class="form-control" id="name" v-model="person.name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" v-model="person.email" required>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefone</label>
              <input type="tel" class="form-control" id="phone" v-model="person.phone">
            </div>
            <button type="submit" class="btn btn-primary">Adicionar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPersonModal',
  data() {
    return {
      person: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Enviar o formulário para o Vuex ou qualquer outro local de armazenamento
      // Reiniciar o formulário após a submissão
      this.person = { name: '', email: '', phone: '' };
      // Fechar o modal após a submissão
      $('#addPersonModal').modal('hide');
    }
  }
};
</script>

<style>
/* Adicione estilos personalizados conforme necessário */
</style>
