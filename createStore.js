import { createStore, bindActionCreators,combineReducers } from "redux";


const ADD_TODO = 'add_todo'
const DEL_TODO = 'delete_todo'
const EDIT_TODO = 'edit_todo'
const USER = 'add_user'




function todoReducer(state = [],action){

if(action.type == ADD_TODO){

    const task  = action.payload.task

    return [
        ...state,
        {
            id: (state.length == 0) ? 1 : state.length + 1, 
            Task : task,
            isFinished: false
        }
    ]
}

else if(action.type == DEL_TODO){
    const todoId = action.payload.todoId

    return state.filter(t => t.id != todoId)
}

else if(action.type == EDIT_TODO){

    const todo = action.payload.todo
    const editText = action.payload.editText

      state.map(t => {
        if(t.id == todo){
            t.Task = editText
        }

        return t
    })

   
}

return state
}

function userReducer(state = [],action){

    if(action.type == USER){

        const userName = action.payload.userName
        const userClass = action.payload.userClass

        return [
            ...state,
            {id: (state.length == 0) ? 1 : state.length + 1,
                name: userName,
                class: userClass
            }
        ]
    }

    return state;
}

const reducer  = combineReducers({todo:todoReducer, users:userReducer})



const {dispatch, subscribe, getState} = createStore(reducer)

//action obj to action method(action creator)
const add_todo = (takeNeedToBeDone)=>({type:ADD_TODO,payload:{task:takeNeedToBeDone}})
const del_todo = (deletedItem)=>({type:DEL_TODO,payload:{todoId:deletedItem}})
const edt_todo = (todo,editText)=>({type:EDIT_TODO,payload:{todo:todo, editText:editText}})

const user_dtl = (userName,clas) => ({type:USER, payload:{userName:userName,userClass:clas}})

const actions =  bindActionCreators({add_todo,del_todo,edt_todo,user_dtl}, dispatch)



subscribe(()=>{console.log(getState());
})

actions.add_todo("this is Jeevan Gaudel")

actions.add_todo("this is Bhuntu Gaudel")

actions.add_todo("this is Tila Gaudel")

actions.del_todo(2)

actions.edt_todo(1,"hahahahahahaha")

actions.user_dtl("Shivangi Mishra Gaudel", "UKG")
actions.user_dtl("Jeevan Gaudel", "UKG")




