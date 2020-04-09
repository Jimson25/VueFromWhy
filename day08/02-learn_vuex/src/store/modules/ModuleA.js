import {UPDATENAME_A} from "../Mutations-type";

export default {
  state: {
    name: '法外狂徒张三'
  },
  mutations: {
    [UPDATENAME_A](state, payload) {
      state.name = payload;
    }
  },
  getters: {
    getFullName(state) {
      return state.name + '_的'
    },
    getFullNamePlus(state, getters) {
      return getters.getFullName + '_英文名字是: '
    },
    getFullNamePlusRoot(state, getters, rootSate) {
      return getters.getFullNamePlus + rootSate.name;
    }
  },
  actions: {
    A_UpdateName(context) {
      console.log('context_moduleA');
      setTimeout(()=>{
        context.commit(UPDATENAME_A,'李四')
      },1000)
    }
  }
}
