import Tasks from "./Tasks.jsx";

export default function SelectedProject({
                                            project,
                                            deleteProject,
                                            onAddTask,
                                            onDeleteTask,
                                            tasks


}) {
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }
    return (
        <div className='w-[35rem] mt-16'>
            <header className='pb-4 mb-4 border-b-2 border-stone-300'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                    <button className='text-stone-600 hover:text-stone-950' onClick={deleteProject}>Delete</button>
                </div>
                <p className='mb-4 text-stone-400'>{formatDate(project.dueDate)}</p>
                <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
            </header>
            <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks}></Tasks>
        </div>
    )
}
