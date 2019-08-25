export default {
  state: {
    tasks:[{
      id: '0',
      title:'Task 1',
      completed:true
    }, {
      id: '1',
      title:'Task 2',
      completed:false
    }, {
      id: '2',
      title: 'Task 3',
      completed:false
    }]
  },
  mutations: {
    TASKS(state, payload){
      state.tasks = payload
    },
  },
  getters:{
    getTasks: (state) => state.tasks,
  }
}