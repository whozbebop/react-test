import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import './assets/styles/index.css';
//import './App.css';
//import './assets/styles/commons.scss';

// function App() {
//   return (
//     <div>
//       <center>
//       <h1>ddd</h1>
//       </center>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
      </TodoListTemplate>
    );
  }
}

export default App;
