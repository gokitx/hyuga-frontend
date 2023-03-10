import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
       
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        // ...
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        },
        doneTodosCount(state) {
            return state.todos.filter(todo => todo.done)
        },
        count(state) {
            return state.count
        }
    }
})

