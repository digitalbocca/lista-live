<template>
  <div class="container-fluid">
    <div class="row py-5 topo">
      <div class="col">
        <h1 class="text-center text-uppercase">Lista de Alunos</h1>
      </div>
    </div>
    <div class="container py-5">
      <div class="row px-5" v-for="aluno, id in alunos" :key="id">
        <div class="col">
          <p>{{ aluno.nome }} - {{ aluno.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()

    const alunos = computed(() => store.getters.alunos)

    onMounted(() => {
      store.dispatch('obterListaDeAlunos')
    })

    return {
      alunos
    }
  }
}
</script>

<style>

@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css");

.topo{
  background-color: #6ab04c;
  color: #fff;
}

</style>
