import React from 'react';

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id){
        const date = new Date(task.id);
        const updateTask = tasklist.map((todo) => (
          todo.id === task.id ? { id: task.id, name:task.name, time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` } : todo
        ));

        setTasklist(updateTask); // Mise à jour de la liste des tâches
        setTask({}); // Vide l'input apres la mise à jour
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
      }

      setTasklist([...tasklist, newTask]);
      setTask({}); // Vide l'input apres ajout de tache
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='task'
          autoComplete='off'
          placeholder='ajouter une tâche'
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })} // Gestion du changement
        />
        <button type='submit'>{ task.id ? "Modifier":"Ajouter"}</button>
      </form>
    </section>
  )
}

export default AddTask;
