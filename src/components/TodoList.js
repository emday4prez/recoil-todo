import React from 'react'
import TodoItemCreator from './TodoItemCreator';
import {useRecoilValue} from 'recoil'
import TodoListFilters from './TodoListFilters';
import TodoItem from './TodoItem'
import filteredTodoListState from './filteredTodoListState';
import TodoListStats from './TodoListStats';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats /> 
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;