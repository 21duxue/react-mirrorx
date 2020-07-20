import { actions } from "mirrorx";

export default {
    name: 'app',
    initialState: {
        count:0,
        view:{

        },
        list:[]
    },
    reducers: {
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        },
        
        add(state){
            console.log(state.count)
            state.count ++ 
            return state
        },
        add1:(state,data)=>{
            
        }
    },
    effects: {
      async incrementAsync() {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 1000)
        })
        actions.app.add()
      }
    }
  }
