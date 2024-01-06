import { useReducer, useState } from 'react';
import './App.css';

type Todo = {
  id: number,
  text: string,
  done: boolean
};

let nextId = 3;

const todos: Todo[] = [
  { id: 1, text: 'Get up at 5', done: false },
  { id: 2, text: 'Do Yoga', done: false },
  { id: 3, text: 'Eat Breakfast', done: false },
];



type TodoAction = {
  type: 'add' | 'edit' | 'delete'
  id: number,
  text: string,
  done: boolean
}

const todoReducer = (todoState: Todo[], action: TodoAction) => {
  if (action.type === 'add') {
    return [
      ...todoState,
      {
        id: action.id,
        text: action.text,
        done: false
      }
    ];
  }

  if (action.type === 'edit') {
    return todoState.map(t => {
      if (t.id === action.id) {
        return {
          id: action.id,
          text: action.text,
          done: action.done
        }
      }
      return t;
    });
  }

  if (action.type === 'delete') {
    return todoState.filter(t => {
      return t.id !== action.id;
    })
  }

  return todoState;
}


function App() {
  const [todoState, dispatch] = useReducer(todoReducer, todos);

  return (
    <>
      <header>
        <h1>
          My Todo List
        </h1>
      </header>

      <main>
        <TodoAdd dispatch={dispatch} />
        <div>
          {todoState.map(t => {
            return <TodoItem key={t.id} todo={t} dispatch={dispatch} />
          })}
        </div>

      </main>
    </>
  )

}

type TodoAddProps = {
  dispatch: (action: TodoAction) => void
}

function TodoAdd({ dispatch }: TodoAddProps) {
  const [newText, setNewText] = useState('');
  return (
    <div>
      <input type="text" placeholder='Add task' value={newText} onChange={(e) => setNewText(e.target.value)} />
      <button onClick={() => {
        dispatch({
          type: 'add',
          id: ++nextId,
          text: newText,
          done: false
        });
        setNewText('');
      }
      }>Add</button>
    </div>
  )
}

type TodoItemProps = {
  todo: Todo
  dispatch: (action: TodoAction) => void
}

function TodoItem({ todo, dispatch }: TodoItemProps) {
  const [canEdit, setCanEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [checked, setChecked] = useState(todo.done);

  return (
    <div>
      <input type="checkbox" defaultChecked={checked} onChange={() => {
        setChecked(!checked);
        dispatch({
          type: 'edit',
          id: todo.id,
          text: newText,
          done: !checked
        });
        

      }} />

      {canEdit ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={() => {
            dispatch({
              type: 'edit',
              id: todo.id,
              text: newText,
              done: todo.done
            });
            setCanEdit(false);
          }}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setCanEdit(!canEdit)}>Edit</button>
        </>
      )}
      <button onClick={() => dispatch({
        type: 'delete',
        id: todo.id,
        text: todo.text,
        done: todo.done
      })}>Delete</button>
    </div>
  )
}

export default App
