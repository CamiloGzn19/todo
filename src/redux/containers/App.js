import React from 'react'
import { Provider } from 'react-redux'
import TodoBack from '../../components/TodoBack'
import store from '../store/store'

const ToDoApp = () => {
  return (
    <Provider store={store}>
      <TodoBack/>
    </Provider>
  )
}

export default ToDoApp