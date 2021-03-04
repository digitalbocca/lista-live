'use strict'

import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  actions: {
    async obterListaDeAlunos (context) {
      const chamadaAPI = (await axios.get('https://randomuser.me/api/?nat=br&inc=name,email&results=20')).data.results
      const listaDeAlunos = chamadaAPI.map(aluno => {
        return {
          nome: `${aluno.name.first} ${aluno.name.last}`,
          email: aluno.email
        }
      })
      context.commit('LISTA_DE_ALUNOS', listaDeAlunos)
    }
  },
  getters: {
    alunos (state) {
      return state.alunos
    }
  },
  mutations: {
    LISTA_DE_ALUNOS (state, lista) {
      state.alunos = lista
    }
  },
  state: {
    alunos: []
  }
})