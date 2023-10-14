
import './App.css';
import TodoInput from './component/TodoInput';
import { useState } from 'react';
import TodoList from './component/TodoList';

function App() {

  const [listTodo,setlistTodo]=useState([]);
  let addList =(inputText)=>{
    if(inputText!=='')
    setlistTodo([...listTodo,inputText]);
  }
const deleteListitem = (key)=>{
  let newListTodo=[...listTodo];
  newListTodo.splice(key,1)
  setlistTodo([...newListTodo]);
}

  return (
    <div className="App">
     
   <div className="main-container">
    <div className="center-container">
     <TodoInput  addList={addList} />
        <h1 className="app-heading">TODO</h1> 
        <hr />
        {listTodo.map((listItem,i)=>{
          return (
            <TodoList  key={i}  index={i} item={listItem}  deleteItem={deleteListitem}  />
          )
        })}  
    </div>
   </div>



    </div>
  );
}

export default App;
