import { Header } from './components/Header';


import { useEffect, useState } from 'react';
import "./App.css";
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';


export default function App() {

  //Ici on a initialise l'etat tasklist a tableau vide
    const [ tasklist, setTasklist ] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  //Ici on a initialise l'etat task a objet vide
    const [task, setTask ] = useState({})

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasklist))
  },[tasklist])

  return (
      <div className="App">
        <Header />
        {/*ici dans ces composants on recois les props*/}
        <AddTask  tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
        <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask}/>
        </div>
  )
}
