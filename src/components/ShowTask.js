import React from 'react'

//Tasklist et setTasklist sont des props qu'on a passé a la fonction ShowTask
const ShowTask = ({tasklist , setTasklist, task, setTask}) => {


    const handleEdit = (id) => {
        //Ici on selectionne la tache en question avec la fonction ou methode find
        const selectedTask = tasklist.find(todo => todo.id === id);
        //Ici on met a jour l'etat task (qui est un tableau) avec la tache  selectionné
        setTask(selectedTask)
    }
    const handleDelete = (id) => {
        //Ici on recupere les taches qui n'ont pas ete selectionne avec la fonction ou methode filter
        const updateTaskList = tasklist.filter(todo => todo.id !== id);
        //Ici on met a jour l'etat tasklist (qui est un tableau) avec les taches non selectionné
        setTasklist(updateTaskList);
    }




    
return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                {/* Ici on affiche le nombre de tache en utilisant la methode length */}
                <span className='count'>{tasklist.length}</span>
            </div>
            <button onClick={() => setTasklist([])} className="clearAll" >Effacer tous</button>
        </div>
        <ul>
            {/* Ici on utilisé la methode map pour parcour la liste de taches( qui est tableau ) et affiche le nom et le temps */}
            { tasklist.map((todo) => (
                <li key={todo.id}>
                    <p>
                        <span className='name'>{todo.name}</span>
                        <span className='time'>{todo.time}</span>
                    </p>
                    <i   onClick={() =>handleEdit(todo.id)} className='bi bi-pencil-square'></i>
                    <i  onClick={() =>handleDelete(todo.id)} className='bi bi-trash'></i>
                </li>
            ))}

        </ul>
    </section>
)
}

export default ShowTask
