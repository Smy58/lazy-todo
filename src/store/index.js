import { createStore } from 'vuex'
const url = 'http://www.boredapi.com/api/activity/'

export default createStore({
  state: {
    todoItem: {},
    todoList: []
  },
  getters: {
    TODOITEM(state) {
      return state.todoItem
    },
    TODOLIST(state) {
      return state.todoList
    }
  },
  mutations: {
    ADD_ITEM_TO_LIST:(state, item) => {
      console.log(state.todoList)

      state.todoList.push(item)

      console.log(state.todoList)

      localStorage.setItem('todoList', JSON.stringify(state.todoList))
    },
    DEL_ITEM_FROM_LIST:(state, item) => {
      const newList = state.todoList.filter(el => {
        // console.log(el)
        // console.log(item)
        if(el.key != item.key) {
          return el
        }
      });

      state.todoList = newList;
      localStorage.setItem('todoList', JSON.stringify(state.todoList))

    },
    SET_LIST:(state, items) => {
      state.todoList = items;

      console.log(state.todoList)
    },
    SET_NEW_ITEM:(state, item) => {
      state.todoItem = item

      localStorage.setItem('todoItem', JSON.stringify(item))
    }
  },
  actions: {
    GET_ITEM_FROM_API({commit}) {
      return fetch(url)
        .then((res) => res.json())
        .then(data => {
          commit('SET_NEW_ITEM', data)
        })
        .catch((err) => {
          console.log(err)
        })
      // console.log("ACTION")
    },
  },
  modules: {
  }
})
