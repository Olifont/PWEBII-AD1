import { useState } from 'react'

import "./App.css"

function eVazio(_str) {
  if (_str == null || _str == "")
      return true;
  return false;
}

function validar() {

  if (eVazio(nome) || eVazio(CPF)) {
    alert('Nome e CPF são campos obrigatórios.');
  } else {
    const cliente = {
      clienteId: cont + 1,
      nome,
      CPF,
      aniversario,
      comida,
    };
    console.log(cliente);
  }
}

function MyForm ( {addTodo} ){
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [aniversario, setAniversario] = useState("");
  const [comida, setComida] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !CPF) {
      alert('Nome e CPF são campos obrigatórios.');
    }
    addTodo(name, CPF, aniversario, comida);
    setName("");
    setCPF("");
    setAniversario("");
    setComida("");
  };
  return(
    <div className="center">
      <form name="FrmCadastroCliente" method="post" id="cadastro_usuarios_form" onSubmit={handleSubmit}>
        
        <label>Nome</label>
        <input type="text" placeholder='Insira seu nome...'
         value={name}
         onChange={(e) => setName(e.target.value)}/>
        
        <label>CPF</label>
        <input type="text" placeholder='Insira seu CPF...' 
        value={CPF}
        onChange={(e) => setCPF(e.target.value)}/>

        <label>Data de Aniversário</label>
        <input type="text" placeholder='Insira sua data de aniversário...' 
        value={aniversario}
        onChange={(e) => setAniversario(e.target.value)}/>

        <label>Comida Favorita</label>
        <input type="text" placeholder='Insira sua comida favorita...' 
        value={comida}
        onChange={(e) => setComida(e.target.value)}/>

        <button className='botao_cadastro'>Cadastrar</button>

      </form> 
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      nome: "João da Silva",
      CPF: "111.111.111-11",
      aniversario: "03/08",
      comida: "arroz",
      isCompleted: false,
    },
    {
      id: 2,
      nome: "Maria da Silva",
      CPF: "111.111.111-11",
      aniversario: "03/02",
      comida: "feijão",
      isCompleted: false,
    },
    {
      id: 3,
      nome: "Pedro da Silva",
      CPF: "111.111.111-11",
      aniversario: "26/09",
      comida: "arroz",
      isCompleted: false,
    }
  ])

  const addTodo = (nome, CPF, aniversario, comida) => {
    const newTodos = [...todos, {
        id: Math.floor(Math.random() * 1000),
        nome,
        CPF,
        aniversario,
        comida,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
      );
    setTodos(filteredTodos);
  }

  return <div className="app">
    <h1>
      Cadastro Clientes
    </h1>

    <MyForm addTodo={addTodo}/>

    <h1>
      Clientes Cadastrados
    </h1>

    <div className="todos-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
      ))}
    </div>

  </div>
}

function Todo({todo, removeTodo}){
  return(
    <div className="todo">
      <div className="content">
        <h2>{todo.id}- {todo.nome}</h2>
        <p>CPF: {todo.CPF}</p>
        <p>Aniversário: {todo.aniversario}</p>
        <p>Comida favorita: {todo.comida}</p>
        <button className='complete'>Editar</button>
        <button className='remove'onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  )
}

export default App