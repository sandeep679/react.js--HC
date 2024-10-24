import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {               //it is inital state in store
    todos: [{id: 1, text: "Hello world"}]            //it is object
}



export const todoSlice = createSlice({                                   //it is method to createslice
    name: 'todo',                           // it is property
    initialState,
    reducers: {                                  //it is property of rkt. reducer contain properties and function
        addTodo: (state, action) => {           // addtodo is property and it have function  
            const todo = {
                id: nanoid(), 
                text: action.payload            //it  gives vales from data
            }
            state.todos.push(todo)    //upar wale todos m todo ko push kr raha hai and update kr raha  state ko current values
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions      //functionality ke through state m action karega and action ke through value mil jayegi and compnents m kaam aayega

export default todoSlice.reducer        //store have only access to register reducer so we have here exports all  list of reducer 